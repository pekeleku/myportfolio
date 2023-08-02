import React from "react";

export default function Advantage() {
  return (
    <section id="advantage" className="container mt-[100px] font-poppins">
      <p className="text-black font-bold text-xl">My Super Power</p>
      <div className="flex justify-center items-center mt-[55px] flex-col md:flex-row">
        <div className="w-[165px] h-[159px] p-[40px] bg-secondary  hover:bg-slate-400 hover:duration-500  rounded-[35px] mr-0 md:mr-7">
          <div className="flex  justify-center ">
            <img src="./img/advantage/figma.png" alt="img" className="  " />
          </div>
          <p className="flex justify-center font-medium mt-[10px]">Figma</p>
        </div>
        <div className="w-[165px] h-[159px] p-[40px] bg-secondary  hover:bg-slate-400 hover:duration-500   rounded-[35px] mt-5 lg:mt-0  mr-0 md:mr-7">
          <div className="flex  justify-center items-center -mt-4 ">
            <img
              src="./img/advantage/react.png"
              alt="img"
              className=" bg-transparent "
            />
          </div>
          <p className="flex justify-center font-medium mt-[10px]">ReactJS</p>
        </div>
        <div className="w-[165px] h-[159px] p-[40px] bg-secondary  hover:bg-slate-400 hover:duration-500  rounded-[35px] mt-5 lg:mt-0 mr-0 md:mr-7">
          <div className="flex  justify-center  -mt-4  ">
            <img
              src="./img/advantage/tailwind.png"
              alt="img"
              className="bg-transparent  "
            />
          </div>
          <p className="flex justify-center font-medium mt-[10px]">
            TaildwindCSS
          </p>
        </div>
        <div className="w-[165px] h-[159px] p-[40px] bg-secondary  hover:bg-pink-200 hover:duration-500  rounded-[35px] mt-5 lg:mt-0 mr-0 md:mr-7">
          <div className="flex  justify-center -mt-2 ">
            <img src="./img/advantage/sass.png" alt="img" className="  " />
          </div>
          <p className="flex justify-center font-medium ">Sass</p>
        </div>
        <div className="w-[165px] h-[159px] p-[40px] bg-secondary hover:bg-purple-400 hover:duration-500 rounded-[35px] mt-5 lg:mt-0 mr-0 md:mr-7">
          <div className="flex  justify-center  ">
            <img
              src="./img/advantage/bootstrap.png"
              alt="img"
              className=" mb-1 "
            />
          </div>
          <p className="flex justify-center font-medium ">Bootsrapp</p>
        </div>
      </div>
    </section>
  );
}
