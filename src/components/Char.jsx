import React from "react";

const Char = ({ children, sameKey = false }) => {
  return (
    <div
      className={`inline-block px-1 w-16 text-center text-6xl font-rubic ${
        sameKey === true ? "text-green-400" : "text-red-400"
      }`}
    >
      {children}
    </div>
  );
};

export default Char;
