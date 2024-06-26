import { checkIfUser } from "../../components/network/checkIfUser";
import { Sidebar, SidebarLoggedIn } from "./sidebar";
export default async function Header() {
  const loggedIn = await checkIfUser();
  return (
    <div className="flex justify-center h-16 bg-black w-full sticky">
      <div className="flex items-center container justify-between">
        <h1 className="text-3xl font-bold text-white">LazyCook</h1>
        {/* this is the link list */}
        <div className=" items-center justify-center gap-5 hidden md:flex">
          <a href="/" className="text-white font-semibold">
            Home
          </a>
          {loggedIn ? (
            <a href="/api/auth/logout" className="text-white font-semibold">
              Logout
            </a>
          ) : (
            <a href="/api/auth/login" className="text-white font-semibold">
              Login
            </a>
          )}
        </div>
        {/* this is the sidebar for login and logout for mobile*/}
        {loggedIn ? <Sidebar /> : <SidebarLoggedIn />}
      </div>
    </div>
  );
}
