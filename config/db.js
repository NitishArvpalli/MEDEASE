const mongoose = require("mongoose");
const colors = require("colors"); // Ensure you have 'colors' installed (npm install colors)

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Ensure MONGO_URI is defined
    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is not defined in environment variables!");
    }

    // Debugging: Print the MONGO_URI (remove this after testing)
    console.log(
      "🔍 Attempting to connect with MONGO_URI:",
      process.env.MONGO_URI
    );

    // Connect to MongoDB with recommended options
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.error(`🚨 MongoDB Server Issue: ${error.message}`.bgRed.white);
    process.exit(1); // 🔴 Exit process if DB connection fails
  }
};

module.exports = connectDB;
