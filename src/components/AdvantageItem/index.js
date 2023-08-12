import React from "react";

export default function index({ pathImg, title }) {
  return (
    <div className=" w-[165px] h-[159px] mb-4 md:mb-0 p-[50px] bg-secondary   hover:bg-slate-400 hover:duration-500  rounded-[35px] mr-0 md:mr-7">
      <div className="flex  items-center justify-center ">
        <img src={pathImg} className="  " alt={title} />
      </div>
      <p className="flex justify-center font-medium mt-[10px]">{title}</p>
    </div>
  );
}
