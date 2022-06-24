import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keys3 = ["z", "x", "c", "v", "b", "n", "m"];
  return (
    <div className=" justify-center items-center flex-col hidden lg:flex gap-2">
      <div className="flex gap-2  ">
        {keys1.map((i) => {
          return <Key childKey={i} key={i} />;
        })}
      </div>

      <div className="flex gap-2 ">
        {keys2.map((i) => {
          return <Key childKey={i} key={i} />;
        })}
      </div>

      <div className="flex gap-2 ">
        {keys3.map((i) => {
          return <Key childKey={i} key={i} />;
        })}
      </div>
      <Key
        childKey={"Space bar"}
        className="w-96 text-center border py-5 rounded border-gray-300"
      ></Key>
    </div>
  );
};

export default Keyboard;
