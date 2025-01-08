import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Flag from "react-world-flags";

import { TreeDataItem, TreeView } from "@/components/ui/tree-view";
import { alerts, languages, navigation } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  AlignJustify,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Search,
  ShoppingCart,
} from "lucide-react";
import WordRotate from "./ui/word-rotate";
import ListItem from "./ui/ListItem";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navData: TreeDataItem[] = navigation.categories
    .map((category) => ({
      id: category.id,
      name: category.name,
      children: [
        {
          id: `${category.id}-featured`,
          name: "Featured",
          children: category.featured.map((feature) => ({
            id: `${category.id}-featured-${feature.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`,
            name: feature.name,
            href: feature.href,
            imageSrc: feature.imageSrc,
            imageAlt: feature.imageAlt,
          })),
        },
        ...category.sections.map((section) => ({
          id: `${category.id}-${section.id}`,
          name: section.name,
          children: section.items.map((item) => ({
            id: `${category.id}-${section.id}-${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`,
            name: item.name,
            href: item.href,
          })),
        })),
      ],
    }))
    .concat(
      navigation.pages.map((page) => ({
        id: page.name.toLowerCase().replace(/\s+/g, "-"),
        name: page.name,
        href: page.href,
      }))
    );

  return (
    <header className="h-auto max-w-full divide-y-[1px] divide-border">
      <div className="text-center bg-foreground px-4 overflow-hidden">
        <WordRotate words={alerts} className="body-2 text-accent" />
        <div className="w-full md:w-auto flex items-center justify-between space-x-6"></div>
      </div>
      <div className="flex items-center justify-between text-center px-6 md:px-16 py-1 ">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={18} />
          EG, New Cairo
          <Phone size={18} className="ml-8" />
          +20 10 00 XXXXX
        </div>

        <div className="hidden md:flex items-center justify-center space-x-2">
          <Select defaultValue={languages[0].title.toLowerCase()}>
            <SelectTrigger className="w-auto h-full border-none shadow-none text-muted-foreground hover:text-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {languages.map((lang, index) => (
                  <SelectItem key={index} value={lang.title.toLowerCase()} className="text-muted-foreground hover:text-primary">
                    <Flag
                      code={lang.icon}
                      style={{ width: "20px", height: "20px" }}
                      className="inline-flex mr-2"
                    />
                    {lang.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-auto h-full border-none shadow-none text-muted-foreground hover:text-primary">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {["USD", "EURO", "EGP", "SAR"].map((lang, index) => (
                  <SelectItem key={index} value={lang.toLowerCase()} className="text-muted-foreground hover:text-primary">
                    {lang}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {[Facebook, Instagram, Linkedin].map((Icon, index) => (
            <Button key={index} variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Icon className={`${
    index !== 1 ? "fill-current stroke-none" : "stroke-current fill-none"
  }`} />
            </Button>
          ))}
        </div>
      </div>
      <nav className="flex items-center justify-between h-16 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between space-x-2">
          <a href="/" className="shrink-0">
            <img
              src="./images/logo.png"
              className="h-8 w-auto"
              alt="Vestiura Logo"
            />
          </a>
          <div className="border-l border-gray-300 h-8 mx-2 shrink-0"></div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="default" className="text-muted-foreground hover:text-primary">
              Login
            </Button>
            <Button variant="default" size="default">
              SignUp
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-[1fr,auto,auto,auto] space-x-2 items-center justify-between w-auto">
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {navigation.categories.map((category) => (
                <NavigationMenuItem key={category.id}>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-primary focus:text-primary">{category.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-4 w-[800px] max-w-full gap-6 p-4 mx-auto overflow-auto">
                      <li className="grid row-span-2">
                        <ul>
                          {category.featured.map((feature) => (
                            <NavigationMenuLink key={feature.name} asChild>
                              <a
                                className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href={feature.href}
                              >
                                <img
                                  src={feature.imageSrc}
                                  alt={feature.imageAlt}
                                  className="absolute inset-0 object-cover w-full h-full rounded-md"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background from-15% via-transparent via-45% to-transparent to-90%"></div>

                                <h3 className="absolute left-2 h3 bottom-20 mb-1 mt-4 text-lg font-semibold">
                                  {feature.name}
                                </h3>
                                <p className="absolute left-2 botton-0 text-sm leading-tight text-muted-foreground">
                                  {feature.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </li>

                      {category.sections.map((section) => (
                        <li key={section.id} className="row-span-1">
                          <h3 className="body-2 text-sm font-bold mb-2">
                            {section.name}
                          </h3>
                          <ul>
                            {section.items.map((item) => (
                              <ListItem
                                key={item.name}
                                title={item.name}
                                href={item.href}
                                className="text-muted-foreground hover:text-primary focus:text-primary"
                              >
                                {item.description}
                              </ListItem>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              {navigation.pages.map((page) => (
                <NavigationMenuItem key={page.name}>
                  <NavigationMenuLink
                    href={page.href}
                    className={cn(navigationMenuTriggerStyle(), "text-muted-foreground hover:text-primary focus:text-primary")}
                  >
                    {page.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
            <Button variant="ghost" size="icon" className="rows-span-2 text-muted-foreground hover:text-primary">
              <Search />
            </Button>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="icon" className="relative m-1 text-muted-foreground hover:text-primary">
                  <ShoppingCart />
                  <div className="absolute top-0 right-0 bg-muted text-muted-foreground text-sm flex items-center justify-center h-4 w-4 rounded-full">
                    1
                  </div>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" align="end">
                <div className="space-y-4">
                  {/* Product Details */}
                  <div className="flex w-full space-x-6">
                    {/* Product Image */}
                    <AspectRatio ratio={19 / 6} className="w-36">
                      <img
                        src="./images/hoodie-product.jpg"
                        alt="Example Product"
                        className="h-full w-full rounded-md object-cover"
                      />
                    </AspectRatio>
                    {/* Product Info */}
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-bold">Classic Hoodie</h4>
                      <p className="text-sm text-muted-foreground">
                        Cozy and comfortable hoodie for everyday wear.
                      </p>
                      <p className="text-xs text-accent-foreground">
                        Category: Outerwear
                      </p>
                      <div className="flex items-center justify-between space-x-2 pt-2">
                        <span className="text-sm font-medium text-primary">
                          $45.00
                        </span>
                        <div className="flex items-center space-x-4">
                          <Button
                            variant={"outline"}
                            size="icon"
                            className="size-5"
                          >
                            -
                          </Button>
                          <span className="text-sm">1</span>
                          <Button
                            variant={"outline"}
                            size="icon"
                            className="size-5"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Additional Actions */}
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="w-full">
                      View Cart
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rows-span-2 text-muted-foreground hover:text-primary"
                >
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"} className="flex flex-col h-full">
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src="./images/vestiuralogo.png"
                      alt="Vestiura logo"
                      className="h-auto w-44 object-contain"
                    />
                  </SheetTitle>
                  <SheetDescription>
                    Style That Tells Your Story.
                  </SheetDescription>
                </SheetHeader>
                {/* TreeView Component */}
                <TreeView data={navData} className="py-4 flex-grow" />
                {/* Content at the Bottom */}
                <div className="mt-auto space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Language Select */}
                    <Select defaultValue={languages[0].title.toLowerCase()}>
                      <SelectTrigger className="bg-secondary border-none shadow-none">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {languages.map((lang, index) => (
                            <SelectItem
                              key={index}
                              value={lang.title.toLowerCase()}
                            >
                              <Flag
                                code={lang.icon}
                                style={{ width: "20px", height: "20px" }}
                                className="inline-flex mr-2"
                              />
                              {lang.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {/* Currency Select */}
                    <Select>
                      <SelectTrigger className="bg-secondary border-none shadow-none">
                        <SelectValue placeholder="USD" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {["USD", "EURO", "EGP", "SAR"].map(
                            (currency, index) => (
                              <SelectItem
                                key={index}
                                value={currency.toLowerCase()}
                              >
                                {currency}
                              </SelectItem>
                            )
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Social Media Links */}
                  <div className="flex justify-evenly">
                    {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                      <Button key={index} variant="secondary" size="icon">
                        <Icon />
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
