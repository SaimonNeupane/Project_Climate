import express from "express";
import connectDatabase from "./db.js";
import { configDotenv } from "dotenv";
import emailChecker from "../routes/EmailRoute.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import serverless from "serverless-http";

configDotenv();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// Global connection promise to avoid multiple connections
let dbConnectionPromise = null;

const initializeDatabase = async () => {
  if (!dbConnectionPromise) {
    dbConnectionPromise = connectDatabase();
  }

  try {
    await dbConnectionPromise;
    console.log("Database connection established");
  } catch (error) {
    console.error("Database connection failed:", error);
    dbConnectionPromise = null; // Reset on failure
    // Don't throw - let the app start anyway
  }
};

// Initialize DB connection immediately but don't await it
initializeDatabase();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Climate Project API",
    timestamp: new Date().toISOString(),
  });
});

app.use("/", emailChecker);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Application error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default serverless(app);
