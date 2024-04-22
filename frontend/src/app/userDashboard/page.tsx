import Sidebar from "@/src/components/Sidebar/page";
import { IoSearchSharp } from "react-icons/io5";

export default function UserDashboard() {
  return (
    <div className="flex w-full h-full bg-gray-200">
      <Sidebar />
      <div className="flex flex-col w-full h-full ml-64">
        <div className="flex justify-between items-center p-6">
          <h1 className="flex flex-start text-xl font-semibold">
            Food Management
          </h1>
          <div className="relative items-center">
            <IoSearchSharp className="absolute  text-gray-400 items-center" />
            <input
              type="text"
              placeholder="search ingredients"
              className="bg-gray-100 p-2 rounded-3xl h-[40px] text-sm"
            />
          </div>
          <button className="flex bg-yellow-300 p-2 rounded-3xl w-[180px] h-[40px] text-sm items-center">
            add ingredients
          </button>
        </div>
      </div>
    </div>
  );
}
