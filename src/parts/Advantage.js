import React from "react";
import AdvantageItem from "../components/AdvantageItem";
export default function Advantage() {
  return (
    <section id="advantage" className="container mt-[100px] font-poppins">
      <p className="text-black font-bold text-xl">My Super Power</p>
      <div className="flex justify-center items-center mt-[55px] flex-col md:flex-row">
        <AdvantageItem title="Figma" pathImg="./img/advantage/figma.png" />
        <AdvantageItem title="ReactJs" pathImg="./img/advantage/react.png" />
        <AdvantageItem
          title="TailwindCss"
          pathImg="./img/advantage/tailwind.png"
        />
        <AdvantageItem title="Sass" pathImg="./img/advantage/sass.png" />
        <AdvantageItem
          title="Bootstrap"
          pathImg="./img/advantage/bootstrap.png"
        />
      </div>
    </section>
  );
}
