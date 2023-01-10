import React from "react";

export default function Hero() {
  return (
    <section className="container lg:mt-[100px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="order-last md:order-first">
          <p className="text-black font-bold md:text-[40px] text-3xl mb-2">
            Hai i'm Walter B.G Aluman
          </p>
          <p className="text-secondary font-light md:font-normal mb-[15px]">
            i am web developer, for now I am more focused on the front-end but
            do not rule out the back-end work
          </p>
          <a
            href="https://www.linkedin.com/in/walter-aluman/"
            className="bg-btn p-3 rounded-2xl text-white mb-[15px] hover:shadow-lg font-semibold transform-none btn-hover"
          >
            Hire Me
          </a>
          <br />
          <div className="flex mt-5">
            <div className="w-auto bg-primary p-3 rounded-xl text-white mr-8 font-semibold hover:scale-75 btn-hover transform-none">
              ReactJs
            </div>
            <div className="bg-secondary p-3 rounded-xl text-black font-semibold btn-hover transform-none">
              ExpressJs
            </div>
          </div>
        </div>
        <div className="flex flex-2"></div>
        <div className="flex md:w-1/2 my-[15px] items-center">
          <div className="flex-5 w-[240px] h-[240px] md:w-full md:h-full">
            <img
              src="./img/walter.png"
              alt="walter"
              className="w-full h-full md:object-contain"
            />
          </div>
          <div className="flex-1 relative">
            <div className="absolute -left-[50px] z-10 bottom-8">
              <div className="flex items-center w-full justify-center h-[28px] bg-secondary p-3 md:p-5 rounded-md md:hidden lg:flex">
                <p className="text-xs lg:text-base font-medium text-black">
                  always learn new things
                </p>
              </div>
            </div>
            <div className="absolute -left-[50px] top-8">
              <div className="flex items-center w-full justify-center h-[28px] bg-primary p-3 md:p-5 rounded-md md:hidden lg:flex">
                <p className="text-xs md:text-base font-medium text-black">
                  Student College
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
