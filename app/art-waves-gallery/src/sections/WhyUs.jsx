import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const aboutItems = [
    {img: "/images/why-us-1.png", title: "Meet the Artists", subTitle: "Explore Diverse Talents", button: "Customized Experience"},
    {img: "/images/why-us-2.png", title: "Unbox Your Creativity", subTitle: "Elevate Your Vision", button: "Personalize Your Journey"},
    {img: "/images/why-us-3.png", title: "Cultivate Unique Connections", subTitle: "Collect Unique Artworks", button: "Empower Creativity"}
]
export default function WhyUs() {
  return (
    <section className="flex flex-col items-center h-full w-full py-6 mb-6" id="about">
      <div className="max-w-lg text-center px-6">
        <h1 className="text-[2rem] md:text-[3rem] font-semibold">Why Choose US?</h1>
        <span className="text-slate-500 text-md md:text-lg">
        At Gallery, we are committed to providing a seamless and secure platform for artists to showcase their creativity and connect with the world.
        </span>
      </div>

    <div className="flex flex-wrap justify-center items-center gap-16 p-10">
        {aboutItems.map((item, index) => (
            <div className="space-y-5" key={index}>
                <img src={item.img} alt={`img-${item.title}`} className="h-[400px] max-w-[300px] rounded-3xl object-cover" />
                <h2 className="text-[1.44rem] font-semibold">{item.title}</h2>
                <span className="text-md text-slate-500 ">{item.subTitle}</span>
                <button type="button" className="flex items-center justify-center gap-2 py-2 px-6 text-gray-950 hover:text-gray-50 border border-gray-950 hover:border-gray-900 hover:bg-gray-900 rounded-md group duration-300">{item.button} <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/></button>
            </div>
        ))}
    </div>
    </section>
  );
}
