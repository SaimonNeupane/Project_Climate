import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import emailChecker from "../routes/EmailRoute.js";

configDotenv();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// MongoDB connection (re-use cached connection in serverless)
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  await mongoose
    .connect(process.env.DATABSE_URL)
    .then(() => {
      isConnected = true;
      console.log("MongoDB connected");
    })
    .catch((err) => console.error("MongoDB connection error:", err));
};

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Climate Project API",
    timestamp: new Date().toISOString(),
  });
});

app.use("/", emailChecker);

// Error handling
app.use((err, req, res, next) => {
  console.error("Application error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Export for Vercel
export const handler = serverless(app);

// Only listen locally
// if (process.env.NODE_ENV !== "production") {
//   app.listen(process.env.PORT || 3000, () => {
//     console.log(`Server running on port ${process.env.PORT || 3000}`);
//   });
// }
