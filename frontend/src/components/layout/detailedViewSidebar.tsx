"use client";
import { Box, Drawer, Button } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
const DetailedViewSidebar = (
  dude: any,
  isCollapsed: boolean,
  toggleSidebarcollapse: any
) => {
  // to use this sidebar, you need to mark the parent as "use client"
  // mock data here V
  // const allInOne = {
  //   imgUrl: "./rice.jpg",
  //   name: "rice",
  //   ingredients: [
  //     { name: "rice", have: true },
  //     { name: "water", have: true },
  //   ],
  //   nutrition: [
  //     { name: "carbs", value: "10mg" },
  //     { name: "protein", value: "10mg" },
  //   ],
  //   haveAll: true,
  //   missing: 0,
  // };
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // function toggleSidebarcollapse() {
  //   setIsCollapsed((prev) => !prev);
  // }
  // add the object to the function
  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <div className="flex flex-col overflow-scroll gap-12 h-[100vh] bg-black text-white">
        <img
          src={dude.imgUrl}
          alt=""
          className="w-[100%] h-[20vh] object-cover"
        />
        <div className="flex flex-row justify-between mx-5 absolute top-3 w-[90%]">
          <button
            onClick={toggleSidebarcollapse}
            className="flex justify-center items-center rounded-full bg-black p-[3px] hover:bg-gray-200"
          >
            <IoClose className="w-[30px] h-[30px]" color="white" />
          </button>
          {/* TODO: add drop down to report a problem */}
          <button className="flex justify-center items-center rounded-full bg-black p-[3px] hover:bg-gray-200">
            <BsThreeDots className="w-[30px] h-[30px]" color="white" />
          </button>
        </div>
        <div className="w-[80%] flex flex-col h-[10%] justify-center itesm-center shadow-md rounded-md p-3 border-2 border-gray-200 mx-5 relative bottom-24 bg-black text-white">
          <div className="flex justify-between items-center flex-row">
            <h1 className="text-2xl">{dude.name}</h1>
            <button>
              <CiHeart height={30} width={30} />
            </button>
          </div>
          <h1>
            {dude.haveAll
              ? "You have all the ingredients"
              : `Missing ${dude.missing} ingredients`}
          </h1>
        </div>
        <div className="flex flex-col gap-6 mx-5 rounded-lg">
          <h1 className="text-xl">Ingredients</h1>
          {dude.ingredients.map((ingredient: any, index: number) => (
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
        <div className="flex flex-col gap-3 mx-5 ">
          <h1 className="text-xl">Nutrition per 100g.</h1>
          <div className="flex flex-col gap-6">
            {dude.nutrition.map((nutrient: any, index: number) => (
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
    <div className="flex">
      <Drawer
        open={isCollapsed}
        onClose={toggleSidebarcollapse}
        anchor="right"
        variant="persistent"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};
export default DetailedViewSidebar;
