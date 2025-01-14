import FeatureHighlight from "~/components/feature-highlight";

export default function Highlights() {
  return (
    <section className="h-full w-full py-6 md:py-16 space-y-16">
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

      <FeatureHighlight
        image="savings.png"
        eyebrow="Savings"
        title="Instantly save 10-20% of your compute spend"
        description="SELECT automatically & continuously adjusts virtual warehouses to optimize utilization efficiency."
        primaryCTA={{
          text: "Book a Demo",
          href: "/demo",
        }}
        secondaryCTA={{
          text: "Start Free Trial",
          href: "/trial",
        }}
      />
    </section>
  );
}
