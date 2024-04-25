import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_URI = process.env.DATABASE_URL!;

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
