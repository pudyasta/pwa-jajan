"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface pieceInt {
  name: string;
  src: string;
  alt: string;
}

const Piece = (props: pieceInt) => {
  const [scale, setScale] = useState(false);
  const { name, src, alt } = props;
  return (
    <>
      <div
        className="md:[&:nth-child(n+6)]:hidden  md:h-full h-20 w-full  md:grid-rows-1 grid grid-rows-4 md:text-left text-center md:rounded-xl rounded-md 
        "
        onMouseEnter={() => setScale(true)}
        onMouseLeave={() => setScale(false)}
      >
        <div className="h-full relative overflow-hidden md:rounded-xl rounded-md row-span-3">
          <Link href={"/main"} className="relative block items-center h-full ">
            <h2 className="absolute top-24 text-white  font-semibold lg:text-3xl md:text-2xl z-20 mx-4 capitalize md:block hidden">
              {name}
            </h2>
            <div className="h-full relative  before:content-[''] before:h-full before:w-full before:bg-black/25 md:before:absolute before:top-0 before:left-0 before:z-10 before:block ">
              <Image
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                onLoad={() => <p>loading....</p>}
                src={src}
                fill
                style={{ objectFit: "cover" }}
                alt={alt}
                className={
                  scale
                    ? "scale-125 duration-500"
                    : "scale-100 duration-500" + "  relative"
                }
              />
            </div>
          </Link>
        </div>
        <div className="h-full">
          <h2 className="relative text-black font-medium lg:text-3xl md:text-2xl sm:text-lg text-xs z-10 capitalize md:hidden block mt-1">
            {name}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Piece;
