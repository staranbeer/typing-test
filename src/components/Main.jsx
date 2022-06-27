import React, { useCallback, useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import TestText from "./TestText";

const Main = () => {
  const [pressedKey, setPressedKey] = useState("");
  const [clicked, setClicked] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [isSame, setIsSame] = useState(true);

  const [time, setTime] = useState(60);
  let timerId;
  function timeFunction() {
    if (time > 0) {
      setTime((prevTime) => prevTime - 1);
    }
  }
  useEffect(() => {
    if (hasStarted === true) {
      timerId = setTimeout(() => {
        timeFunction();
      }, 1000);
    }

    return () => clearTimeout(timerId);
  });

  const keys = [
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
          <span className="mx-5">{wrong}</span>
        </span>

        {/* <span className="text-red-400 inline-block">
          time remaining:
          <span className="ml-2">{time}</span>
        </span> */}
      </p>
      <div className="py-5 w-full   rounded-md overflow-hidden font-bold border-gray-400 max-w-4xl lg:block items-center">
        <TestText
          setRight={setRight}
          setWrong={setWrong}
          clicked={clicked}
          pressedKey={pressedKey}
          isSame={isSame}
          setIsSame={setIsSame}
          hasStarted={hasStarted}
          right={right}
          wrong={wrong}
          timerId={timerId}
          setHasStarted={setHasStarted}
        />
      </div>
      {hasStarted ? (
        <Keyboard
          pressedKey={pressedKey}
          isSame={isSame}
          setIsSame={setIsSame}
        />
      ) : (
        <Modal callback={() => setHasStarted(true)}>
          Type the character you see on the screen to get points.
          <button
            className="block max-w-max px-8 py-3 bg-blue-500 text-white shadow active:translate-y-1 rounded mx-auto mt-8"
            onClick={() => setHasStarted(true)}
          >
            Click to start
          </button>
        </Modal>
      )}
    </main>
  );
};

export default Main;
