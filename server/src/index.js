import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import emailChecker from "../routes/EmailRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));

// IMPORTANT: Use bodyParser middleware here, and handle its potential errors
// The `json()` method can throw a SyntaxError for malformed JSON, which we need to catch.
app.use(bodyParser.json());

let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  console.log(
    "Attempting to connect to MongoDB with URL:",
    process.env.DATABASE_URL
  );
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

// Connect on startup
(async () => {
  await connectDB();
})();

// Middleware to check connection status
app.use((req, res, next) => {
  if (!isConnected) {
    return res.status(503).json({ error: "Database unavailable" });
  }
  next();
});

app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.status(200).json({
    message: "Welcome to the Climate Project API",
    timestamp: new Date().toISOString(),
  });
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use("/", emailChecker);

// --- START of added error-handling middleware ---
// This specific middleware will catch the BadRequestError from bodyParser
// and send a proper 400 response, preventing a timeout.
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("Bad request error:", err.message);
    return res.status(400).json({
      status: "Fail",
      message: "Invalid JSON payload or content length mismatch.",
    });
  }
  next(err); // Pass other errors to the next handler
});
// --- END of added error-handling middleware ---

// Default error handler for all other errors
app.use((err, req, res, next) => {
  console.error("Application error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default serverless(app);
