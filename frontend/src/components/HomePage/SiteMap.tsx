export const SiteMap = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(carrot.avif)",
          height: "100vh",
          backgroundSize: "cover",
        }}
        className="p-[100px]"
      >
        <h1 className=" text-lime-700 text-5xl font-medium pb-[100px]">
          Sitemap
        </h1>
        <div className=" *:text-white flex items-center justify-center">
          <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
            <p>Home</p>
          </div>
          <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
            <p>SignIn</p>
          </div>
          <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
            <p>SignUp</p>
          </div>
          <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
            <p>SuperCook</p>
          </div>
          <div className="py-[10px] px-[20px] border-[1px] border-white rounded-[10px] inline-block">
            <p>Admin</p>
          </div>
        </div>
      </div>
    </>
  );
};
