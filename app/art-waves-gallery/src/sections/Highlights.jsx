import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Highlights() {
  return (
    <section className='flex justify-center items-center h-screen w-full mb-6'>
      
        <div className='relative flex lg:items-center h-4/5 sm:h-3/5 max-w-[85%] w-full p-8 bg-yellow-200 rounded-xl shadow-lg overflow-hidden'>
          <img src="/images/highlights.webp" className="absolute right-0 bottom-0 max-w-2xl lg:max-w-6xl z-0" />
          <div className="max-w-screen-sm p-4 z-10">
            <h1 className="sm:text-2xl md:text-5xl font-bold">Why Choose Art Waves?</h1>
            <p className="py-6 text-slate-700">
              Art Waves is an innovative digital art marketplace that empowers
              artists to showcase their unique creations and enables art.
            </p>
            <button type="button" className="flex items-center gap-2 text-gray-300 hover:text-gray-50 px-6 py-2 bg-gray-950 rounded-md group hover:bg-gray-900 duration-300">Get Started <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/></button>
          </div>
        </div>
    </section>
  )
}
