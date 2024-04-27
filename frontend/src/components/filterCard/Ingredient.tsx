"use client";
import { useState } from "react";

export const Ingredient = ({ title }: { title: string }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`flex justify-center items-center h-fit w-fit p-[2%] cursor-pointer mt-[10px] rounded-lg  ${
        clicked
          ? "bg-green-400 text-white"
          : "bg-gray-100 text-slate-500 font-light"
      }`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
