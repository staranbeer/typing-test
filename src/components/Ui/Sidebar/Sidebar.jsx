import React from "react";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <motion.div
      className="sidebar  border-r-2 w-64 overflow-hidden dark:text-white"
      animate={{ width: isSidebarOpen ? "4rem" : "16rem" }}
    >
      <motion.div className="flex  flex-col">
        <button
          onClick={() => toggleSidebar((i) => !i)}
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
        <nav className="flex flex-col">
          <Link
            to={"/"}
            className="px-3 py-4 hover:text-white font-bold  hover:bg-[#1e1e1e] cursor-pointer uppercase hover:bg-gray-[#1e1e1e] "
          >
            Character Attack
          </Link>

          <Link
            to={"/stream"}
            className="px-3 py-4 hover:text-white font-bold  hover:bg-[#1e1e1e] cursor-pointer uppercase hover:bg-gray-[#1e1e1e] "
          >
            Stream
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
