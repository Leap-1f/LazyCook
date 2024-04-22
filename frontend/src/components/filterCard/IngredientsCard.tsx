import { MdKeyboardArrowDown } from "react-icons/md";
import { Ingredient } from "./Ingredient";
export const IngredientsCard = ({
  title,
  ingNumber,
  img,
}: {
  title: string;
  ingNumber: number;
  img: string;
}) => {
  return (
    <div className="h-fit w-[90%] border-[3px] shadow-lg rounded-lg mt-[3%]">
      <div className="flex justify-between w-full h-[30%]">
        <img src={img} alt="" className=" rounded-lg ml-[10%]" />
        <div className="flex flex-col justify-center items-center">
          <div className=" font-light text-[19px]">{title}</div>
          <div className=" text-gray-400 text-[23px]">
            {ingNumber}/40 Ingredients
          </div>
        </div>
        <div>
          <MdKeyboardArrowDown className="w-[30px] h-[30px]" />
        </div>
      </div>
      <hr />
      <div className="flex w-full h-fit p-[20px] flex-wrap gap-[2%]">
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
        <Ingredient title={"butter"} />
      </div>
    </div>
  );
};
