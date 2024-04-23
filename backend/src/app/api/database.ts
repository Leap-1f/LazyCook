import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_CONNECTION_STRING = process.env.DATABASE_URL!;

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
