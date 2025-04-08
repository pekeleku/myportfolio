import React from "react";

import AdvantageItem from "../components/AdvantageItem";
import CustomSlider from "../components/reusable/CustomeSlider/CustomSlider ";

export default function Advantage() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,

    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,

          // fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="advantage" className="container mt-[100px] font-poppins">
      <p className="text-black font-bold text-xl mb-2">My Super Power</p>
      <CustomSlider>
        <AdvantageItem title="ReactJs" pathImg="./img/advantage/react.svg" />
        <AdvantageItem
          width
          title="Nextjs"
          pathImg="./img/advantage/icon-nextjs.svg"
        />
        <AdvantageItem title="Figma" pathImg="./img/advantage/figma.svg" />
        <AdvantageItem
          title="TailwindCss"
          pathImg="./img/advantage/tailwind.svg"
        />
        <AdvantageItem title="Sass" pathImg="./img/advantage/sass.svg" />
        <AdvantageItem
          title="Bootstrap"
          pathImg="./img/advantage/bootstrap.svg"
        />
      </CustomSlider>
    </section>
  );
}
