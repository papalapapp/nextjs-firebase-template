import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imageVariants = {
  enter: (direction) => {
    return {
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction === "right" ? -1000 : 1000,
      opacity: 0,
    };
  },
};

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  // How to use it in the components
  // Prop images is a array of the image routes
  //   <div className="h-[500px]">
  //     <Carousel images={images} />
  //   </div>;

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setDirection("left");
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setDirection("right");
  };

  return (
    <div className="relative w-full h-full">
      <button
        onClick={handlePreviousClick}
        className="z-10 absolute left-4 top-1/2 translate-y-[-50%] p-2 bg-white rounded-full shadow-md mr-4 hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={handleNextClick}
        className="z-10 absolute translate-y-[-50%] right-4 top-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
      </button>

      <motion.div
        className="relative overflow-hidden h-full w-full rounded-2xl"
        key={currentIndex}
        variants={imageVariants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt="Carousel Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
