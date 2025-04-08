import React from "react";
export default function index({
  pathImg,
  title,
  width = false,
  heigth = false,
}) {
  return (
    <div
      className={` w-[165px] h-[159px] mb-4 md:mb-0 p-[40px] bg-secondary   hover:bg-slate-400 hover:duration-500  rounded-[35px] mr-0 md:mr-7 `}
    >
      <div className="flex  items-center justify-center ">
        <img
          src={pathImg}
          className={`${width ? "w-[60px]" : "auto"}`}
          alt={title}
        />
      </div>
      <p className="flex justify-center font-medium mt-[10px]">{title}</p>
    </div>
  );
}
