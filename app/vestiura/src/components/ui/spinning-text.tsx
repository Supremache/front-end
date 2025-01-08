import { cn } from "@/lib/utils";
import React from "react";

interface CircularTextProps {
  outerText: string; 
  centerText?: string; 
  size?: number;
  duration?: number; 
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  outerText,
  centerText,
  size = 200,
  duration = 10,
  className,
}) => {
  const radius = size / 2 - 10;
  const repeatedText = outerText.repeat(Math.ceil((2 * Math.PI * radius) / outerText.length));
  return (
    <div
      className={cn("relative flex items-center justify-center", className)} 
      style={{ width: size, height: size }}
    >
      {/* Rotating Circle */}
      <svg
        className="absolute animate-spin"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <defs>
        <path
            id="circlePath"
            d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text fontSize="14" fontWeight="bold" fill="black">
          <textPath href="#circlePath" textAnchor="middle" startOffset="50%">
            {repeatedText} 
          </textPath>
        </text>
      </svg>

      {/* Center Text */}
      {centerText && (
        <div className="absolute flex flex-col items-center text-xl font-bold leading-5">
          <div>{centerText.split(" ")[0]}</div> 
          <div>{centerText.split(" ")[1]}</div>
        </div>
      )}
    </div>
  );
};

export default CircularText;
