import React from "react";

const Checkbox = ({ onChange }) => {
  return (
    <input onChange={onChange} type={"checkbox"} className="border border-teal-700 outline-none    my-1"/>
  );
};

export default Checkbox;
