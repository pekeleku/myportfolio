import React from "react";

export default function Projects() {
  return (
    <section className="container mt-[100px] font-poppins" id="portfolio">
      <p className="text-black font-bold text-xl">My Projects</p>
      <div className="flex flex-col md:flex-row">
        <div className="w-full h-full my-8 hover:card transition duration-150 hover:translate-y-5   ">
          <img
            src="./img/projects/p1.JPG"
            alt="p1"
            className="rounded-xl hover:object-center "
          />
          <a
            className="font-medium mt-2 p-2 hover:text-primary"
            href="https://luxspace-pwa-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luxspace
          </a>

          <div className="relative ">
            <p className="text-secondary font-light text-sm flex p-2 ">
              front end use reactJs
            </p>
            <p className="text-secondary font-light text-sm absolute right-0 top-6 p-2">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm  mt-2 lg:mt-0 flex font-light p-2">
              ccs use Taildwind
            </p>
          </div>
        </div>
        <div className="w-full h-full my-8 md:mx-7 md:mt-[70px] hover:card transition duration-150 hover:translate-y-5">
          <img src="./img/projects/p2.PNG" alt="p1" className="rounded-xl" />

          <a
            className="font-medium mt-2 p-2 hover:text-primary"
            href="https://lacazacoffe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lacaza Coffee
          </a>

          <div className="relative">
            <p className="text-secondary font-light text-sm flex p-2">
              front end use reactJs
            </p>
            <p className="text-secondary font-light text-sm absolute right-0 top-6 p-2">
              back end use expressJs
            </p>
            <p className="text-secondary text-sm  mt-2 lg:mt-0  flex font-light p-2">
              ccs use Taildwind
            </p>
          </div>
        </div>
        <div className="w-full my-8 md:mt-[200px] hover:card transition duration-150 hover:translate-y-5">
          <img
            src="./img/projects/p3.JPG"
            alt="p1"
            className="rounded-xl hover:object-center"
          />

          <a
            className="font-medium mt-2 p-2 hover:text-primary"
            href="https://company-orcin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Company
          </a>

          <div className="relative ">
            <p className="text-secondary font-light text-sm flex p-2">
              simple landing page
            </p>

            <p className="text-secondary text-sm flex  mt-2 lg:mt-0 font-light p-2">
              ccs use Sass & bootsrap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
