import Image from "next/image";
import React, { useEffect, useState } from "react";

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
          "carousel h-full  flex w-full items-center flex-col relative px-0 2xl:px-32  " +
          className
        }
      >
        <div className="relative flex  overflow-x-hidden md:h-72 lg:h-96 xl:h-[60vh]  sm:h-52 h-40 w-full lg:mt-32 mt-24 ">
          <Image
            src="/assets/banner/carousel/1.png"
            priority
            fill
            alt="banner 1"
            className={`slide first lg:object-fill ${
              checked == 2
                ? "translate-x-[-100vw]"
                : checked == 3
                ? "translate-x-[-200vw]"
                : "translate-x-[0]"
            } duration-700 ease-in-out`}
          />
          <Image
            src="/assets/banner/carousel/2.png"
            fill
            alt="banner 1"
            className={`slide first lg:object-fill ${
              checked == 2
                ? "translate-x-[0]"
                : checked == 3
                ? "translate-x-[-100vw]"
                : "translate-x-[100vw]"
            } duration-700 ease-in-out`}
          />
          <Image
            src="/assets/banner/carousel/3.png"
            fill
            alt="banner 1"
            className={`slide first lg:object-fill  ${
              checked == 3
                ? "translate-x-[0]"
                : checked == 2
                ? "translate-x-[100vw]"
                : "translate-x-[200vw]"
            } duration-700 ease-in-out`}
          />
        </div>
        <div
          className={
            "indicator h-20 w-52   mt-3 gap-2 justify-center md:flex hidden"
          }
        >
          <label
            className={`lg:h-4 h-3  border-2 border-bold-pink block ${
              checked == 1 ? "bg-bold-pink w-16" : "lg:w-4 w-3"
            } block rounded-full duration-500 cursor-pointer`}
            onClick={() => setChecked(1)}
          ></label>
          <label
            onClick={() => setChecked(2)}
            className={`lg:h-4 h-3 border-2 border-bold-pink block ${
              checked == 2 ? "bg-bold-pink w-16" : "lg:w-4 w-3"
            } block rounded-full duration-500 cursor-pointer`}
          ></label>
          <label
            onClick={() => setChecked(3)}
            className={`lg:h-4 h-3 border-2 border-bold-pink block ${
              checked == 3 ? "bg-bold-pink w-16" : "lg:w-4 w-3"
            } block rounded-full duration-500 cursor-pointer`}
          ></label>
        </div>
      </div>
    </>
  );
};

export default Carousel;
