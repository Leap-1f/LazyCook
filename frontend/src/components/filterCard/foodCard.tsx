import { CiHeart } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
export const FoodCard = () => {
  return (
    <>
      <div className="flex justify-between w-[65%] sm:w-[45%] h-[12%] shadow-lg flex-col lg:flex-row mb-20 lg:mb-0 ">
        <div className="h-full">
          <img src="rice.jpg" alt="" className="w-[100%] h-full object-cover" />
        </div>
        <div>
          <div className="text-[16px] md:text-[21px] font-light">
            Grilled Top Blade Steaks
          </div>
          <div className=" text-gray-400 text-[12px] md:text-[16px]">
            You have all 1 ingredients
          </div>
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
