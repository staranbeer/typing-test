import React, { useState } from "react";
import { motion } from "framer-motion";

import { HiMenu, HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import Header from "./components/Ui/Header";
import Main from "./components/Ui/Main";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode((i) => !i);
  }

  return (
    <>
      <div
        className={`app-container  overflow-hidden flex  ${
          isDarkMode ? "dark" : ""
        } `}
      >
        <div className="dark:bg-[#121212] dark:text-gray-400 text-gray-700 flex ">
          <motion.div
            className="sidebar  border-r-2 w-64 overflow-hidden"
            animate={{ width: isSidebarOpen ? "4rem" : "16rem" }}
          >
            <motion.div className="flex  ">
              <button
                onClick={() => setIsSidebarOpen((i) => !i)}
                className="sidebar__menu  px-3  py-4 "
              >
                <HiMenuAlt2 size={32} />
              </button>
            </motion.div>
            <div
              className={`menu__items flex flex-col ${
                isSidebarOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="px-3 py-4 dark:text-white font-bold  hover:bg-[#1e1e1e] cursor-pointer uppercase hover:bg-gray-[#1e1e1e] ">
                Character Attack
              </div>

              <div className="px-3 py-4 dark:text-white font-bold  hover:bg-[#1e1e1e] cursor-pointer uppercase hover:bg-gray-[#1e1e1e] ">
                Stream
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col w-screen h-screen ">
            <Header toggleDarkMode={toggleDarkMode} />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
