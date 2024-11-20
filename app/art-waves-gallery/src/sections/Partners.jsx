import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const aboutItems = [
    "/images/Partners-1.png",
    "/images/Partners-2.png",
    "/images/Partners-3.png"
]
export default function Partners() {
  return (
    <section className="flex flex-col items-center py-6 h-full w-full mb-6" id="about">
      <div className="max-w-lg text-center px-6">
        <h1 className="text-[2rem] md:text-[3rem] font-semibold mt-10">Our Partners</h1>
        <span className="text-slate-500 text-md md:text-lg">
        Collaborate with us and become part of a vibrant community of innovators, creators, and global brands.
        </span>
      </div>

    <div className="flex flex-wrap justify-center items-center gap-16 p-10">
        {aboutItems.map((item, index) => (
            index == 1 ? (
                <div className="space-y-5 flex flex-col items-center justify-center shadow-2xl bg-green-100 rounded-[50px] h-[450px] w-[300px] sm:h-[536px] sm:w-[380px]" key={index}>
                <img src={item} alt={`img-partne`} className="max-h-[80%] max-w-[80%] rounded-3xl object-cover" />
                <button type="button" className="flex items-center justify-center gap-2 py-2 px-6 text-gray-950 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full shadow-lg hover:shadow group duration-300">Become a Partner <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/></button>
                </div>
            ) : (
                <div className="space-y-5" key={index}>
                <img src={item} alt={`img-partner`} className="h-[400px] max-w-[300px] rounded-3xl object-cover" />
            </div>
            )

            
        ))}
    </div>
    </section>
  );
}
