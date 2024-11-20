import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

export default function Unlock() {
  return (
    <section className="flex flex-col w-full mb-6">
      {/* First Section */}
      <div className="relative h-auto w-full bg-green-100 flex flex-col md:flex-row items-center overflow-hidden px-6">
        <div className="flex-1 md:order-2 relative">
          <img
            src="/images/unlock.png"
            alt="Unlock Digital Art"
            className="w-3/4 max-w-sm mx-auto md:max-w-xl"
          />
        </div>
        <div className="flex-1 text-center md:text-left p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Unlock the Power of Digital Art
          </h1>
          <p className="text-slate-700 mb-6">
            At Gallery, we believe digital art has the potential to revolutionize
            how we experience, connect with, and appreciate creativity in all its forms.
          </p>
          <button
            type="button"
            className="flex items-center mx-auto md:mx-0 gap-2 px-6 py-3 bg-gray-950 text-gray-300 hover:text-gray-50 rounded-md group hover:bg-gray-900 duration-300"
          >
            Explore Collection
            <FaArrowRight className="inline-block transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative h-auto w-full bg-orange-50 flex flex-col-reverse md:flex-row items-center overflow-hidden px-6">
        <div className="flex-1 md:order-2 text-center md:text-left p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Gallery's Mission</h1>
          <p className="text-slate-700 mb-6">
            Gallery's mission is to celebrate the boundless creativity of digital
            artists and to foster a community where art enthusiasts can discover.
          </p>
          <button
            type="button"
            className="flex items-center mx-auto md:mx-0 justify-center gap-2 px-6 py-3 border border-gray-950 text-gray-950 hover:text-gray-50 hover:border-gray-900 hover:bg-gray-900 rounded-md group duration-300"
          >
            Join Now
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
        <div className="flex-1 relative">
          <img
            src="/images/Mission.webp"
            alt="Gallery Mission"
            className="w-3/4 max-w-sm mx-auto md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
