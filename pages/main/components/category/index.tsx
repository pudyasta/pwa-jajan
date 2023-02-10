import Link from "next/link";
import React from "react";
import Piece from "./components/piece";

const Category = () => {
  const menu = [
    { name: "gelang", img: "/assets/categories/gelang.png" },
    { name: "lanyard", img: "/assets/categories/lanyard.png" },
    { name: "kaos", img: "/assets/categories/kaos.png" },
    { name: "hoodie", img: "/assets/categories/hoddie.png" },
    { name: "korsa", img: "/assets/categories/korsa.png" },
    { name: "gelang", img: "/assets/categories/gelang.png" },
    { name: "gelang", img: "/assets/categories/gelang.png" },
    { name: "gelang", img: "/assets/categories/gelang.png" },
    { name: "gelang", img: "/assets/categories/gelang.png" },
  ];

  const Menus = menu.map((e, i) => (
    <Piece
      name={e.name}
      src={e.img}
      alt={"Image of " + e.name}
      key={(Date.now() + i).toString()}
    />
  ));
  return (
    <>
      <div className="lg:px-32 px-5 w-full py-5">
        <h2 className="lg:text-3xl text-lg font-medium">Kategori</h2>
        <div className="grid w-full md:grid-cols-6 md:grid-rows-1 grid-rows-4 md:gap-10 gap-2  my-5  relative ">
          <div className="md:grid hidden md:grid-rows-5 gap-2">
            <Link href={"/fashion"} className="">
              <span className="md:text-lg text-sm border-bold-pink border-2 text-bold-pink md:w-full md:py-2  block rounded-lg px-3 font-semibold ">
                Fashion
              </span>
            </Link>
            <Link href={"/fashion"} className="">
              <span className="md:text-lg text-sm border-bold-pink border-2 text-bold-pink md:w-full md:py-2  block rounded-lg px-3 font-semibold ">
                Fashion
              </span>
            </Link>
            <Link href={"/fashion"} className="">
              <span className="md:text-lg text-sm border-bold-pink border-2 text-bold-pink md:w-full md:py-2  block rounded-lg px-3 font-semibold ">
                Fashion
              </span>
            </Link>
            <Link href={"/fashion"} className="">
              <span className="md:text-lg text-sm border-bold-pink border-2 text-bold-pink md:w-full md:py-2  block rounded-lg px-3 font-semibold ">
                Fashion
              </span>
            </Link>
            <Link href={"/fashion"} className="">
              <span className="md:text-lg text-sm border-bold-pink border-2 text-bold-pink md:w-full md:py-2  block rounded-lg px-3 font-semibold ">
                Fashion
              </span>
            </Link>
          </div>
          <div className="category md:flex grid sm:grid-cols-6 grid-cols-5   col-span-5 md:gap-5 gap-y-5 gap-x-3">
            {Menus}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
