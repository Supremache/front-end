import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center">
        <img src="/images/hero-img.png" className="max-w-sm md:max-w-md lg:max-w-xl" />
        <div className="max-w-[600px] p-4">
          <h1 className="text-2xl md:text-5xl font-bold">Elevate Your Art Collection </h1>
          <p className="py-6 text-slate-500">
            Gallery is an innovative digital art marketplace that empowers
            artists to showcase their unique creations and enables art.
          </p>
          <button type="button" className="flex items-center gap-2 text-gray-300 hover:text-gray-50 px-6 py-2 bg-gray-950 rounded-md group hover:bg-gray-900 duration-300">Get Started <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/></button>
        </div>
      </div>
    </div>
  );
}
