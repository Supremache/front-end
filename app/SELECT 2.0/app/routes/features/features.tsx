import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import FeatureHighlight from "~/components/feature-highlight";
import IntergrationsApps from "~/components/intergrations-apps";
import { TestimonialCard } from "~/components/testimonial-card";
import { Button } from "~/components/ui/button";

export default function Features() {
  return (
    <div className="h-full w-full mx-auto py-16 space-y-32">
      <div className="max-w-2xl text-center mx-auto">
        <p className="text-xs text-primary tracking-widest uppercase mb-4">
          features
        </p>
        <h1 className="h1 mb-4 text-white">
          Everything you need, out of the box
        </h1>
        <p className="body-2 text-muted max-w-lg mx-auto">
          SELECT is a SaaS application dedicated to helping Snowflake customers
          automate savings, quickly identify and implement optimization
          opportunities and control their usage with ease.
        </p>
      </div>

      <TestimonialCard
        quote="SELECT is a team favorite - its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions."
        highlightedText="The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions."
        author={{
          name: "Dan Corcoran",
          title: "Senior Data Engineering Manager",
          avatar: "../images/DanCorcoran.png",
        }}
        companyLogo="../images/gopuff.png"
      />

      <FeatureHighlight
        image="job-card.png"
        eyebrow="Visibility"
        title="Gain cost visibility into every workload running in your account"
        description="See exactly where every dollar is going with a single pane of glass for all your Snowflake usage"
        secondaryCTA={{
          text: "Learn More",
          href: "#",
          className: "p-0 text-primary hover:text-primary/90",
        }}
      />

      <div className="bg-gradient-to-b from-accent-foreground from-0% to-transparent to-20% space-y-32 py-32">
        <FeatureHighlight
          reverse={true}
          image="insights.png"
          eyebrow="Insights"
          title="Ensure effective usage of Snowflake resources"
          description="SELECT's intelligent insights engine continuously analyzes your Snowflake account for optimization opportunities."
          secondaryCTA={{
            text: "Learn More",
            href: "#",
            className: "p-0 text-primary hover:text-primary/90",
          }}
        />

        <FeatureHighlight
          image="savings.png"
          eyebrow="Savings"
          title="Instantly save 10-20% of your compute spend"
          description="SELECT automatically & continuously adjusts virtual warehouses to optimize utilization efficiency."
          secondaryCTA={{
            text: "Learn More",
            href: "#",
            className: "p-0 text-primary hover:text-primary/90",
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
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12">
        {/* Left Section */}
        <div className="space-y-4">
          <p className="text-xs text-primary tracking-widest uppercase mb-4">
            Usage Groups
          </p>
          <h3 className="h3">
            Flexibly allocate Snowflake resources and query workloads.
          </h3>
          <p className="body-2 text-muted">
            Allocate costs to teams, projects or departments and set budgets to
            encourage efficient usage of Snowflake.
          </p>
          <Button
            variant="link"
            className="p-0 text-primary hover:text-primary/90"
          >
            <Link to={"#"} className="inline-flex items-center gap-2">
              Learn More
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
          <div className="relative">
            <img
              src="../images/usage-groups.png"
              alt="Saving table"
              className="w-full max-w-[540px] h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-radial from-transparent from-0% to-background to-70%" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-border/30 to-transparent mx-auto md:mx-0"></div>

        {/* Right Section */}
        <div className="space-y-4">
          <p className="text-xs text-primary tracking-widest uppercase mb-4">
            Notifications
          </p>
          <h3 className="h3">Don’t get caught off guard. Ever.</h3>
          <p className="body-2 text-muted">
            Automatically get notified of spend anomalies and easily route
            alerts to your preferred destination.
          </p>
          <Button
            variant="link"
            className="p-0 text-primary hover:text-primary/90"
          >
            <Link to={"#"} className="inline-flex items-center gap-2">
              Learn More
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
          <img
            src="../images/notifications.png"
            alt="Insights table"
            className="w-full max-w-[480px] h-auto object-contain"
          />
        </div>
      </div>

      <div className="container space-y-16 pt-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-xs text-primary tracking-widest uppercase mb-4">
            Integrations
          </p>
          <h2 className="h2 mb-4 text-white">
            Out-of-the-box integrations with your whole data stack
          </h2>
          <p className="body-2 text-muted max-w-lg mx-auto">
            SELECT integrates with popular data tools to provide enhanced cost
            attribution and help you understand total asset cost.
          </p>
        </div>

        <IntergrationsApps />
      </div>
    </div>
  );
}
