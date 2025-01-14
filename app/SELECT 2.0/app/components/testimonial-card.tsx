import { Card, CardContent, CardFooter } from "./ui/card";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TestimonialCardProps {
  quote: string;
  highlightedText: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  companyLogo: string;
}

export function TestimonialCard({
  quote,
  highlightedText,
  author,
  companyLogo,
}: TestimonialCardProps) {
  return (
    <section className="h-full w-full mx-auto py-6 flex gap-8 justify-center items-center">
      <div className="relative px-8 py-6 max-w-[600px]">
        <svg
          width="54"
          height="48"
          viewBox="0 0 54 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <path
            d="M22.4666 47.7451H0.657104V24.332L11.8826 0.598145H23.2684L12.6844 25.9356H22.4666V47.7451ZM52.2942 47.7451H30.4847V24.332L41.7102 0.598145H53.096L42.512 25.9356H52.2942V47.7451Z"
            fill="white"
            fill-opacity="0.2"
          />
        </svg>

        <p className="text-lg mb-6">
          {quote.split(highlightedText).map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-primary">{highlightedText}</span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      <Card className="border-border/10 shadow-lg min-w-[320px] rounded-lg bg-card-foreground">
        <CardContent className="flex items-center gap-2 p-2.5">
          <Avatar className="rounded-sm h-12 w-12">
            <AvatarImage
              src={author.avatar}
              alt={author.name}
              width={64}
              height={64}
            />
            <AvatarFallback>{author.name}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="body-1 font-semibold">{author.name}</p>
            <p className="body-2 font-light text-muted">{author.title}</p>
          </div>
        </CardContent>
        <CardFooter className="p-2.5">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="h-7 w-auto object-contain"
          />
        </CardFooter>
      </Card>
    </section>
  );
}
