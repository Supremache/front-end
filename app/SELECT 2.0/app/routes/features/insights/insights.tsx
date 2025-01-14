import FeatureHighlight from "~/components/feature-highlight";
import { TestimonialCard } from "~/components/testimonial-card";

export default function Insights() {
  return (
    <div className="h-full w-full mx-auto py-16 space-y-32">
      <FeatureHighlight
        reverse={true}
        image="insights.png"
        eyebrow="Insights"
        title="Ensure effective usage of Snowflake resources"
        description="SELECT's intelligent insights engine continuously analyzes your Snowflake account for optimization opportunities."
        primaryCTA={{
          text: "Book a Demo",
          href: "/demo",
        }}
        secondaryCTA={{
          text: "Start Free Trial",
          href: "/trial",
        }}
      />

      <TestimonialCard
        quote="SELECT has repeatedly surfaced inefficient common query patterns, and has helped us spot 200 TiB of unused tables to drop, resulting in continued significant cost savings. SELECT is always adding new features to help their customers better understand and reduce their spending."
        highlightedText="SELECT is always adding new features to help their customers better understand and reduce their spending."
        author={{
          name: "Sean Abraham",
          title: "Senior Principal Software Engineer",
          avatar: "../images/SeanAbraham.png",
        }}
        companyLogo="../images/videoamp.png"
      />

      <div className="bg-gradient-to-t from-accent-foreground from-0% to-transparent to-20% py-24">
        <FeatureHighlight
          image="insights-saving.png"
          title="Understand your savings potential"
          description="Quickly see your total potential savings along with the estimated effort for each opportunity. Filter by resource, potential savings or level of effort in order to prioritize your team's work."
        />
      </div>

      <div className="-space-y-10">
        <div className="container">
          <img src="../images/insights-map.png" alt="Insights Map" />
        </div>

        <FeatureHighlight
          className="grid w-full max-w-7xl mx-auto lg:gap-12 lg:grid-cols-2 justify-between"
          reverse={true}
          image="insights-job-card.png"
          title="Query Optimization Insights"
          description="Accelerate query workloads, reduce compute costs, andeducate business users on query best practices with SELECT's query-level insights and analysis."
        />
      </div>
    </div>
  );
}
