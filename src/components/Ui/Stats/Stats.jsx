import React from "react";

const Stats = ({ right, wrong }) => {
  return (
    <div className="hidden lg:block">
      <p className="dark:bg-[#1e1e1e] shadow-md px-8 py-5 rounded-md text-white font-bold uppercase">
        <span className="text-green-400 inline-block mr-8">
          Right: <span className="ml-2">{right}</span>
        </span>
        <span className="text-red-400 inline-block">
          wrong:
          <span className="mx-5">{wrong}</span>
        </span>

        {/* <span className="text-red-400 inline-block">
          time remaining:
          <span className="ml-2">{time}</span>
        </span> */}
      </p>
    </div>
  );
};

export default Stats;
