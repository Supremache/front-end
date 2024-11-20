import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const connect = [
  { title: "Instagram", icon: BsInstagram },
  { title: "X", icon: BsTwitterX },
  { title: "Linkedin", icon: BsLinkedin },
  { title: "Facebook", icon: BsFacebook },
];

const Footer = () => {
  return (
    <footer class="relative bg-green-100">
      <div className="absolute inset-x-0 top-0 -mt-1 h-16 bg-green-100 transform rotate-180 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,32L40,69.3C80,107,160,181,240,197.3C320,213,400,171,480,165.3C560,160,640,192,720,186.7C800,181,880,139,960,138.7C1040,139,1120,181,1200,176C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 px-12">
        <div class="flex flex-col md:flex-row items-center space-x-16 justify-center md:justify-between py-12">
          <div class="flex justify-center mb-6 md:mb-0">
            <div class="flex items-center">
              <img
                src="/images/logo.png"
                class="h-16 me-3"
                alt="FlowBite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                Art Waves
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Quick Links
              </h2>
              <ul class="flex flex-col gap-4 text-gray-500 font-medium">
                <li>
                  <a href="#home" class="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" class="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#shop" class="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#contact" class="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul class="flex flex-col gap-4 text-gray-500 font-medium">
                <li>
                  <a href="#faq" class="hover:underline ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#policies" class="hover:underline">
                    Policies
                  </a>
                </li>
                <li>
                  <a href="#affi" class="hover:underline">
                    Affiliate marketing
                  </a>
                </li>
                <li>
                  <a href="#partner" class="hover:underline">
                    Become a Partner
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul class="flex flex-col gap-4 text-gray-500 font-medium">
                <li>
                  <a href="#term" class="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#privacy" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Art Wave Gallery. All rights
            reserved.
          </p>
          <div class="flex gap-6 mt-4 sm:justify-center sm:mt-0">
            {connect.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  href="#"
                  class="text-slate-500 hover:text-slate-700 duration-300"
                  key={index}
                >
                  <IconComponent className="h-5 w-5" />
                  <span class="sr-only">{item.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
