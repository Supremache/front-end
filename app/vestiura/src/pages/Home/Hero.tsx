import Marquee from "@/components/ui/marquee";
import { brandsIcon } from "../../constants";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="container relative mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-6 lg:p-16 gap-8">
      {/* Marquee Section */}
      <div className="hidden md:flex absolute right-44 bottom-12 mt-8 lg:mt-3 py-6 ">
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:20s] mask-gradient px-4"
        >
          {brandsIcon.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Brand icon ${index + 1}`}
              className="h-16 w-16 mx-4 lg:h-20 lg:w-20 object-contain"
            />
          ))}
        </Marquee>
      </div>
      {/* Text Content */}
      <div className="max-w-full text-center md:text-left">
        {/* Announcement Banner */}
        <div className="hidden sm:flex sm:justify-center md:justify-start mb-4">
          <div className="flex items-center justify-center">
            <AnimatedGradientText>
              ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-border" /> Introducing
              our latest Winter Collection!.
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </div>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl leading-tight">
          Elevate Your Wardrobe with Timeless Style
        </h1>
        <p className="mt-6 text-sm text-muted-foreground sm:text-lg leading-relaxed">
          Discover fashion-forward designs crafted for comfort and elegance.
          Explore our latest collection to redefine your style.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center space-x-2">
          <a href="#">
            <Button>Get started</Button>
          </a>
          <a href="#">
            <Button variant="link" className="group">
              Learn more <ChevronRight size="sm" className="size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </Button>
          </a>
        </div>
        <div className="block md:hidden max-w-full h-20 mt-4 p-2 overflow-hidden">
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] mask-gradient px-4"
          >
            {brandsIcon.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Brand icon ${index + 1}`}
                className="h-16 w-16 mx-4 object-contain"
              />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative flex justify-center lg:justify-end w-full max-w-44 md:max-w-fit">
        <img
          src="/images/hero.png"
          alt="hero-model"
          className="w-full h-auto object-contain"
        />

        <img
          src="/images/shape-wawes.svg"
          alt="hero-model"
          className="w-full h-auto object-contain scale-50 opacity-30 absolute top-24 right-28"
        />

        <img
          src="/images/shape-circle.svg"
          alt="hero-model"
          className="w-full h-auto object-contain scale-50 opacity-30 absolute bottom-0 left-16"
        />
      </div>
    </div>
  );
};

export default Hero;
