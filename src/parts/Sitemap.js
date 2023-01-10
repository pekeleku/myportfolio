import React from "react";

export default function Sitemap() {
  return (
    <section id="aside-menu" className="mt-[100px]">
      <div className="">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/12 pt-9 lg:px-2">
              <h5 className="text-[30px] font-medium text-primary pb-[25px]">
                My<span className="text-black">Portfolio</span>
              </h5>
            </div>

            <div className="w-6/12 lg:w-3/12 pt-12 lg:px-2">
              <h5 className="text-lg font-bold text-primary">About Me</h5>
              <ul className="pt-3 lg:pt-[25px]">
                <li className="pb-[15px]">
                  <button
                    type="link"
                    href="/"
                    className="text-base font-light text-secondary hover:underline"
                  >
                    alumanwalter@gmail.com
                  </button>
                </li>
                <li className="pb-[15px]">
                  <button
                    type="link"
                    href="/"
                    className="text-base font-light text-secondary hover:underline"
                  >
                    Privacy & Policy
                  </button>
                </li>
              </ul>
            </div>

            <div className="w-6/12 lg:w-3/12 pt-12 lg:px-2">
              <h5 className="text-lg font-bold text-primary">Location</h5>
              <ul className="pt-3 lg:pt-[25px]">
                <li className="pb-[15px]">
                  <button
                    type="link"
                    href="/"
                    className="text-base font-light text-secondary hover:underline"
                  >
                    Indonesia
                  </button>
                </li>
                <li className="pb-[15px]">
                  <button
                    type="link"
                    href="/"
                    className="text-base font-light text-secondary hover:underline"
                  >
                    East Nusa Tenggara
                  </button>
                </li>
              </ul>
            </div>

            <div className="w-6/12 lg:w-3/12 pt-12 pb-12 lg:px-2">
              <h5 className="text-lg font-bold text-primary">Follow Me</h5>
              <ul className="pt-3 lg:pt-[25px]">
                <li className="pb-[15px]">
                  <button
                    type="link"
                    href="/"
                    className="text-base font-light text-secondary hover:underline"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" fill="white" />
                      <rect
                        x="5.5"
                        y="5.5"
                        width="37"
                        height="37"
                        rx="8.5"
                        stroke="#CF9861"
                        strokeWidth="3"
                      />
                      <rect
                        x="13.5"
                        y="13.5"
                        width="21"
                        height="21"
                        rx="10.5"
                        stroke="#CF9861"
                        strokeWidth="3"
                      />
                      <circle
                        cx="36"
                        cy="12"
                        r="1.5"
                        stroke="#CF9861"
                        strokeWidth="3"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
