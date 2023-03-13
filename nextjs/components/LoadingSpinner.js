import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ size = 24, color = "#000000", strokeWidth = 2 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference / 4;

  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
        style={{
          strokeDasharray,
          strokeDashoffset,
          transformOrigin: "center",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  );
};

export default LoadingSpinner;
