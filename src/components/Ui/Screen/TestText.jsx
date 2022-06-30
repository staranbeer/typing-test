import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Char from "./Char";
import Modal from "./../../util/Modal";

const defaultText = "Loremipsumdolorsitametconsecteturadipisicingelaram"
  .replace(" ", "")
  .toLowerCase()
  .split("");

const TestText = ({
  hasStarted,
  clicked = false,
  pressedKey,
  setRight,
  setWrong,
  isSame,
  setIsSame,
  right,
  wrong,
}) => {
  const [testText, setTestText] = useState(defaultText);
  const [screenText, setScreenText] = useState(testText[0]);
  const [showModal, setShowModal] = useState(false);
  console.log(defaultText);
  useEffect(() => {
    let firstElement = testText[0];
    setScreenText(firstElement);
    if (clicked === true && hasStarted && testText.length > 0) {
      console.log(pressedKey, screenText);
      if (pressedKey === firstElement) {
        setRight((i) => i + 1);
        setIsSame(true);
      } else {
        setWrong((i) => i + 1);
        setIsSame(false);
      }

      setTestText((prevTestText) => [...prevTestText.slice(1)]);
    }
  }, [clicked]);

  useEffect(() => {
    if (hasStarted && testText.length === 0) {
      setShowModal(true);
    }
  }, [hasStarted, testText]);

  return (
    <>
      <motion.div className="text-center uppercase py-10 h-40">
        <div className=" ">
          <Char
            makeRed={() => undefined}
            sameKey={isSame}
            makeGreen={() => undefined}
          >
            {screenText}
          </Char>
        </div>
      </motion.div>

      {showModal === true ? (
        <Modal>
          <div className="bg-green-500 text-white px-4 py-2">
            right: {right}
          </div>
          <div className="mt-6 bg-red-500 text-white px-4 py-2">
            wrong: {wrong}
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default TestText;
