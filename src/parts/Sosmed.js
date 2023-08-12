import React from "react";

export default function Sosmed() {
  return (
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
          <img alt="img" className="w-full h-full" src="./img/link/ig.png" />
        </a>
      </div>
    </div>
  );
}
