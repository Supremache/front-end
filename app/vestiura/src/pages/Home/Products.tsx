import AnimatedShinyImage from "@/components/ui/animated-shiny-image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import SpinningText from "@/components/ui/spinning-text";
import { ourProducts } from "@/constants";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState("women");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const productsPerPage = 8;

  const filteredProducts =
    ourProducts
      .find((p) => p.id === category)
      ?.items.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [];

  const visibleProducts = filteredProducts.slice(0, page * productsPerPage);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto p-6 lg:p-16">
      <p className="h2 md:h1 text-center font-bold">Top Picks for You</p>
      <p className="body-2 md:body1 text-center text-muted-foreground p-4 max-w-xl mx-auto leading-tight">
        Explore our trending products! Handpicked favorites loved by
        shoppers—featuring the best in fashion, gadgets, and more. Don’t miss
        out!
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 items-center mt-6">
        {/* Search Bar */}
        <div className="relative col-span-12 md:col-span-6 lg:col-span-4">
          <Input
            type="text"
            placeholder="Search products.."
            className="pl-9 body-1 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 text-foreground/50 size-6" />
        </div>

        {/* Product Buttons */}
        <div className="flex flex-wrap gap-2 col-span-12 md:col-span-6 lg:col-span-8">
          {ourProducts.map((p) => (
            <Button
              key={p.id}
              variant={p.id === category ? "secondary" : "outline"}
              type="button"
              className="capitalize"
              onClick={() => setCategory(p.id)}
            >
              {p.id}
            </Button>
          ))}
        </div>
        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 col-span-12">
          {visibleProducts.map((p, index) => (
            <Card key={index}>
              <CardContent className="relative flex items-center justify-center p-0 bg-muted rounded-tl-lg rounded-tr-lg overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {p.product.map((product, imgId) => (
                      <CarouselItem key={imgId}>
                        <AnimatedShinyImage
                          src={product.img}
                          alt={`${p.title} image`}
                        />{" "}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselDots
                    colors={p.product.map((product) => product.color)}
                  />
                </Carousel>
                {p.sale && (
                  <SpinningText
                    outerText="SALE - WINTER SALE - WINTER SALE - "
                    centerText={"70% OFF"}
                    size={100}
                    duration={8}
                    className="absolute -top-6 -right-6"
                  />
                )}
              </CardContent>
              <CardHeader className="p-4 bg-background">
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardFooter className="py-2 px-4 flex justify-between items-center bg-background">
                <div className="flex items-center gap-2">
                  {p.sale && (
                    <p className="body-2 text-md text-primary font-semibold">
                      {p.sale}$
                    </p>
                  )}
                  <p
                    className={cn(
                      "body-2 text-md text-primary font-semibold",
                      p.sale
                        ? "body-2 text-sm line-through text-muted-foreground"
                        : ""
                    )}
                  >
                    {p.price}$
                  </p>
                </div>
                <Button variant="default">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* Load More Button */}
      {filteredProducts.length > visibleProducts.length && (
        <div className="flex justify-center mt-4">
          <Button variant="outline" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
