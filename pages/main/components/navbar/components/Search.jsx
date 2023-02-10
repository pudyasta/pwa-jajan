import React from "react";

const Search = (props) => {
  return (
    <>
      <input
        className={
          "px-5 lg:py-3 py-2 text-sm rounded-md focus:border-bold-pink outline-none border-2 border-transparent duration-300 lg:w-96 focus:w-60 w-52"
        }
        type="text"
        placeholder="Lagi cari apa kak?"
      />
    </>
  );
};

export default Search;
