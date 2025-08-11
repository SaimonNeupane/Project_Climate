import mongoose from "mongoose";
import User from "../models/email.js";
import { configDotenv } from "dotenv";
configDotenv();
console.log(process.env.DATABSE_URL);
async function connectDatabase() {
  try {
    // Connect to MongoDB first
    await mongoose.connect(process.env.DATABSE_URL, {
      // Modern connection options
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });

    console.log("Connected to MongoDB");

    // Now sync indexes after connection is established
    await User.syncIndexes();
    console.log("User indexes synced");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
export default connectDatabase;
