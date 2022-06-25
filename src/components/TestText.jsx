import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Char from "./Char";
import { v4 } from "uuid";

const TestText = ({ clicked = false, pressedKey, setRight, setWrong }) => {
  const testText =
    "Loremipsumdolorsitametconsecteturadipisicingelitkifnoiwenwfnwfenwfeinfeniwenffjopnfpqwniwonfweinfinwiwfeii"
      .toLowerCase()
      .split("");
  const [screenText, setScreenText] = useState([testText[0]]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (clicked === true) {
      let firstElement = [testText[counter], ...screenText][1];

      console.log(pressedKey, firstElement);

      if (pressedKey === firstElement) {
        setRight((i) => i + 1);
      } else {
        setWrong((i) => i + 1);
      }
      setScreenText((prevScreenText) => [testText[counter], ...prevScreenText]);
      setCounter((i) => i + 1);
    }
  }, [clicked]);

  return (
    <motion.div className="text-4xl  uppercase  inline-block whitespace-nowrap h-20">
      <div className=" ">
        {screenText.map((i) => {
          const id = v4();
          return (
            <Char
              key={id}
              makeRed={() => undefined}
              makeGreen={() => undefined}
            >
              {i}
            </Char>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TestText;
