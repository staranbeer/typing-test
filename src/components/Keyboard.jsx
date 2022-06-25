import React from "react";
import Key from "./Key";

const Keyboard = ({ pressedKey, makeRed, makeGreen }) => {
  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keys3 = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <div className=" justify-center items-center flex-col  lg:flex gap-2">
      <div className="flex gap-2  ">
        {keys1.map((i) => {
          return <Key pressedKey={pressedKey} childKey={i} key={i} />;
        })}
      </div>

      <div className="flex gap-2 ">
        {keys2.map((i) => {
          return <Key pressedKey={pressedKey} childKey={i} key={i} />;
        })}
      </div>

      <div className="flex gap-2 ">
        {keys3.map((i) => {
          return <Key pressedKey={pressedKey} childKey={i} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Keyboard;
