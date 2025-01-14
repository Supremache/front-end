import { ChevronRight } from "lucide-react";
import React from "react";
import Reviews from "~/components/reviews";
import { Button } from "~/components/ui/button";

export default function Pricing() {
  return (
    <div className="h-full w-full mx-auto py-16" >
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/15 from-0% to-transparent to-70%"/>
      <div className="max-w-2xl text-center mx-auto">
        <p className="text-xs text-primary tracking-widest uppercase mb-4">
          Pricing
        </p>
        <h1 className="h1 mb-4 text-white">
          Simple pricing, for all Snowflake customers
        </h1>
        <p className="body-1 text-muted max-w-2xl mx-auto mb-8">
          We offer flat rate pricing tailored to your Snowflake usage, at 3% of
          your annual Snowflake spend. We always ensure we save you more than we
          charge, guaranteed. Chat with our team to learn more.
        </p>
        <div className="space-x-4">
          <Button size="lg">Book a Demo</Button>
          <Button size="lg" variant="link">
            Start Free Trial
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

    <div className="py-6 md:py-16">
      <Reviews />
      </div>
    </div>
  );
}
