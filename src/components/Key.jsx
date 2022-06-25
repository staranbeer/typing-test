import React from "react";
import { motion } from "framer-motion";

const Key = ({ childKey, className = "", pressedKey = "" }) => {
  let keyCode = childKey;

  return (
    <motion.div
      className={`overlay border-gray-300 dark:text-teal-400 text-teal-800 rounded-md p-6 px-8 border border-collapse uppercase 
      dark:border-teal-700  
 ${className} ${
        pressedKey === keyCode
          ? "before:bg-teal-500 before:opacity-25 dark:before:bg-teal-300 border-teal-400"
          : ""
      }`}
    >
      {childKey}
    </motion.div>
  );
};

export default Key;
