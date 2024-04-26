"use client";

import { useEffect, useState, useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Slide = {
  id: number;
  src: string;
  h1: string;
  p: string;
};

export const Carousel = () => {
  const slides: Slide[] = [
    {
      id: 1,
      src: "/cake.avif",
      h1: "HIGH QUALITY SPICES FOR YOUR DISH",
      p: " Only the highest quality varients are collected from the best  plantations in the wold",
    },
    {
      id: 2,
      src: "/cake.avif",
      h1: "HIGH QUALITY SPICES FOR YOUR DISH ",
      p: " Only the highest quality varients are collected from the best  plantations in the wold",
    },
    {
      id: 3,
      src: "/cake.avif",
      h1: "HIGH QUALITY SPICES FOR YOUR DISH",
      p: " Only the highest quality varients are collected from the best  plantations in the wold",
    },
  ];

  const [curr, setCurr] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 5000;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoSlide) {
      intervalRef.current = setInterval(() => {
        next();
      }, autoSlideInterval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoSlide]);

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{
            transform: `translateX(-${(curr * 100) / slides.length}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-[100vw] h-[100vh] bg-cover flex flex-col justify-center items-center"
              style={{
                backgroundPosition: "center",
                backgroundImage: `url(${slide.src})`,
              }}
            >
              <div className="container justify-center px-[] ">
                <h1
                  key={slide.id}
                  className="text-white font-black text-5xl pb-10 xl:w-[40%] lg:w-[40%] md:w-[70%] sm:w-[100%]"
                >
                  {slide.h1}
                </h1>
                <p
                  key={slide.id}
                  className="text-white text-2xl font-medium xl:w-[43%] lg:w-[40%] md:w-[70%] sm:w-[100%]"
                >
                  {slide.p}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-3xl flex  text-white absolute inset-0 justify-between p-[50px] items-end  ">
          <div className="h-10 w-10 bg-gray-800 rounded-[50%] flex items-center justify-center">
            <AiFillCaretLeft onClick={prev} />
          </div>
          <div className="h-10 w-10 bg-gray-800 rounded-[50%] flex items-center justify-center">
            <AiFillCaretRight onClick={next} />
          </div>
        </div>
        <div className="absolute bottom-10 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-10 h-2 rounded-full bg-white ${
                  curr === i ? "p-0" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
