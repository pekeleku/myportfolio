/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ButtonEmail from "../components/reusable/ButtonEmail";
import Sosmed from "./Sosmed";
export default function Hero() {
  return (
    <section className="container lg:mt-[100px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="order-last md:order-first">
          <p className="text-black font-bold lg:text-[80px]  text-3xl leading-none lg:leading-[80px] mb-[8px]">
            Hai i'm Walter B.G Aluman
          </p>
          <p className="text-secondary text-[25px] font-light md:font-normal mb-[50px]">
            Frontend Developer
          </p>
          <ButtonEmail
            subject={"Hire Me"}
            mailto={"mailto:alumanwalter@gmail.com"}
          />

          <Sosmed />
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
                  Dev Front
                </p>
              </div>
            </div>
            <div className="absolute -left-[50px] top-8">
              <div className="flex items-center w-full justify-center h-[28px] bg-primary p-3 md:p-5 rounded-md md:hidden lg:flex">
                <p className="text-xs md:text-base font-medium text-black">
                  WFH/WFO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
