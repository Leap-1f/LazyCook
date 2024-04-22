"use client";
import { Box, Drawer, Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
export function MobileIngredientSelect(
  img: string,
  name: string,
  haveAll: boolean,
  missing: number,
  ingredients: string[],
  nutrition: string[]
) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebarcollapse() {
    setIsCollapsed((prev) => !prev);
  }
  const newObj: any = ingredients;
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="flex flex-col overflow-scroll gap-12">
        <img src={img} alt="" className="w-[100%] h-[100%] object-cover" />
        <div className="flex flex-row space-around mx-6">
          <button
            onClick={toggleSidebarcollapse}
            className="flex justify-center items-center rounded-full bg-white p-[3px] hover:bg-gray-200"
          >
            <IoClose className="w-[30px] h-[30px]" />
          </button>
          {/* TODO: add drop down to report a problem */}
          <button className="flex justify-center items-center rounded-full bg-white p-[3px] hover:bg-gray-200">
            <BsThreeDots className="w-[30px] h-[30px]" />
          </button>
        </div>
        <div className="w-[80%] flex flex-col h-[10%]">
          <div className="flex justify-between items-center flex-row">
            <h1>{name}</h1>
            <button>
              <CiHeart />
            </button>
          </div>
          <h1>
            {haveAll
              ? "You have all the ingredients"
              : `Missing ${missing} ingredients`}
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          {newObj.map((ingredient: any, index: number) => (
            <div className="flex flex-row justify-between" key={index}>
              <h1>{ingredient.name}</h1>
              <div
                style={ingredient.have ? { color: "green" } : { color: "red" }}
              >
                {ingredient.have ? <FaCheck /> : <IoClose />}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h1>Nutrition</h1>
          <div className="flex flex-col gap-6">
            {nutrition.map((nutrient: any, index: number) => (
              <div className="flex flex-row justify-between" key={index}>
                <h1>{nutrient.name}</h1>
                <h1>{nutrient.value}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="flex sm:hidden">
      <Button onClick={toggleSidebarcollapse}>
        <IoIosMenu color="white" size={30} />
      </Button>
      <Drawer
        open={isCollapsed}
        onClose={toggleSidebarcollapse}
        anchor="left"
        variant="persistent"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
