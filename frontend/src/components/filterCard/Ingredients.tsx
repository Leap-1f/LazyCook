import { MdKeyboardArrowDown } from "react-icons/md";

export const Ingredients = () => {
  return (
    <div className="h-[30%] w-[90%] border-[1px] shadow-lg rounded-md mt-[3%]">
      <div className="flex justify-between w-full h-[30%]">
        <img src="vegetables.jpg" alt="" className=" rounded-lg" />
        <div>
          <div className=" font-light text-[19px]">Pantry Essentials</div>
          <div className=" text-gray-400 text-[23px]">0/40 Ingredients</div>
        </div>
        <div>
          <MdKeyboardArrowDown className="w-[30px] h-[30px]" />
        </div>
      </div>
      <hr />
      <div className="w-full h-[70%]"></div>
    </div>
  );
};
