import React from "react";
import { motion } from "framer-motion";

const Key = ({ childKey, className = "" }) => {
  console.log("render this");
  return (
    <motion.div
      className={`p-6 px-8 border border-collapse uppercase border-gray-300
 ${className}`}
    >
      {childKey}
    </motion.div>
  );
};

export default Key;
