import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../database";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const getByEmail = async (email: string) => {
  try {
    await mongoose.connect("mongodb://user:pass@mymongoserver.com/db-name");

    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }

    return {
      user_id: user._id.toString(),
      nickname: user.nickname,
      email: user.email,
    };
  } catch (err) {
    throw err;
  } finally {
    mongoose.connection.close();
  }
};
