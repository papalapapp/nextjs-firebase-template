import React from "react";

const Tooltip = ({ children, text }) => {


  return (
    <div className="group relative flex justify-center w-fit">
      {children}

      <span className="absolute whitespace-nowrap shadow-md bottom-6 opacity-0 scale-[50%] transition-all rounded-lg bg-gray-800 p-2 text-xs text-white group-hover:scale-100 group-hover:opacity-[100%]">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
