const mongoose = require("mongoose");
const { MONGO_URL } = require("./configENV");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connection successfully.");
  } catch (error) {
    console.log("MongoDB connection failed.", error);
    process.exit();
  }
};

module.exports = connectDB;
