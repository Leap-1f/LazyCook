export const AboutUs = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(4k.avif)",
          height: "100vh",
          backgroundSize: "cover",
        }}
        className="p-[100px] flex flex-col justify-between"
      >
        <div className="flex justify-between">
          <h1 className=" text-lime-700 text-5xl font-medium">About</h1>
          <div className="w-[40%] border-[1px] p-[40px] border-white rounded-[10px]  *:text-white ">
            <h1 className="pb-[20px] text-[26px] font-semibold">PROJECT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              obcaecati illum, culpa quae quis quod molestiae in voluptates
              quasi nisi! Voluptate exercitationem nam quibusdam ea facilis
              architecto non eos vitae.
            </p>
          </div>
        </div>
        <div className="w-[40%] border-[1px] p-[40px] border-white rounded-[10px]  *:text-white ">
          <h1 className="pb-[20px] text-[26px] font-semibold">GOAL</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            obcaecati illum, culpa quae quis quod molestiae in voluptates quasi
            nisi! Voluptate exercitationem nam quibusdam ea facilis architecto
            non eos vitae.
          </p>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div className="w-[40%] border-[1px] p-[40px] border-white rounded-[10px]  *:text-white ">
            <h1 className="pb-[20px] text-[26px] font-semibold">SOLUTION</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              obcaecati illum, culpa quae quis quod molestiae in voluptates
              quasi nisi! Voluptate exercitationem nam quibusdam ea facilis
              architecto non eos vitae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
