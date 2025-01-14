import FeatureHighlight from "~/components/feature-highlight";
import { TestimonialCard } from "~/components/testimonial-card";

export default function UsageGroups() {
  return (
    <div className="h-full w-full mx-auto py-16 space-y-32">
      <FeatureHighlight
        reverse={true}
        withGradient={true}
        image="usage-groups.png"
        eyebrow="Groups"
        title="Flexibly allocate Snowflake resources and query workloads"
        description="Allocate costs to teams, projects or departments and set budgets to encourage efficient usage of Snowflake."
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
        quote="Engaging with SELECT was nothing short of transformative for our operations. Their fast and seamless integration effortlessly optimized our Snowflake warehouses, and we instantaneously reaped the benefits with a noticeable 20% reduction in our bill. But, it's not just about cost savings. SELECT's exceptional product stands as an invaluable tool for identifying costly query workloads."
        highlightedText="we instantaneously reaped the benefits with a noticeable 20% reduction in our bill."
        author={{
          name: "Aaron Siegel",
          title: "Director of Data",
          avatar: "../images/AaronSiegel.png",
        }}
        companyLogo="../images/chili-piper.png"
      />

      <FeatureHighlight
        image="usage-groups-card.png"
        title="Flexibly allocate Snowflake costs"
        description="Promote a shared sense of cost ownership by assigning costs to different teams, department or projects through Usage Groups. Resources can be flexibly allocated based on object names, tags or query metadata."
      />

      <div className="bg-gradient-to-b from-accent-foreground from-0% to-transparent to-20% pt-32">
        <div className="container grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12">
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="h3">Set budgets and forecast spend</h3>
            <p className="body-2 text-muted">
              Encourage efficient usage of Snowflake by assigning budgets to
              each usage group and forecasting costs.
            </p>
            <img
              src="../images/usage-groups-progress.png"
              alt="Saving table"
              className="w-full max-w-[540px] h-auto object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-border/30 to-transparent mx-auto md:mx-0"></div>

          {/* Right Section */}
          <div className="space-y-4">
            <h3 className="h3">Notify teams of potential cost overruns</h3>
            <p className="body-2 text-muted">
              Automatically alert teams when they are forecasted to exceed their
              monthly, quarterly or annual budget.
            </p>
            <img
              src="../images/usage-groups-chart.png"
              alt="Insights table"
              className="w-full max-w-[540px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <FeatureHighlight
      className="pt-32"
        reverse={true}
        image="usage-groups-code.png"
        title="Programatically manage Usage Groups"
        description="Automatically configure and update your Usage Groups through JSON or YAML."
      />
    </div>
  );
}
