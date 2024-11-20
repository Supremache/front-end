import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const aboutItems = [
    {img: "/images/about-1.webp", title: "Featured", subTitle: "Discover", button: "View Portfolio"},
    {img: "/images/about-2.webp", title: "Explore", subTitle: "Artist", button: "Learn More"},
    {img: "/images/about-3.webp", title: "Innovative", subTitle: "Unique", button: "Collector's Showcase"}
]
export default function About() {
  return (
    <section className="flex flex-col items-center py-6 h-full w-full mb-6" id="about">
      <div className="max-w-lg text-center px-6">
        <h1 className="text-[2rem] md:text-[3rem] font-semibold mt-10">About Our Platform </h1>
        <span className="text-slate-500 text-md md:text-lg">
          At Gallery, we believe that digital art has the power to transform the
          way we experience
        </span>
      </div>

    <div className="flex flex-wrap justify-center items-center gap-16 p-10">
        {aboutItems.map((item, index) => (
            <div className="space-y-5" key={index}>
                <img src={item.img} alt={`img-${item.title}`} className="h-[400px] max-w-[300px] rounded-3xl object-cover" />
                <h2 className="text-[1.66rem] font-semibold">{item.title}</h2>
                <span className="text-md text-slate-500">{item.subTitle}</span>
                <button type="button" className="flex items-center justify-center gap-2 py-2 px-6 text-gray-950 hover:text-gray-50 border border-gray-950 hover:border-gray-900 hover:bg-gray-900 rounded-md group duration-300">{item.button} <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/></button>
            </div>
        ))}
    </div>
    </section>
  );
}
