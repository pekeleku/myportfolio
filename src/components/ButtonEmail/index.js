import React from "react";
import { Link } from "react-router-dom";
export default function index({ mailto, subject }) {
  return (
    <Link
      className=" flex w-[165px] h-[60px] bg-btn  rounded-2xl  justify-center items-center text-white  font-semibold my-6  lg:my-[50px]  "
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {subject}
    </Link>
  );
}
