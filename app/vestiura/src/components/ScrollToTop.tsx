import { ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";


const ScrollToTop: React.FC = ({
  className,
}: {
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (  
    <div>
      {isVisible && (
        <Button
          variant={"default"}
          size={"icon"}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={cn("fixed bottom-5 right-5", className)}
        >
          <ChevronUp />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
