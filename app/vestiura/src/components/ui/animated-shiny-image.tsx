"use client";

import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AnimatedShinyImageProps {
  src?: string;
  alt?: string;
  ratio?: number;
  className?: string;
}

export default function AnimatedShinyImage({
  src,
  alt,
  ratio = 3 / 4,
  className,
}: AnimatedShinyImageProps) {
  return (
    <AspectRatio ratio={ratio} className={cn("relative overflow-hidden rounded-lg group", className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-no-repeat bg-[linear-gradient(110deg,transparent_45%,rgba(255,255,255,0.3)_50%,transparent_55%)] bg-[length:200%_250%] group-hover:animate-shiny-image" />
    </AspectRatio>
  );
}
