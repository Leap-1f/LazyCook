import { connectToDatabase } from "./api/database";

export async function register() {
  await connectToDatabase();
}
