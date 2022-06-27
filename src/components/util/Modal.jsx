import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import ReactDOM from "react-dom";

const Modal = ({ children, callback = () => {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  function toggleModal() {
    setIsModalOpen((i) => !i);
    callback();
  }
  return (
    <>
      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="lg:block hidden modal-container">
            <div
              className="modal-overlay top-0 left-0 fixed w-screen h-screen bg-black z-20 opacity-40"
              onClick={toggleModal}
            ></div>
            <div className="modal z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 py-16 pt-20 rounded-md  dark:border-2  dark:text-white font-rubic  text-center w-96">
              <div
                onClick={toggleModal}
                className="absolute right-4 top-4 hover:bg-gray-100 dark:hover:bg-black p-1 rounded-full cursor-pointer"
              >
                <HiOutlineX size={20} />
              </div>
              {children}
            </div>
          </div>,
          document.getElementById("modal"),
        )}
    </>
  );
};

export default Modal;
