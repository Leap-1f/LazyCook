"use client";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export const Footer = () => {
  return (
    <>
      <div className=" bg-stone-700 flex items-center flex-col p-[100px] ">
        <img src="" alt="" />
        <div className="flex pb-3 text-stone-400 items-center gap-2">
          <FaLocationDot />
          <p className="text-xl ">st.Bayraa</p>
        </div>
        <div className=" border-[1px] border-stone-400 w-[30%]"></div>
        <div className="flex *:text-3xl text-lime-700 gap-3 py-5">
          <FaPhone />
          <AiFillInstagram />
          <IoLogoYoutube />
        </div>
        <div>
          <p className=" text-stone-900 text-xl">
            Picuture were tekan from freepik.com and unsplash.com for
            educational purposes.
          </p>
          <p className="flex justify-center text-stone-900 text-xl">
            @ 2023 created by Zhanna Vasylieva. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
