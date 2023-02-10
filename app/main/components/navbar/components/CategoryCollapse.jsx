import { NavContextProvider } from "config/context";
import React from "react";

const CategoryCollapse = (props) => {
  const context = React.useContext(NavContextProvider);

  return (
    <>
      <div
        className=" min-h-[100px] absolute  w-full bg-white px-[15%]  pb-5 left-0  shadow-md z-20"
        onMouseEnter={() => context.dispatch({ type: "catCollapse" })}
        onMouseLeave={() => context.dispatch({ type: "catUp" })}
      >
        Sepatu
      </div>
      <div className=" left-0 w-[100%] h-[100vh]  absolute bg-black/50 z-10 top-0"></div>
    </>
  );
};

export default CategoryCollapse;
