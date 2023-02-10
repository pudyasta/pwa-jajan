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
      <Link href={"/main"}>
        <div
          className="bg-black h-full relative w-full rounded-xl overflow-hidden bg-gray-800 before:content-[''] before:h-full before:w-full before:bg-black/25 before:absolute before:top-0 before:left-0 before:z-10 before:block"
          onMouseEnter={() => setScale(true)}
          onMouseLeave={() => setScale(false)}
        >
          <p className="absolute text-white top-32 mx-4 font-semibold text-3xl z-10 capitalize ">
            {name}
          </p>
          <Image
            src={src}
            fill
            style={{ objectFit: "cover" }}
            alt={alt}
            className={
              scale ? "scale-125 duration-500" : "scale-100 duration-500"
            }
          />
        </div>
      </Link>
    </>
  );
};

export default Piece;
