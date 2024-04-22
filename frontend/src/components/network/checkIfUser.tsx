import { getSession } from "@auth0/nextjs-auth0";

export async function checkIfUser() {
  try {
    const session = await getSession();
    const user = session?.user;
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error retrieving session:", error);
    return false;
  }
}
