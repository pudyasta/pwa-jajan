"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { setInterval } from "timers/promises";

interface caroProps {
  children?: React.ReactNode;
  className?: string;
}

const Carousel = (props: caroProps) => {
  const { children, className } = props;
  const [checked, setChecked] = useState(1);
  useEffect(() => {
    let interval = setInterval(() => {
      if (checked == 3) {
        setChecked(1);
      } else {
        setChecked(checked + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div
        className={
          "carousel h-full py-6 flex w-full items-center flex-col relative  " +
          className
        }
      >
        <div className="relative flex  overflow-x-hidden md:h-72 lg:h-[60vh]  h-40 w-[90vw] rounded-xl">
          <input type="radio" name="radio-btn" id="radio1" className="hidden" />
          <input type="radio" name="radio-btn" id="radio2" className="hidden" />
          <input type="radio" name="radio-btn" id="radio3" className="hidden" />
          <Image
            src="/assets/banner/carousel/1.png"
            fill
            style={{ objectFit: "fill" }}
            alt="banner 1"
            className={`slide first ${
              checked == 2
                ? "translate-x-[-90vw]"
                : checked == 3
                ? "translate-x-[-180vw]"
                : "translate-x-[0]"
            } duration-700 ease-in-out`}
          />
          <Image
            src="/assets/banner/carousel/2.png"
            fill
            style={{ objectFit: "fill" }}
            alt="banner 1"
            className={`slide first ${
              checked == 2
                ? "translate-x-[0]"
                : checked == 3
                ? "translate-x-[-90vw]"
                : "translate-x-[90vw]"
            } duration-700 ease-in-out`}
          />
          <Image
            src="/assets/banner/carousel/3.png"
            fill
            style={{ objectFit: "fill" }}
            alt="banner 1"
            className={`slide first ${
              checked == 3
                ? "translate-x-[0]"
                : checked == 2
                ? "translate-x-[90vw]"
                : "translate-x-[180vw]"
            } duration-700 ease-in-out`}
          />
        </div>
        <div className="indicator h-20 w-52 flex  py-6 gap-2 justify-center">
          <label
            htmlFor="radio1"
            className={`h-4  border-2 border-bold-pink block ${
              checked == 1 ? "bg-bold-pink w-16" : "w-4"
            } block rounded-full duration-500 cursor-pointer`}
            onClick={() => setChecked(1)}
          ></label>
          <label
            htmlFor="radio2"
            onClick={() => setChecked(2)}
            className={`h-4  border-2 border-bold-pink block ${
              checked == 2 ? "bg-bold-pink w-16" : "w-4"
            } block rounded-full duration-500 cursor-pointer`}
          ></label>
          <label
            htmlFor="radio3"
            onClick={() => setChecked(3)}
            className={`h-4  border-2 border-bold-pink block ${
              checked == 3 ? "bg-bold-pink w-16" : "w-4"
            } block rounded-full duration-500 cursor-pointer`}
          ></label>
        </div>
      </div>
    </>
  );
};

export default Carousel;
