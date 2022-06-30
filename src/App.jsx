import React, { useState } from "react";
import { motion } from "framer-motion";

import { HiMenu, HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import Header from "./components/Ui/Header";
import Main from "./components/Ui/Main";
import Sidebar from "./components/Ui/Sidebar/Sidebar";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode((i) => !i);
  }

  return (
    <>
      <div
        className={`app-container dark:text-gray-400  w-screen h-screen overflow-hidden flex   ${
          isDarkMode ? "dark" : ""
        } `}
      >
        <div className="  flex w-full dark:bg-[#121212] text-gray-700 ">
          <Sidebar
            toggleSidebar={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />

          <div className="flex   flex-col flex-1 ">
            <Header toggleDarkMode={toggleDarkMode} />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
