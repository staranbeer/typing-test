import React from "react";
import { HiOutlineMoon } from "react-icons/hi";

const Header = ({ toggleDarkMode }) => {
  return (
    <header className="px-6 md:px-12 lg:px-32 bg-gray-100 py-3 font-bold shadow flex items-center justify-between dark:bg-[#1e1e1e] dark:text-white">
      <p>Typing-test</p>
      <button onClick={toggleDarkMode} className="icon-container ">
        <HiOutlineMoon size={20} />
      </button>
    </header>
  );
};

export default Header;