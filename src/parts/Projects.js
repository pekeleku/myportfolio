import React from "react";

export default function Projects() {
  return (
    <section className="container mt-[100px]">
      <p className="text-black font-bold text-xl">My Projects</p>
      <div className="flex flex-col md:flex-row">
        <div className="w-full h-full my-8 ring-red-600">
          <img
            src="./img/projects/p1.JPG"
            alt="p1"
            className="rounded-xl hover:object-center"
          />

          <p className="font-medium mt-2">Luxspace</p>
          <div className="relative mt-2">
            <p className="text-secondary font-medium text-sm flex">
              front end use reactJs
            </p>
            <p className="text-secondary font-medium text-sm absolute right-0 top-3">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm flex mt-2 font-medium">
              ccs use Taildwind
            </p>
          </div>
        </div>
        <div className="w-full h-full my-8 md:mx-7 md:mt-[70px]">
          <img
            src="./img/projects/p2.PNG"
            alt="p1"
            className="rounded-xl hover:img-project"
          />

          <p className="font-medium mt-2">LacazaCoffee</p>
          <div className="relative mt-2">
            <p className="text-secondary font-medium text-sm flex">
              front end use reactJs
            </p>
            <p className="text-secondary font-medium text-sm absolute right-0 top-3">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm flex mt-2 font-medium">
              ccs use Taildwind
            </p>
          </div>
        </div>
        <div className="w-full my-8 md:mt-[200px]">
          <img
            src="./img/projects/p3.JPG"
            alt="p1"
            className="rounded-xl hover:object-center"
          />

          <p className="font-medium mt-2">Staycation</p>
          <div className="relative mt-2">
            <p className="text-secondary font-medium text-sm flex">
              front end use reactJs
            </p>
            <p className="text-secondary font-medium text-sm absolute right-0 top-3">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm flex mt-2 font-medium">
              ccs use bootstrap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
