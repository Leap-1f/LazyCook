"use client";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { PiListBold } from "react-icons/pi";
import { IngredientsCard } from "@/src/components/filterCard/IngredientsCard";
import { FaRegUser } from "react-icons/fa";
import FoodCard from "@/src/components/filterCard/foodCard";
import { MobileIngredientSelect } from "@/src/components/layout/mobileIngredientSelect";
import DetailedViewSidebar from "@/src/components/layout/detailedViewSidebar";
import { useState } from "react";
export default function LazyCookSearch() {
  const [current, setCurrent] = useState({
    imgUrl: "./rice.jpg",
    name: "rice",
    ingredients: [
      { name: "rice", have: true },
      { name: "water", have: true },
    ],
    nutrition: [
      { name: "carbs", value: "10mg" },
      { name: "protein", value: "10mg" },
    ],
    haveAll: true,
    missing: 0,
  });
  const allInOne = [
    {
      imgUrl: "./rice.jpg",
      name: "rice",
      ingredients: [
        { name: "rice", have: true },
        { name: "water", have: true },
      ],
      nutrition: [
        { name: "carbs", value: "10mg" },
        { name: "protein", value: "10mg" },
      ],
      haveAll: true,
      missing: 0,
    },
    {
      imgUrl: "./rice.jpg",
      name: "chicken",
      ingredients: [
        { name: "chicken", have: true },
        { name: "water", have: true },
        { name: "salt", have: true },
        { name: "pepper", have: true },
        { name: "onion", have: true },
        { name: "garlic", have: true },
      ],
      nutrition: [
        { name: "carbs", value: "10mg" },
        { name: "protein", value: "10mg" },
      ],
      haveAll: true,
      missing: 0,
    },
  ];
  function handleChange(thing: any) {
    console.log(thing);
  }
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebarcollapse() {
    setIsCollapsed((prev) => !prev);
  }

  return (
    <>
      <div className="flex h-screen">
        <div className=" flex-col w-[30%] h-full sm:flex hidden">
          <div className="flex flex-col gap-[20%] h-[15%] bg-slate-800 p-[3%]">
            <div className="flex justify-between text-white">
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
            <div>
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
        <div className="w-[1%] bg-slate-600"></div>
        <div
          className="sm:w-[69%] w-full h-full "
          onClick={() => {
            if (isCollapsed === true) {
              toggleSidebarcollapse();
            }
          }}
        >
          <div className="flex flex-col gap-[10%] md:gap-[20%] h-[15%] bg-slate-800 p-[1%]">
            <div className="flex justify-between text-white">
              <div className="flex justify-center items-center ">
                <MobileIngredientSelect />
              </div>
              <div className=" text-center">
                <div className=" text-[25px]">Aguulah</div>
                <div className=" font-thin">Tand {5} hoolnii orts bn</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="flex justify-center items-center">
                  <FaRegUser className="w-[30px] h-[30px] cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
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
          <div
            className="flex justify-center flex-wrap w-full h-[85%] gap-[3%] overflow-auto py-[3%]"
            id="container"
          >
            {allInOne.map((item, index) => (
              <div
                className="flex justify-between w-[65%] sm:w-[45%] h-[12%] shadow-lg flex-col lg:flex-row mb-20 lg:mb-0"
                id={item.name}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isCollapsed === false) {
                    toggleSidebarcollapse();
                  }
                  setCurrent(item);
                }}
              >
                <FoodCard key={index} dude={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {DetailedViewSidebar(current, isCollapsed, toggleSidebarcollapse)}
    </>
  );
}
