import mongoose from "mongoose";

let isConnected = false;

const connectDatabase = async () => {
  // If already connected, reuse the connection
  if (isConnected && mongoose.connection.readyState === 1) {
    console.log("Reusing existing MongoDB connection");
    return mongoose.connection;
  }

  try {
    console.log("Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 45000,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      minPoolSize: 1, // Maintain at least 1 socket connection
      maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
      bufferMaxEntries: 0, // Disable mongoose buffering
    });

    isConnected = true;
    console.log("MongoDB connected successfully");

    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    isConnected = false;
    throw error;
  }
};

export default connectDatabase;
