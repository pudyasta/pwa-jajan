import Image from "next/image";
import Link from "next/link";
import React from "react";
import Piece from "./components/piece";

const Category = () => {
  return (
    <>
      <div className="px-20">
        <h2 className="text-3xl">Kategory</h2>
        <div className="grid grid-cols-6 gap-14 my-5    ">
          <div className="grid grid-rows-5 gap-6">
            <Link
              href={"/fashion"}
              className="border-bold-pink border-2 text-bold-pink w-full h-10 inline-block rounded-lg grid content-center px-3 font-semibold"
            >
              Fashion
            </Link>
            <Link
              href={"/fashion"}
              className="border-bold-pink border-2 text-bold-pink w-full h-10 inline-block rounded-lg grid content-center px-3 font-semibold"
            >
              Fashion
            </Link>
            <Link
              href={"/fashion"}
              className="border-bold-pink border-2 text-bold-pink w-full h-10 inline-block rounded-lg grid content-center px-3 font-semibold"
            >
              Fashion
            </Link>
            <Link
              href={"/fashion"}
              className="border-bold-pink border-2 text-bold-pink w-full h-10 inline-block rounded-lg grid content-center px-3 font-semibold"
            >
              Fashion
            </Link>
            <Link
              href={"/fashion"}
              className="border-bold-pink border-2 text-bold-pink w-full h-10 inline-block rounded-lg grid content-center px-3 font-semibold"
            >
              Fashion
            </Link>
          </div>

          <Piece
            name="gelang"
            src="/assets/categories/gelang.png"
            alt="gelang"
          />
          <Piece
            name="hoodie"
            src="/assets/categories/hoddie.png"
            alt="gelang"
          />
          <Piece
            name="lanyard"
            src="/assets/categories/lanyard.png"
            alt="lanyard"
          />
          <Piece name="kaos" src="/assets/categories/kaos.png" alt="kaos" />
          <Piece name="jaket" src="/assets/categories/jaket.png" alt="jaket" />
          <Piece
            name="gelang"
            src="/assets/categories/gelang.png"
            alt="gelang"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
