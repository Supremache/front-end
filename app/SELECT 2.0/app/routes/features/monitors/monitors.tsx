import FeatureHighlight from "~/components/feature-highlight";
import { TestimonialCard } from "~/components/testimonial-card";

export default function Monitors() {
  return (
    <div className="h-full w-full mx-auto py-16 space-y-32">
      <FeatureHighlight
        reverse={true}
        image="notifications.png"
        eyebrow="MONITORS"
        title="Don’t get caught off guard. Ever."
        description="Automatically get notified of spend anomalies and easily route alerts to your preferred destination."
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
        quote="SELECT provides our team with complete visibility into all aspects of our Snowflake bill and usage. Our team regularly uses SELECT to monitor costs and get alerted on key changes. The dbt & Looker integrations are also super helpful for identifying performance bottlenecks."
        highlightedText="Our team regularly uses SELECT to monitor costs and get alerted on key changes."
        author={{
          name: "Jonathan Talmi",
          title: "Senior Data Engineering Manager",
          avatar: "../images/JonathanTalmi.png",
        }}
        companyLogo="../images/super.png"
      />

      <FeatureHighlight
        image="monitor-cards.png"
        title="Get alerted on anything"
        description="Avoid surprises from cost spikes, data quality issues,or degraded performance. Get automatically notified about anomalies from any metric or resource in your data warehouse."
      />

      <div className="bg-gradient-to-b from-accent-foreground from-0% to-transparent to-20% space-y-32 pt-32">
        <FeatureHighlight
          reverse={true}
          image="monitor-char-table.png"
          title="Receive actionable alerts"
          description="Get notified in any destination and immediately understand why an alert was triggered with full context."
        />

        <FeatureHighlight
          image="monitor-model.png"
          title="Quickly triage and diagnose root cause"
          description="Discuss and triage issues directly from your team workspaces with two clicks."
        />
      </div>
    </div>
  );
}
