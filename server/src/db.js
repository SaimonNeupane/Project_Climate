import mongoose from "mongoose";

let isConnected = false;

const connectDatabase = async () => {
  // Check if already connected
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  // Check if connection is in progress
  if (mongoose.connection.readyState === 2) {
    // Wait for the connection to complete
    return new Promise((resolve, reject) => {
      mongoose.connection.once("connected", resolve);
      mongoose.connection.once("error", reject);
    });
  }

  try {
    console.log("Initiating MongoDB connection...", process.env.DATABSE_URL);

    // Set connection options optimized for serverless
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 8000, // Reduced timeout
      socketTimeoutMS: 45000,
      maxPoolSize: 5, // Smaller pool for serverless
      minPoolSize: 1,
      maxIdleTimeMS: 30000,
      bufferMaxEntries: 0,
      bufferCommands: false, // Disable mongoose buffering
    };

    await mongoose.connect(process.env.DATABSE_URL, options);

    isConnected = true;
    console.log("MongoDB connected successfully");

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      isConnected = false;
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
      isConnected = false;
    });

    // Sync indexes (but don't await it to avoid blocking)
    if (process.env.NODE_ENV !== "production") {
      mongoose.connection.db
        .admin()
        .command({ ismaster: 1 })
        .then(() => {
          console.log("User indexes synced");
        })
        .catch(console.error);
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    isConnected = false;
    throw error;
  }
};

export default connectDatabase;
