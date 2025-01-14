"use client";

import { useRef } from "react";
import React from "react";
import { AnimatedBeam } from "~/components/ui/animated-beam";
import { Card } from "~/components/ui/card";
import { SignalAnimation } from "~/components/ui/signal-animation";
import { cn } from "~/lib/utils";

interface AppIconProps {
  image: string;
  dark?: boolean;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const AppIcon = React.forwardRef<HTMLDivElement, AppIconProps>(
  ({ image, dark = false, className = "" }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "relative flex items-center justify-center w-16 h-16 rounded-xl border border-border/50 shadow-lg z-10",
          dark
            ? "bg-[#0E0F14]"
            : "bg-[radial-gradient(circle,#2A2A4B,#17172A)]",
          className
        )}
      >
        <img src={`../images/app-icons/${image}.svg`} alt={`${image} icon`} />
      </Card>
    );
  }
);

AppIcon.displayName = "AppIcon";

export default function IntergrationsApps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const iconRefs = Array.from({ length: 5 }, () =>
    useRef<HTMLDivElement>(null)
  );

  return (
    <div
      className="relative flex items-center justify-between gap-8"
      ref={containerRef}
    >
      <div className="p-8">
        <div dir="rtl" className="grid grid-cols-5 gap-4 max-w-[400px]">
          {/* First row */}
          <AppIcon image="looker-studio" />
          <AppIcon image="fivetran" />
          <AppIcon image="dbt" />
          <AppIcon image="power" dark={true} ref={iconRefs[0]} />

          {/* Second row */}
          <AppIcon
            image="snowflake"
            className="col-span-2 row-span-2 w-auto h-auto"
            ref={iconRefs[1]}
          />
          <AppIcon image="periscope" />
          <AppIcon image="tableau-software" dark={true} ref={iconRefs[2]} />
          <AppIcon image="sigmacomputing" dark={true} />

          {/* Third row */}
          <AppIcon image="coalesce" />
          <AppIcon image="metabase" dark={true} ref={iconRefs[3]} />
          <AppIcon image="status" dark={true} />

          {/* Fourth row */}
          <AppIcon image="m" />
          <AppIcon image="hex" ref={iconRefs[4]} />
          <AppIcon image="aplus-framework" dark={true} />
          <AppIcon image="thoughtspot" dark={true} />
        </div>
      </div>

      <div className="relative flex items-center justify-center" ref={logoRef}>
        <SignalAnimation color="#38BDF9" size="md" count={3}>
          <img
            src="../images/logo-favicon.svg"
            alt="SELECT Logo"
            className="w-12 h-12 object-contain"
          />
        </SignalAnimation>
      </div>

      <div className="p-6 rounded-lg max-w-md z-10" ref={summaryRef}>
        <img src="../images/integrations.png" alt="Integrations summary"/>
      </div>

      {/* Beams from logo to icons */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logoRef}
        toRef={iconRefs[0]}
        pathColor="#1F252D"
        gradientStartColor="#38BDF8"
        gradientStopColor="#0ca6e9"
        pathWidth={2}
        pathOpacity={0.2}
        curvature={150}
        startYOffset={-15}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logoRef}
        toRef={iconRefs[1]}
        pathColor="#1F252D"
        gradientStartColor="#38BDF8"
        gradientStopColor="#0ca6e9"
        pathWidth={2}
        pathOpacity={0.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logoRef}
        toRef={iconRefs[2]}
        pathColor="#1F252D"
        gradientStartColor="#38BDF8"
        gradientStopColor="#0ca6e9"
        pathWidth={2}
        pathOpacity={0.2}
        curvature={100}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logoRef}
        toRef={iconRefs[3]}
        pathColor="#1F252D"
        gradientStartColor="#38BDF8"
        gradientStopColor="#0ca6e9"
        pathWidth={2}
        pathOpacity={0.2}
        curvature={-100}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logoRef}
        toRef={iconRefs[4]}
        pathColor="#1F252D"
        gradientStartColor="#74BDED"
        gradientStopColor="#0ca6e9"
        pathWidth={2}
        pathOpacity={0.2}
        curvature={-150}
      />

      {/* Beam from logo to summary */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logoRef}
        toRef={summaryRef}
        pathColor="#1F252D"
        gradientStartColor="#38BDF8"
        gradientStopColor="#0ca6e9"
        pathWidth={2}
        pathOpacity={0.3}
      />
    </div>
  );
}
