import { CiHeart } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
const FoodCard = (dude: any) => {
  return (
    <>
      <div className="h-full">
        <img
          src={dude.dude.imgUrl}
          alt=""
          className="w-[100%] h-full object-cover"
        />
      </div>
      <div>
        <div className="text-[16px] md:text-[21px] font-light" id="title">
          {dude.dude.name}
        </div>
        <div
          className="text-gray-400 text-[12px] md:text-[16px]"
          id="ingredient"
        >
          {dude.dude.haveAll
            ? "You have all the ingredients"
            : `Missing ${dude.ingredients} ingredients`}
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
    </>
  );
};

export default FoodCard;
