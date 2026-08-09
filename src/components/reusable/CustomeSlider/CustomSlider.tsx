import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Arrow = ({ dir, onClick = () => {} }) => (
  <button
    type="button"
    aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
    onClick={onClick}
    className="slick-arrow flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/15 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
    style={{ [dir === "prev" ? "left" : "right"]: -18 }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {dir === "prev" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  </button>
);

const CustomSlider = ({ children, settings = {} }) => {
  const defaultSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,

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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default CustomSlider;
