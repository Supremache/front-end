import React, { type ComponentPropsWithoutRef } from "react";
import { ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface FeatureHighlightProps extends ComponentPropsWithoutRef<"div"> {
  image?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    size?: VariantProps<typeof buttonVariants>["size"];
    variant?: VariantProps<typeof buttonVariants>["variant"];
    className?: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    size?: VariantProps<typeof buttonVariants>["size"];
    variant?: VariantProps<typeof buttonVariants>["variant"];
    className?: string;
  };
  reverse?: boolean;
  withGradient?: boolean;
}

export default function FeatureHighlight({
  image,
  eyebrow,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  reverse = false,
  withGradient = false,
  className,
  ...props
}: FeatureHighlightProps) {
  return (
    <div
      className={cn(
        "container grid w-full max-w-screen-2xl mx-auto lg:gap-32 lg:grid-cols-2 justify-between",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "hidden relative lg:mt-0 lg:flex -z-10",
          reverse ? "lg:order-2" : "lg:order-1"
        )}
      >
        <img src={`../images/${image}`} alt="Card images" />
        {withGradient && (
          <div className="absolute inset-0 bg-gradient-radial from-transparent from-0% to-background to-70%" />
        )}
      </div>

      <div
        className={cn(
          "mr-auto place-self-center z-10 max-w-md",
          reverse ? "lg:order-1" : "lg:order-2"
        )}
      >
        <p className="text-xs text-primary tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
        <h3 className="h3 mb-4 tracking-tight">{title}</h3>
        <p className="body-2 mb-6 font-light text-muted lg:mb-8">
          {description}
        </p>

        {(primaryCTA || secondaryCTA) && (
          <div className="mt-10 flex items-center gap-4">
            {primaryCTA && (
              <Button
                className={primaryCTA.className}
                size={primaryCTA.size || "lg"} 
                variant={primaryCTA.variant || "default"}
                asChild
              >
                <Link to={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button
                className={secondaryCTA.className}
                size={secondaryCTA.size || "lg"} 
                variant={secondaryCTA.variant || "link"} 
                asChild
              >
                <Link to={secondaryCTA.href}>
                  {secondaryCTA.text}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
