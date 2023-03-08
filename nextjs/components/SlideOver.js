import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const SlideOver = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // <SlideOver isOpen={isOpen} onClose={handleClose}>
  //   <p className="text-base">Test skjdkjfkdjdkfj</p>
  // </SlideOver>;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleOverlayClick}
          ></div>
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full lg:max-w-md max-w-xs md:p-8 p-6 bg-white shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-medium">Slide Over</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideOver;
