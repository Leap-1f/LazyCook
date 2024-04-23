import { resourceUsage } from "process";

export const Reviews = () => {
  const reviews = [
    {
      img: "/bayra.jpeg",
      name: "Bayr-Erdene",
      description: "Full stack developer",
    },
    {
      img: "/tuvshin.jpeg",
      name: "Tuwshin",
      description: "Full stack developer",
    },
    {
      img: "/dashka.jpeg",
      name: "Dashnymtseren",
      description: "Full stack developer",
    },
    {
      img: "/bi.jpeg",
      name: "Dorjsambuu",
      description: "Full stack developer",
    },
    {
      img: "/khishge.jpeg",
      name: "Khishigtogtoh",
      description: "Full stack developer",
    },
  ];
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
          <div className="flex justify-between">
            {reviews.map((el) => {
              return (
                <>
                  <div>
                    <img
                      className="w-[200px] h-[300px] rounded-[50%]"
                      src={el.img}
                      alt=""
                    />
                    <h1 className="flex justify-center text-2xl pt-3">
                      {el.name}
                    </h1>
                    <p className="flex justify-center ">{el.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
