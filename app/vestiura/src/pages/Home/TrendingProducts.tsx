import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trendProducts } from "@/constants";
import AnimatedShinyImage from "@/components/ui/animated-shiny-image";

const TrendingProducts = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  
  return (
    <div className="container mx-auto p-6 lg:p-16">
      <p className="h2 md:h1 text-center font-bold ">
        Trending Products
      </p>
      <p className="body-2 md:body1 text-center text-muted-foreground p-4 max-w-sm mx-auto leading-tight">
        Shop our trending products! Discover top picks loved by shoppers, from
        fashion to gadgets!
      </p>
      <div className="w-full h-full flex items-center justify-center px-16 py-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1 space-x-2">
            {trendProducts.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
              >
                <a href="#" className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0 bg-muted rounded-lg">
                      <AnimatedShinyImage
                        src={product}
                        alt={`${product} image`}
                      />
                    </CardContent>
                  </Card>        
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingProducts;
