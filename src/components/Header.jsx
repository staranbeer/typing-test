import React from "react";
import { HiOutlineMoon } from "react-icons/hi";

const Header = ({ toggleDarkMode }) => {
  return (
    <header className="px-6 md:px-12 lg:px-32  py-3 font-bold shadow flex items-center justify-between dark:bg-[#1e1e1e] dark:text-white ">
      <p>Typing-test</p>
      <div onClick={toggleDarkMode} className="icon-container cursor-pointer">
        <HiOutlineMoon size={20} />
      </div>
    </header>
  );
};

export default Header;
