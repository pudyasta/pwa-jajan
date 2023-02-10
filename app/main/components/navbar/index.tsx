"use client";

import { useContext, useState } from "react";
import { Search, CategoryCollapse, Badge } from "./components";
import { Icon } from "@iconify/react";
import Button from "@commons/button";
import Image from "next/image";
import Link from "next/link";
import { NavContextProvider } from "config/context";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const context = useContext(NavContextProvider);
  return (
    <>
      <nav className="bg-[#f6f6f8] px-5 lg:px-20 h-24 shadow-md overflow-x-hidden flex justify-between relative fixed z-20">
        <div className="flex lg:gap-10 items-center lg:justify-start justify-between w-full">
          <Link className="logo" href="/">
            <Image
              width={115}
              height={30}
              src="/assets/1.png"
              alt="jajanst logo"
            />
          </Link>
          <button
            className="capitalize  items-center gap-2 lg:flex hidden h-full "
            onMouseEnter={() => context?.dispatch({ type: "catCollapse" })}
            onMouseLeave={() => context?.dispatch({ type: "catUp" })}
            onClick={() => context?.dispatch({ type: "catToogle" })}
          >
            kategori{" "}
            <Icon
              icon="material-symbols:arrow-forward-ios-rounded"
              className={`text-bold-pink ${
                context?.state.navCollapse ? "rotate-90" : "rotate-0"
              } duration-150`}
            />
          </button>
          <Search className="lg:inline hidden " />
          <button className="block lg:hidden">
            <Icon
              icon="ic:round-menu"
              className="text-2xl active:text-bold-pink focus:text-bold-pink"
            />
          </button>
        </div>
        <div className=" items-center lg:flex hidden gap-14">
          <button>
            <Badge
              icon="material-symbols:shopping-cart-rounded"
              text="keranjang"
            />
          </button>
          <Badge
            icon="material-symbols:favorite-outline-rounded"
            text="favorit"
          />
          <Badge icon="ic:outline-message" text="pesan" />
          <Button>masuk</Button>
        </div>
      </nav>
      {context?.state.navCollapse && <CategoryCollapse setShow={setShow} />}
    </>
  );
}
