"use client";
import { CiHeart } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
export const FoodCard = () => {
  return (
    <>
      <div className="flex justify-between w-[45%] h-[12%] shadow-lg ">
        <div className="h-full">
          <img
            src="vegetables.jpg"
            alt=""
            className="rounded-lg w-[100%] h-full"
          />
        </div>
        <div>
          <div className="text-[21px] font-light">Grilled Top Blade Steaks</div>
          <div className=" text-gray-400">You have all 1 ingredients</div>
        </div>
        <div className="flex justify-center">
          <div>
            <CiHeart className="w-[30px] h-[30px]" />
          </div>
          <div>
            <FaExternalLinkAlt className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};
