import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-full w-full overflow-hidden px-4 py-16 mx-auto">
      <div className="container mx-auto text-center space-y-6">
        <Link to="/features/insights" className="relative group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm bg-gradient-to-t from-accent-foreground from-50% to-accent to-100% z-10 border-t border-white/25">
          <div className="absolute inset-0 rounded-full -z-10"></div>
          <Sparkles className="h-4 w-4 text-primary" />
          Introducing Insights
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300"/>
        </Link>

        <h1 className="h1 mx-auto max-w-5xl bg-gradient-to-b from-white to-[#999EA9] bg-clip-text text-center text-transparent">
          The Snowflake optimization
          <br />
          and cost management platform
        </h1>

        <p className="body-1 mx-auto max-w-2xl text-muted/80">
          Gain deep visibility into Snowflake usage, optimize performance
          <br />
          and automate savings with the click of a button.
        </p>

        <div className="space-x-4">
          <Button size="lg">Book a Demo</Button>
          <Button size="lg" variant="link">
            Start Free Trial
            <ChevronRight size={16}/>
          </Button>
        </div>
      </div>

      <div className="relative container mt-16">
        {/* Dashboard Interface Image */}
          <img
            src="../images/hero.png"
            alt="Dashboard Interface"
          />
        {/* Gradient Image */}
          <img
            src="../images/gradient.png"
            alt="Gradient effect"
            className="absolute -top-2/4 xl:translate-y-20 -translate-x-1/2 left-1/2 -z-10 pointer-events-none"
          />
      </div>
    </section>
  );
}
