"use client";
import React, { useState } from "react";
import dishes from "../mock/mockDishesData";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AdminAddDish from "./AdminAddDish";

export default function AdminFoodList() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1>Dishes List</h1>
        <div
          className="border-solid border-[2px] rounded-lg flex flex-col gap-5"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div
            className="flex justify-between items-center"
            style={{
              backgroundColor: "#333333",
              color: "#ffffff",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ margin: 0 }}>Dishes List</h1>
            <button
              className="bg-teal-500 rounded-lg text-white px-4 py-2 hover:bg-teal-600"
              onClick={toggleModal}
            >
              + Add dishes
            </button>
          </div>
          <div>
            <div className="bg-gray-600 flex justify-between">
              <div className="text-gray-50 w-1/4">Dish Name</div>
              <div className="text-gray-50 w-1/4">Category</div>
              <div className="text-gray-50 w-1/4">Price $</div>
              <div className="text-gray-50 w-1/4">Calories</div>
              <div className="text-gray-50 w-1/4">Action</div>
            </div>
            {dishes.map((el, index) => (
              <div
                key={index}
                className="flex justify-between h-[50px] border-[1px] items-center"
              >
                <div className="text-gray-700 w-1/4">{el.name}</div>
                <div className="text-gray-700 w-1/4">{el.category}</div>
                <div className="text-gray-700 w-1/4">{el.price}</div>
                <div className="text-gray-700 w-1/4">{el.calories}</div>
                <div className="text-gray-700 w-1/4 ">
                  <ModeIcon className="hover:text-blue-500 cursor-pointer" />
                  <VisibilityIcon className="hover:text-blue-500 cursor-pointer" />
                  <DeleteIcon className="hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <>
          <div
            id="backOpacity"
            className="absolute w-full h-full bg-black opacity-50 left-0 top-0"
            onClick={toggleModal}
          ></div>
          <AdminAddDish />
        </>
      )}
    </>
  );
}
