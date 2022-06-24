import React from "react";
import Keyboard from "./Keyboard";

const Main = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-3">
      <p className="bg-cyan-500 text-white font-bold p-3 rounded-md  lg:hidden block text-center ">
        This app is not yet available for mobile screens
      </p>

      <Keyboard />
    </main>
  );
};

export default Main;
