import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="active:outline active:outline-green-700 rounded-lg w-full px-3 py-2 text-center bg-teal-700 my-1 text-white"
    >
      Submit
    </button>
  );
};

export default Button;
