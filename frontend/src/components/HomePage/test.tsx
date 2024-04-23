"use client";

import { useEffect, useState, useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Slide = {
  id: number;
  src: string;
};

export const Reee = () => {
  const slides: Slide[] = [
    { id: 1, src: "/4k.avif" },
    { id: 2, src: "/4k.avif" },
    { id: 3, src: "/4k.avif" },
    { id: 4, src: "/4k.avif" },
    { id: 5, src: "/4k.avif" },
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
              className="w-[100vw] h-[100vh] bg-cover"
              style={{
                backgroundImage: `url(${slide.src})`,
              }}
            ></div>
          ))}
        </div>
        <div className="text-3xl flex">
          <AiFillCaretLeft onClick={prev} />
          <AiFillCaretRight onClick={next} />
        </div>
        <div className="absolute bottom-10 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 rounded-full bg-white ${
                  curr === i ? "p-4" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
