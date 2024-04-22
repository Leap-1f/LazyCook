"use client";
export const Carousel = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(cake.avif)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center pl-[30%]"
      >
        <h1 className="text-white font-black text-5xl pb-10">
          HIGH QUALITY SPICES <br /> FOR YOUR DISH
        </h1>
        <p className="text-white text-2xl font-medium">
          Only the highest quality varients are collected from <br /> the best
          plantations in the wold
        </p>
      </div>
    </>
  );
};
