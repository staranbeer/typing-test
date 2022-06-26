import React from "react";
import { motion } from "framer-motion";

const Key = ({ childKey, className = "", pressedKey = "", isSame }) => {
  let keyCode = childKey;

  return (
    <motion.div
      className={`overlay border-gray-300 rounded-md p-6 px-8 border border-collapse uppercase  
 ${className} ${
        pressedKey === keyCode
          ? "before:bg-green-500 border-green-500 before:opacity-25  "
          : !isSame
          ? "before:bg-red-500 border-red-300 before:opacity-25"
          : "dark:border-gray-300 dark:text-gray-300"
      } `}
    >
      {childKey}
    </motion.div>
  );
};

export default Key;
