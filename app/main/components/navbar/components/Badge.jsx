import React from "react";
import { Icon } from "@iconify/react";

const Badge = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center text-bold-pink ">
      <div className="relative">
        <span className="absolute w-5 h-5 rounded-xl bg-red-600 bottom-4 left-5 text-white text-sm text-center">
          5
        </span>
        <Icon icon={icon} className="text-2xl" />
      </div>
      <p className="capitalize text-sm  ">{text}</p>
    </div>
  );
};

export default Badge;
