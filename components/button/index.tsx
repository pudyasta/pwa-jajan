import React from "react";

const Button = (props: { className?: string; children: string }) => {
  return (
    <>
      <button
        className={
          "bg-bold-pink py-2 px-6 text-sm text-white rounded-md capitalize " +
          props.className
        }
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
