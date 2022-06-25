import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((i) => !i);
  }

  return (
    <motion.div
      animate
      transition={{ duration: 1 }}
      className={`app-container  overflow-hidden  ${isDarkMode ? "dark" : ""} `}
    >
      <div className="flex flex-col w-screen h-screen dark:bg-[#121212] dark:text-gray-400 text-gray-700 ">
        <Header toggleDarkMode={toggleDarkMode} />
        <Main />
      </div>
    </motion.div>
  );
};

export default App;
