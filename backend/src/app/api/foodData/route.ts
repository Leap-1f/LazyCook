import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../database";
export const GET = async (req: NextRequest, res: NextResponse) => {
  return NextResponse.json({ name: "Bayaraa" });
};
