import React from "react";
import Fade from "react-reveal/Fade";
export default function Advantage() {
  return (
    <Fade top>
      <section className="container mt-[100px] font-poppins">
        <p className="text-black font-bold text-xl">My Advantage</p>
        <div className="flex justify-center items-center mt-[55px] flex-col md:flex-row">
          <div className="w-[165px] h-[159px] p-[40px] bg-secondary rounded-[35px] mr-0 md:mr-7">
            <div className="flex  justify-center ">
              <img src="./img/advantage/figma.png" alt="img" className="  " />
            </div>
            <p className="flex justify-center font-medium mt-[10px]">Figma</p>
          </div>
          <div className="w-[165px] h-[159px] p-[40px] bg-secondary rounded-[35px] mt-5 lg:mt-0  mr-0 md:mr-7">
            <div className="flex  justify-center ">
              <img src="./img/advantage/react.png" alt="img" className="  " />
            </div>
            <p className="flex justify-center font-medium mt-[10px]">ReactJS</p>
          </div>
          <div className="w-[165px] h-[159px] p-[40px] bg-secondary rounded-[35px] mt-5 lg:mt-0 mr-0 md:mr-7">
            <div className="flex  justify-center ">
              <img
                src="./img/advantage/tailwind.png"
                alt="img"
                className="  "
              />
            </div>
            <p className="flex justify-center font-medium mt-[10px]">
              TaildwindCSS
            </p>
          </div>
          <div className="w-[165px] h-[159px] p-[40px] bg-secondary rounded-[35px] mt-5 lg:mt-0 mr-0 md:mr-7">
            <div className="flex  justify-center  ">
              <img
                src="./img/advantage/sass.png"
                alt="img"
                className=" -mt-2 "
              />
            </div>
            <p className="flex justify-center font-medium ">Sass</p>
          </div>
          <div className="w-[165px] h-[159px] p-[40px] bg-secondary rounded-[35px] mt-5 lg:mt-0 mr-0 ">
            <div className="flex  justify-center ">
              <img src="./img/advantage/express.png" alt="img" className="  " />
            </div>
            <p className="flex justify-center font-medium mt-[10px]">
              ExpressJS
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
}
