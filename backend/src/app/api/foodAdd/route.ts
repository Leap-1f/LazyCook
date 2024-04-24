import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../database";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectToDatabase();
    const { name } = await req.json();
    return NextResponse.json({
      message: `${name}`,
    });
  } catch (error) {
    console.error("Error POST request:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
