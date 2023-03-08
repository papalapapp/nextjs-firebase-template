import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Dropdown({ buttonLabel, items, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  //   <Dropdown
  //           buttonLabel={
  //           <div className="flex rounded-lg bg-gray-100 text-gray-800 py-2 px-5">
  //             Select
  //             <ChevronDownIcon className="w-6 h-6"/>
  //           </div>}
  //           items={items}>
  //             <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
  //               1 Option
  //             </div>

  //             <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
  //               1 Option
  //             </div>
  //             <hr />
  //             <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
  //               1 Option
  //             </div>
  //           </Dropdown>

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={handleButtonClick}>{buttonLabel}</button>
      <motion.div
        className="z-20 origin-top-right absolute left-0 mt-2 w-56 rounded-xl overflow-hidden shadow-2xl bg-white ring-1 ring-black ring-opacity-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <div className="py-2">
          {/* {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={handleItemClick}
            >
              {item.label}
            </a>
          ))} */}
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default Dropdown;
