"use client";
import Link from "next/link";

export const SiteMap = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(carrot.avif)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="flex justify-center"
      >
        <div className="container py-[100px]   ">
          <h1 className=" text-lime-700 text-5xl font-medium pb-[100px]">
            Sitemap
          </h1>
          <div className=" *:text-white flex justify-center  ">
            <div className=" py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
              <p>Home</p>
            </div>
            <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
              <p>SignIn</p>
            </div>
            <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
              <p>SignUp</p>
            </div>
            <Link href="lazycookSearch">
              <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
                <p>LazyCook</p>
              </div>
            </Link>
            <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
