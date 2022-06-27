import React, { useState } from "react";
import Header from "./components/Ui/Header";
import Main from "./components/Ui/Main";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode((i) => !i);
  }

  return (
    <>
      <div
        className={`app-container  overflow-hidden  ${
          isDarkMode ? "dark" : ""
        } `}
      >
        <div className="flex flex-col w-screen h-screen dark:bg-[#121212] dark:text-gray-400 text-gray-700 ">
          <Header toggleDarkMode={toggleDarkMode} />
          <Main />
        </div>
      </div>
    </>
  );
};

export default App;
