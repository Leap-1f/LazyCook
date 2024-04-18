import { getSession } from "@auth0/nextjs-auth0";
export async function checkIfUser() {
  const session = await getSession();
  const user = session?.user;
  if (user) {
    return true;
  } else {
    return false;
  }
}
