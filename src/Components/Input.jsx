import React from "react";

const Input = ({ placeholder, type, value, setValue, name }) => {
  return (
    <input
      type={type}
      // value={value}
      name={name}
      onChange={setValue}
      className="text-slate-900 focus:outline focus:outline-green-700 rounded-lg border border-teal-700 px-3 py-2 outline-none w-full my-1"
      placeholder={placeholder}
    />
  );
};

export default Input;
