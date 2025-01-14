"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Link, NavLink, useLoaderData } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { ListItem } from "./ui/list-item";
import { navigation } from "~/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler using useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="flex flex-col items-center w-full min-h-[16vh] mx-auto">
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-4 w-full max-w-6xl mx-auto z-50 shadow-md border border-border rounded-xl backdrop-blur-md transition-all duration-300",
          isScrolled ? "bg-background/70" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between p-3">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src="../images/logo.png"
              alt="Select platform logo"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((nav) => (
                <NavigationMenuItem key={nav.id}>
                  {nav.items.length > 0 ? (
                    <>
                      <NavigationMenuTrigger>{nav.name}</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-5">
                        <ul className="grid gap-3 w-[700px] lg:grid-cols-2">
                          {nav.items.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                              <ListItem
                                key={index}
                                href={item.path}
                                title={item.title}
                                icon={<IconComponent />}
                              >
                                {item.description}
                              </ListItem>
                            );
                          })}
                        </ul>
                        <div className="border-t border-border my-5"></div>
                        <NavigationMenuLink asChild>
                          <ul className="grid">
                            <ListItem
                              href="/features"
                              title="See all features →"
                              icon={undefined}
                            >
                              Explore all features SELECT has to offer.
                            </ListItem>
                            <ListItem
                              href="/demo"
                              title="Book a demo →"
                              icon={undefined}
                            >
                              Talk to a founder at SELECT and experience a live
                              demo.
                            </ListItem>
                          </ul>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavLink to={nav.path}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {nav.name}
                      </NavigationMenuLink>
                    </NavLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="link">
              <NavLink to="/login">Login</NavLink>
            </Button>
            <Button>
              <NavLink to="/demo">Book a Demo</NavLink>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
