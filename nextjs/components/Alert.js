import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

function Alert({ color, heading, text }) {
  const [isOpen, setIsOpen] = useState(true);
  const colorVariants = {
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
  };

  const colorVariantsBtn = {
    blue: "hover:bg-blue-200",
    red: "hover:bg-red-200",
    green: "hover:bg-green-200",
    yellow: "hover:bg-yellow-200",
    gray: "hover:bg-gray-200",
  }

  console.log(colorVariants[color]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${colorVariants[color]} rounded-xl md:p-4 p-2 relative w-100`}
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.2 } }}
        >
          <button
          className={`${colorVariantsBtn[color]} absolute top-1 right-1 md:top-2 md:right-2 rounded-lg p-1 transition-all duration-200 active:scale-105 `}

            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="font-medium text-base">{heading}</div>
          <p className="mt-1 text-sm">{text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Alert;
