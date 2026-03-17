import mongoose from "mongoose";

const connectDB = async () => {
  console.log("ENV =", process.env.MONGO_URI);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Additional options for Atlas connection
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    console.log("Continuing with mock database responses for development...");
    // Don't exit the process, allow the server to start with mock responses
  }
};

export default connectDB;