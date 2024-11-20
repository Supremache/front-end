import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const navItems = ["Home", "Shop", "Category", "About", "Contact"];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
        <span className="text-lg text-slate-700 font-semibold">Art Waves</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex gap-2">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:bg-orange-100 rounded-lg"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="py-2 px-4 text-slate-500 hover:text-slate-800 block w-full h-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="p-2 rounded-full bg-gray-950">
          <a
            href="explore"
            className="text-xl text-gray-300 hover:text-gray-50 flex items-center justify-center"
          >
            <FaRegHeart />
          </a>
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={handleDrawer}
        className="md:hidden text-[1.8rem] text-slate-500 hover:text-slate-700 duration-300"
      >
        <RiMenu4Fill />
      </button>

      {/* Mobile Drawer (Conditional Rendering) */}
      {drawerOpen && (
          <div className="bg-green-100 border-r border-slate-200 h-full w-[300px] p-6 fixed top-0 left-0 z-50 transition-transform transform ease-in-out duration-500">
            <div className="flex items-center gap-2 mb-10">
              <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
              <span className="text-lg text-slate-700 font-semibold">
                Art Waves
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-3 hover:bg-green-200 rounded-lg"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-slate-800 block w-full h-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <button className="py-2 px-3 rounded-md bg-slate-950">
                <a
                  href="explore"
                  className="text-gray-300 hover:text-gray-50 flex items-center justify-center"
                >
                  Explore
                </a>
              </button>
            </ul>
          </div>
      )}
    </nav>
  );
}
