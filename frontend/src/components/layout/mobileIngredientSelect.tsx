"use client";
import { Box, Drawer, Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IngredientsCard } from "@/src/components/filterCard/IngredientsCard";
import { PiListBold } from "react-icons/pi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
export function MobileIngredientSelect() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebarcollapse() {
    setIsCollapsed((prev) => !prev);
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className=" flex-col w-[100%] h-full">
        <div className="flex flex-col gap-[20%] h-[15%] bg-slate-800 p-[3%]">
          <div className="flex justify-between text-white flex-col">
            <div className="flex justify-center items-center">
              <PiListBold className="w-[30px] h-[30px] " />
            </div>
            <div className=" text-center">
              <div className=" text-[25px]">Aguulah</div>
              <div className=" font-thin">Tand {5} hoolnii orts bn</div>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex justify-center items-center">A-Z</div>
              <div className="flex justify-center items-center">
                <PiDotsThreeOutlineVerticalFill />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="flex-col items-center h-[85%] rounded-lg overflow-auto flex">
          <IngredientsCard
            title={"Nogoo"}
            ingNumber={0}
            img={"vegetables.svg"}
          />
          <IngredientsCard
            title={"Mahan buteegdehuun"}
            ingNumber={0}
            img={"meat.svg"}
          />
          <IngredientsCard
            title={"Taria"}
            ingNumber={0}
            img={"vegetables.svg"}
          />
          <IngredientsCard title={"Pantry Essentials"} ingNumber={0} img="" />
          <IngredientsCard title={"Pantry Essentials"} ingNumber={0} img="" />
          <IngredientsCard title={"Pantry Essentials"} ingNumber={0} img="" />
        </div>
      </div>
    </Box>
  );

  return (
    <div className="flex sm:hidden">
      <Button onClick={toggleSidebarcollapse}>
        <IoIosMenu color="white" size={30} />
      </Button>
      <Drawer open={isCollapsed} onClose={toggleSidebarcollapse} anchor="left">
        {DrawerList}
      </Drawer>
    </div>
  );
}
