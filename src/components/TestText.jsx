import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Char from "./Char";

const TestText = ({ clicked = false }) => {
  let [currentPosition, setCurrentPosition] = useState();
  let [prevPosition, setPrevPosition] = useState();

  const testText =
    "Loremipsumdolorsitametconsecteturadipisicingelitkifnoiwenwfnwfennwfeinfeniwenffjopnfpqwniwonfweinfinwiwfeii".split(
      "",
    );

  const elemRef = useRef();

  useEffect(() => {
    setPrevPosition(-elemRef.current.offsetWidth + 64);
    setCurrentPosition(-elemRef.current.offsetWidth + 64);
  }, []);

  useEffect(() => {
    if (clicked === true) {
      setPrevPosition(currentPosition);
      setCurrentPosition((i) => i + 64);
      console.log(prevPosition, currentPosition);
    }
  }, [clicked]);

  return (
    <motion.div
      ref={elemRef}
      className="text-4xl  uppercase  inline-block whitespace-nowrap"
      initial={false}
      transition={{ bounce: 0.8, duration: 0.2, ease: "linear" }}
      animate={{ x: clicked === true ? currentPosition : prevPosition }}
    >
      {testText.map((i, index) => {
        return <Char key={index}>{i}</Char>;
      })}
    </motion.div>
  );
};

export default TestText;
