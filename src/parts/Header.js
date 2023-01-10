import React, { useState } from "react";

export default function Header() {
  const [hamburger, setHamburger] = useState("hamburger");
  const [hamburger_line, setHamburgerLine] = useState("hamburger-line");
  const [ismenuClicked, setMenuClicked] = useState(false);
  const [isnav, setNav] = useState("#nav-menu hidden");
  const [fixednav, setFixednav] = useState(false);
  const [header, setheader] = useState();
  // toogle hamburger menu change
  const updateMenu = () => {
    if (!ismenuClicked) {
      setHamburger("hamburger-active");
      setNav("block");
    } else {
      setHamburger("rotate-0");
      setNav("hidden");
    }
    setMenuClicked(!ismenuClicked);
  };

  const navfixed = () => {
    console.log(window.pageYOffset);
    // if (window.scrollY >= 10) {
    if (window.pageYOffset) {
      setFixednav(true);
    } else {
      setFixednav(false);
    }
  };
  window.addEventListener("scroll", navfixed);
  return (
    <header
      className={
        fixednav
          ? "navbar-fixed"
          : "bg-transparent sticky top-0 w-full flex items-center z-30"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between relative my-5">
          <div className="flex items-center">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={updateMenu}
              className={`block absolute py-4 lg:hidden ${hamburger}`}
            >
              <span
                className={`transition duration-300 ease-in-out origin-top-left  ${hamburger_line} `}
              ></span>
              <span
                className={` duration-300 ease-in-out  ${hamburger_line}`}
              ></span>
              <span
                className={`transition duration-300 ease-in-out origin-bottom-left ${hamburger_line} `}
              ></span>
            </button>

            <nav
              id="nav-menu"
              className={`z-10 absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:py-1 ${isnav} `}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="/"
                    className="text-base text-dark py-2 flex justify-center group-hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="/"
                    className="text-base text-dark py-2 mx-8 flex justify-center group-hover:text-primary"
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-[50px] h-[50px] py-2">
            <img
              src="./img/icon/logo.svg"
              alt="logo"
              className="flex w-full h-full object-cover"
            />
          </div>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/walter-aluman/"
              className="flex items-center justify-center w-[135px] h-[42px] font-medium bg-secondary p-3 rounded-[15px] hover:shadow-md btn-hover transform-none"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
