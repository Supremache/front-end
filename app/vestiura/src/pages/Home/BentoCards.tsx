import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";

const BentoCards = () => {
  return (
    <BentoGrid className="container">
      <BentoGridItem className="relative md:col-span-2 md:row-span-2 overflow-hidden p-0">
        <img
          src="/images/bentogrid/bigsale.png"
          alt="Big Sale Image"
          className="absolute inset-0 object-cover z-10"
        />
        <div className="z-10 flex flex-col justify-center items-center h-full p-4 bg-gradient-to-t from-primary via-transparent to-transparent">
          <h1 className="h1 font-bold text-primary">Big Sale</h1>
          <p className="body-1 text-secondary">
            Get up to 70% off on selected items
          </p>
          <Button variant="secondary" size="lg" className="font-bold mt-4">
            Shop Now
          </Button>
        </div>
      </BentoGridItem>
      <BentoGridItem className="relative md:col-span-1 overflow-hidden p-0">
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-4">
          <p className="body-1 text-primary">Trending Styles</p>
          <h5 className="h5 leading-tight font-bold text-center text-primary">
            The hottest looks of the season, curated for you.
          </h5>
        </div>
      </BentoGridItem>
      <BentoGridItem className="relative md:col-span-1 overflow-hidden p-0">
        <img
          src="/images/bentogrid/justin.png"
          alt="Just In Image"
          className="absolute -bottom-16 object-cover z-10 size-52"
        />
        <div className="absolute top-0 left-0 z-20 flex flex-col justify-center items-center p-4">
          <p className="body-1 text-primary">Just In!</p>
          <h5 className="h5 leading-tight font-bold text-center text-primary">
            Check out the latest additions to our collection.
          </h5>
        </div>
      </BentoGridItem>
      <BentoGridItem className="relative md:col-span-1 overflow-hidden p-0">
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-4">
          <h3 className="h4 font-bold text-primary">Free Shipping</h3>
          <p className="body-1 leading-tight font-bold text-center text-primary">
            Enjoy free shipping on orders over $50.
          </p>
        </div>
      </BentoGridItem>
      <BentoGridItem className="relative md:col-span-2 overflow-hidden p-0">
        <img
          src="/images/bentogrid/styleguide.png"
          alt="Style Guide Image"
          className="absolute inset-0 object-contain size-96 z-10"
        />
        <div className="absolute top-4 right-0 z-20 flex flex-col justify-center items-center max-w-sm mx-auto p-4">
          <h1 className="h3 font-bold text-primary">Your Style Guide</h1>
          <p className="text-center body-1 text-primary">
          Tips and tricks to style your outfits for every occasion.
          </p>
          <Button size="lg" className="font-bold mt-4">
          Read More
          </Button>
        </div>
      </BentoGridItem>
    </BentoGrid>
  );
};

export default BentoCards;
