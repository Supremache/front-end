import FeatureHighlight from "~/components/feature-highlight";
import { TestimonialCard } from "~/components/testimonial-card";

export default function Savings() {
  return (
    <div className="h-full w-full mx-auto py-16 space-y-32">
      <FeatureHighlight
        reverse={true}
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

      <TestimonialCard
        quote="We got up and running with SELECT in about 20 minutes and we're able to drop our usage by 15% in just two days, which freed up budget for other workloads. Our team was able to focus on other valuable business initiatives instead of worrying optimizing costs and building out our own monitoring. Awesome product!"
        highlightedText="with SELECT in about 20 minutes and we're able to drop our usage by 15% in just two days"
        author={{
          name: "Marcus Wong",
          title: "Director of Business Intelligence",
          avatar: "../images/MarcusWong.png",
        }}
        companyLogo="../images/clearco.png"
      />

      <FeatureHighlight
        image="save-up.png"
        title="Save up to 20% with 1-click"
        description="Instantly free up credits for more valuable workload through SELECT's fully automated savings feature which continuously adjusts warehouse settings to optimize utilization efficiency."
      />

      <div className="bg-gradient-to-b from-accent-foreground from-0% to-transparent to-20% pt-32">
        <div className="container grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12">
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="h3">Understand savings potential</h3>
            <p className="body-2 text-muted">
              See the potential savings for each virtual warehouse and easily
              toggle the savings feature on or off for complete control.
            </p>
            <img
              src="../images/saving-table.png"
              alt="Saving table"
              className="w-full max-w-[540px] h-auto object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-border/30 to-transparent mx-auto md:mx-0"></div>

          {/* Right Section */}
          <div className="space-y-4">
            <h3 className="h3">Fully auditable and transparent</h3>
            <p className="body-2 text-muted">
            Understand the exact actions taken by the Automated Savings feature and validate the savings being generated.
            </p>
            <img
              src="../images/saving-chart.png"
              alt="Insights table"
              className="w-full max-w-[540px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <TestimonialCard
        quote="SELECT helped us monitor and reduce our overall Snowflake spend by almost 40%. The reporting showed me bottlenecks in minutes that would’ve otherwise taken weeks to dig through metadata and sort out. The Automated Savings savings feature alone is saving us over $10k a month across our accounts, allowing us to bring on new workloads."
        highlightedText="SELECT helped us monitor and reduce our overall Snowflake spend by almost 40%."
        author={{
          name: "Garrett McClintock",
          title: "Analytics Engineering Manager",
          avatar: "../images/GarrettMcClintock.png",
        }}
        companyLogo="../images/heap.png"
      />
    </div>
  );
}
