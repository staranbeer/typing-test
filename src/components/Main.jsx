import React, { useCallback, useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import TestText from "./TestText";

const Main = () => {
  const [pressedKey, setPressedKey] = useState("");
  const [clicked, setClicked] = useState(false);

  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  const keys = [
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const handleKeyDown = useCallback((e) => {
    const eventKey = e.key;
    if (keys.indexOf(eventKey) !== -1) {
      setPressedKey(eventKey.toLowerCase());
      setClicked(true);
    }
  }, []);

  const handleKeyUp = useCallback(() => {
    setPressedKey("");
    setClicked(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <main className="flex-1 flex items-center justify-center  flex-col gap-8 px-36">
      <p className="bg-teal-500 text-white font-bold p-3 rounded-md  lg:hidden block text-center  ">
        This app is not yet available for mobile screens
      </p>
      <p className="dark:bg-[#1e1e1e] shadow-md px-8 py-5 rounded-md text-white font-bold uppercase">
        <span className="text-green-400 inline-block mr-8">
          Right: <span className="ml-2">{right}</span>
        </span>
        <span className="text-red-400 inline-block">
          wrong:
          <span className="ml-2">{wrong}</span>
        </span>
      </p>
      <div className="py-6 w-full   rounded-md overflow-hidden font-bold border-gray-400 max-w-4xl h-32 lg:block items-center mt-6">
        <TestText
          setRight={setRight}
          setWrong={setWrong}
          clicked={clicked}
          pressedKey={pressedKey}
        />
      </div>
      <Keyboard pressedKey={pressedKey} />
    </main>
  );
};

export default Main;
