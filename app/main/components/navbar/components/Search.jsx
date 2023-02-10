import React from "react";

const Search = ({ className }) => {
  return (
    <>
      <input
        className={
          "px-5 py-3 text-sm rounded-md focus:border-bold-pink outline-none border-2 border-transparent duration-150 w-96 " +
          className
        }
        type="text"
        placeholder="Lagi cari apa kak?"
      />
    </>
  );
};

export default Search;
