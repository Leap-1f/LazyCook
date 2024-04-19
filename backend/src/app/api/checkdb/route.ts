import { dbConnect } from "../../lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  const conn = await dbConnect();
  return new NextResponse("Connected");
}
