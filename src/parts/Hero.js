/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Fade from "react-reveal/Fade";
export default function Hero() {
  return (
    <Fade top>
      <section className="container lg:mt-[100px]" id="me">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="order-last md:order-first">
            <p className="text-black font-bold lg:text-[80px]  text-3xl leading-none lg:leading-[80px] mb-[8px]">
              Hai i'm Walter B.G Aluman
            </p>
            <p className="text-secondary text-[25px] font-light md:font-normal mb-[50px]">
              Frontend Developer
            </p>
            <div className=" flex w-[165px] h-[60px] bg-btn  rounded-2xl  justify-center items-center text-white  font-semibold my-6  lg:my-[50px]  ">
              Hire me
            </div>
            {/* awal sosmed  */}
            <div className="flex flex-row items-center">
              <div className=" flex  w-[53px] h-[53px] mr-[45px]">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/pekeleku"
                  target="_blank"
                >
                  <img
                    alt="img"
                    className=" w-full h-full  "
                    src="./img/link/github.png"
                  />
                </a>
              </div>
              <div className="mr-[45px] w-[53px] h-[53px]">
                <a
                  rel="noopener noreferrer"
                  href="https://glints.com/id/profile"
                  target="_blank"
                >
                  <img
                    alt="img"
                    className="w-full h-full"
                    src="./img/link/glints.png"
                  />
                </a>
              </div>
              <div className="mr-[45px] w-[53px] h-[53px]">
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/walter-aluman/"
                  target="_blank"
                >
                  <img
                    alt="img"
                    className="w-full h-full"
                    src="./img/link/linkin.png"
                  />
                </a>
              </div>
              <div className="mr-[45px] w-[53px] h-[53px]">
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/wollly__/?next=%2F"
                  target="_blank"
                >
                  <img
                    alt="img"
                    className="w-full h-full"
                    src="./img/link/ig.png"
                  />
                </a>
              </div>
            </div>
            {/* akhir sosmed  */}
          </div>

          <div className="flex md:w-1/2 my-[15px] items-center">
            <div className="flex-5 w-[556px] h-auto md:h-[446px]  ">
              <img
                src="./img/profile.jpg"
                alt="walter"
                className="w-full  h-auto lg:h-full rounded-2xl"
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute -left-[50px] z-10 bottom-8">
                <div className="flex items-center w-full justify-center h-[28px] bg-secondary p-3 md:p-5 rounded-md md:hidden lg:flex">
                  <p className="text-xs lg:text-base font-medium text-black">
                    Ready to work
                  </p>
                </div>
              </div>
              <div className="absolute -left-[50px] top-8">
                <div className="flex items-center w-full justify-center h-[28px] bg-primary p-3 md:p-5 rounded-md md:hidden lg:flex">
                  <p className="text-xs md:text-base font-medium text-black">
                    WRF/WFH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
