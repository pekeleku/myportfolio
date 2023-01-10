import React from "react";

export default function Projects() {
  return (
    <section className="container mt-[100px]">
      <p className="text-black font-bold text-xl">My Projects</p>
      <div className="flex flex-col md:flex-row">
        <div className="w-full h-full my-8 hover:card">
          <img
            src="./img/projects/p1.JPG"
            alt="p1"
            className="rounded-xl hover:object-center"
          />

          <p className="font-medium mt-2 p-2">Luxspace</p>
          <div className="relative ">
            <p className="text-secondary font-medium text-sm flex p-2">
              front end use reactJs
            </p>
            <p className="text-secondary font-medium text-sm absolute right-0 top-6 p-2">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm flex mt-2 font-medium p-2">
              ccs use Taildwind
            </p>
          </div>
        </div>
        <div className="w-full h-full my-8 md:mx-7 md:mt-[70px] hover:card">
          <img
            src="./img/projects/p2.PNG"
            alt="p1"
            className="rounded-xl hover:img-project"
          />

          <p className="font-medium mt-2 p-2">LacazaCoffee</p>
          <div className="relative">
            <p className="text-secondary font-medium text-sm flex p-2">
              front end use reactJs
            </p>
            <p className="text-secondary font-medium text-sm absolute right-0 top-6 p-2">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm flex mt-2 font-medium p-2">
              ccs use Taildwind
            </p>
          </div>
        </div>
        <div className="w-full my-8 md:mt-[200px] hover:card">
          <img
            src="./img/projects/p3.JPG"
            alt="p1"
            className="rounded-xl hover:object-center"
          />

          <p className="font-medium mt-2 p-2">Staycation</p>
          <div className="relative ">
            <p className="text-secondary font-medium text-sm flex p-2">
              front end use reactJs
            </p>
            <p className="text-secondary font-medium text-sm absolute right-0 top-6 p-2">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm flex mt-2 font-medium p-2">
              ccs use bootstrap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
