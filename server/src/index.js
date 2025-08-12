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
app.use(bodyParser.json());
app.use(morgan("dev"));

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

// Error handling
app.use((err, req, res, next) => {
  console.error("Application error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default serverless(app);
