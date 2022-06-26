import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Char from "./Char";
import { v4 } from "uuid";

const TestText = ({
  clicked = false,
  pressedKey,
  setRight,
  setWrong,
  isSame,
  setIsSame,
}) => {
  const testText =
    "Loremipsumdolorsitametconsecteturadipisicingelitkifnoiwenwfnwfenwfeinfeniwenffjopnfpqwniwonfweinfinwiwfeii"
      .toLowerCase()
      .split("");
  const [screenText, setScreenText] = useState([testText[0]]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (counter !== testText.length) {
      if (clicked === true) {
        let newArray = [testText[counter], ...screenText];
        let lastElement = newArray[newArray.length - 1];

        console.log(pressedKey, lastElement);

        if (pressedKey === lastElement) {
          setRight((i) => i + 1);
          setIsSame(true);
        } else {
          setWrong((i) => i + 1);
          setIsSame(false);
        }

        setScreenText([testText[counter]]);
        setCounter((i) => i + 1);
      }
    }
  }, [clicked]);

  return (
    <motion.div className="text-center uppercase py-10">
      <div className=" ">
        <Char
          makeRed={() => undefined}
          sameKey={isSame}
          makeGreen={() => undefined}
        >
          {screenText[0]}
        </Char>
      </div>
    </motion.div>
  );
};

export default TestText;
