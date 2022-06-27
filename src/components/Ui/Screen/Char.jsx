import React, { useEffect, useRef } from "react";
const Char = ({ children, sameKey, makeRed, makeGreen }) => {
  const elemRef = useRef(null);
  return (
    <div
      ref={elemRef}
      className={`inline-block px-1 w-16 h-16 text-center text-8xl font-rubic ${
        sameKey === true ? "text-green-400" : "text-red-400"
      }`}
    >
      {children}
    </div>
  );
};

export default Char;
