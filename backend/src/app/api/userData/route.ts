import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../database";
import { UserModel } from "../models/user.model";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectToDatabase();
    const userId = "77cNLpn09VM5IoolbvrMm1EKJHAJsNlj";
    const user = await UserModel.findOne({ client_id: userId });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    console.log("Fetched user:", user);
    return NextResponse.json({ userData: user }, { status: 200 });
  } catch (error) {
    console.error("Error handling GET request:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
