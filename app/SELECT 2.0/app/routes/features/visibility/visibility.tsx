import FeatureHighlight from "~/components/feature-highlight";
import { TestimonialCard } from "~/components/testimonial-card";

export default function Visibility() {
  return (
    <div className="h-full w-full mx-auto py-16 space-y-32">
      <FeatureHighlight
        reverse={true}
        image="job-card.png"
        eyebrow="Visibility"
        title="Gain unprecedented cost visibility into every workload running in your account"
        description="SELECT provides a single pane of glass for your Snowflake usage, so you can see exactly where each credit is going."
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
        quote="Setup for SELECT was swift and pain-free. Within 30 minutes we had a full view of our Snowflake usage and cost drivers, including a level of depth on our dbt project spend which we've struggled to get via other means. This helps us stay lean on our costs, without holding back innovation within the team."
        highlightedText="Within 30 minutes we had a full view of our Snowflake usage and cost drivers"
        author={{
          name: "Alan Cruickshank",
          title: "Head of Data & Insights",
          avatar: "../images/AlanCruickshank.png",
        }}
        companyLogo="../images/tails-com.png"
      />

      <div className="container space-y-16">
        <div className="text-center">
          <p className="text-xs text-primary tracking-widest uppercase mb-4">
            optimize your costs easily
          </p>

          <h2 className="h2 mb-4">Understand total asset cost</h2>
          <p className="body-2 text-muted max-w-xl mx-auto">
            Ensure positive ROI from your data products by seeing end to end
            costs including ingestion, transformation, storage and compute.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <img
            src="../images/cost-signature-map.png"
            alt="Cost Signature map"
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-accent-foreground from-0% to-transparent to-20% py-32">
        <div className="space-y-64">
          <FeatureHighlight
            image="job-card.png"
            eyebrow=""
            title="Understand your top workloads"
            description="Instantly discover your top cost drivers by drilling into every workload in your account. Monitor performance and costs over time or drill into individual query executions."
          />

          <FeatureHighlight
            reverse={true}
            image="enhanced-visibility.png"
            title="Leverage tags for enhanced visibility"
            description="Improve your monitoring and cost attribution capabilities by leveraging object or query tags throughout SELECT."
          />
        </div>
      </div>
      <FeatureHighlight
        image="tasksdashboard.png"
        title="A dedicated page for every resource"
        description="Easily drill into every resource in your account to quickly understand cost and usage patterns with a few clicks."
      />

      <TestimonialCard
        quote="Before SELECT, we were blind to our Snowflake cost drivers. Minutes after install, we identified a single job that was driving over 20% of our costs. The instant visibility & not having to build & maintain our own monitoring makes a big difference for a lean team like ours."
        highlightedText="Minutes after install, we identified a single job that was driving over 20% of our costs."
        author={{
          name: "Erik Webb",
          title: "Head of Data",
          avatar: "../images/ErikWebb.png",
        }}
        companyLogo="../images/clair.png"
      />
    </div>
  );
}
