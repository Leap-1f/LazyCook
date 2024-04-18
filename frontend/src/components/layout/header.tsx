"use client";
import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="flex items-center justify-around h-16 bg-black w-full sticky">
      <h1 className="text-3xl font-bold text-white">LazyCook</h1>
      {/* this is the link list */}
      <div className=" items-center justify-center gap-5 hidden md:flex">
        <a href="http://localhost:3000" className="text-white font-semibold">
          Home
        </a>
        {loggedIn === true && (
          <a href="/api/auth/login" className="text-white font-semibold">
            Login
          </a>
        )}
        {loggedIn === false && (
          <a href="/api/auth/logout" className="text-white font-semibold">
            Logout
          </a>
        )}
      </div>
      {/* this is the sidebar for login and logout for mobile*/}
      <Button className="flex md:hidden">
        <IoIosMenu color="white" size={30} />
      </Button>
    </div>
  );
}
