"use client";

import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Slide = {
  id: number;
  img: string;
  name: string;
  description: string;
};

export const Reviews = () => {
  const slides: Slide[] = [
    {
      id: 1,
      img: "/bayra.jpeg",
      name: "Bayr-Erdene",
      description: "Full stack developer",
    },
    {
      id: 2,
      img: "/tuvshin.jpeg",
      name: "Tuwshin",
      description: "Full stack developer",
    },
    {
      id: 3,
      img: "/dashka.jpeg",
      name: "Dashnymtseren",
      description: "Full stack developer",
    },
    {
      id: 4,
      img: "/bi.jpeg",
      name: "Dorjsambuu",
      description: "Full stack developer",
    },
    {
      id: 5,
      img: "/khishge.jpeg",
      name: "Khishigtogtoh",
      description: "Full stack developer",
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

  // useEffect(() => {
  //   if (autoSlide) {
  //     intervalRef.current = setInterval(() => {
  //       next();
  //     }, autoSlideInterval);
  //   }
  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [autoSlide]);

  return (
    <>
      <div className=" bg-orange-50 flex  justify-center py-[100px] ">
        <div className="container">
          <div className="*:flex *:justify-center">
            <h1 className=" text-3xl">Your reviews</h1>
            <p className=" text-lg pb-10">
              Satisfied customers are the main principle of our company!
            </p>
          </div>
          <div className="relative overflow-hidden ">
            <div
              className="flex justify-between  transition-transform ease-out duration-1000"
              style={{
                transform: `translateX(-${(curr * 100) / slides.length}%)`,
                width: `${slides.length * 20}%`,
              }}
            >
              {slides.map((slide) => (
                <div>
                  <img
                    key={slide.id}
                    className="w-[200px] h-[300px] rounded-[50%] "
                    src={slide.img}
                    alt=""
                  />
                  <h1
                    key={slide.id}
                    className="flex justify-center text-2xl pt-3"
                  >
                    {slide.name}
                  </h1>
                  <p key={slide.id} className="flex justify-center ">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
            <div className="text-3xl text-stone-500 ">
              <FaChevronLeft onClick={prev} />
            </div>
            <div className=" px-10">
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`transition-all w-4 h-4 rounded-full bg-black ${
                      curr === i ? "p-0" : "bg-opacity-50"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="text-3xl text-stone-500">
              <FaChevronRight onClick={next} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export const Reviews = () => {
//   const reviews = [
//     {
//       img: "/bayra.jpeg",
//       name: "Bayr-Erdene",
//       description: "Full stack developer",
//     },
//     {
//       img: "/tuvshin.jpeg",
//       name: "Tuwshin",
//       description: "Full stack developer",
//     },
//     {
//       img: "/dashka.jpeg",
//       name: "Dashnymtseren",
//       description: "Full stack developer",
//     },
//     {
//       img: "/bi.jpeg",
//       name: "Dorjsambuu",
//       description: "Full stack developer",
//     },
//     {
//       img: "/khishge.jpeg",
//       name: "Khishigtogtoh",
//       description: "Full stack developer",
//     },
//   ];
//   return (
//     <>
//       <div className=" bg-orange-50 flex  justify-center py-[100px] ">
//         <div className="container">
//           <div className="*:flex *:justify-center">
//             <h1 className=" text-3xl">Your reviews</h1>
//             <p className=" text-lg pb-10">
//               Satisfied customers are the main principle of our company!
//             </p>
//           </div>
//           <div className="flex justify-between">
//             {reviews.map((el) => {
//               return (
//                 <>
//                   <div>
//                     <img
//                       className="w-[200px] h-[300px] rounded-[50%]"
//                       src={el.img}
//                       alt=""
//                     />
//                     <h1 className="flex justify-center text-2xl pt-3">
//                       {el.name}
//                     </h1>
//                     <p className="flex justify-center ">{el.description}</p>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
