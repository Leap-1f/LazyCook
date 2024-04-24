import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_URI =
  "mongodb+srv://zedv:zed@foodapp.pk3ugl6.mongodb.net/db-name";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
