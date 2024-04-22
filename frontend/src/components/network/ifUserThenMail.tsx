import { getSession } from "@auth0/nextjs-auth0";
export async function ifUserThenMail() {
  const session = await getSession();
  const user = session?.user;
  if (user) {
    return user.email;
  } else {
    return undefined;
  }
}
