import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { HiOutlinePower } from "react-icons/hi2";

const items = [
  {
    name: "Dashboard",
    path: "/",
    icon: <TiHomeOutline />,
  },
  {
    name: "favoriteMenu",
    path: "/favoriteMenu",
    icon: <TiHomeOutline />,
  },
  {
    name: "message",
    path: "/message",
    icon: <TiHomeOutline />,
  },
  {
    name: "settings",
    path: "/",
    icon: <TiHomeOutline />,
  },
  {
    name: "help",
    path: "/",
    icon: <TiHomeOutline />,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col p-4 space-y-4">
          {items.map((el) => {
            return (
              <>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
                  <div>{el.icon}</div>
                  <p>{el.name}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex p-4 bg-black rounded-lg text-white w-full items-center space-x-2">
          <HiOutlinePower className="flex items-center size-40px" />
          <p className="flex items-center">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
