import FeatureHighlight from "~/components/feature-highlight";
import IntergrationsApps from "~/components/intergrations-apps";
import { TestimonialCard } from "~/components/testimonial-card";

export default function Integrations() {
  return (
    <div className="h-full w-full mx-auto py-16 space-y-32">
      <div className="container space-y-16">
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
        image="integrations-table.png"
        title="Track cost and performance of your data assets"
        description="Understand the costs of data asset (dbt model, dashboard, etc. in your account). Drill in to see which business usage, ownership details and metric trends over time."
      />

      <div className="bg-gradient-to-b from-accent-foreground from-0% to-transparent to-20% py-32">
        <div className="container space-y-10">
          <div className="text-center max-w-md mx-auto">
            <h2 className="h2">Understand total data product cost</h2>
            <p className="body-2 text-muted">
              Ensure positive ROI from your data products by seeing end to end
              costs including ingestion, transformation, storage and compute.
            </p>
          </div>
          <img src="../images/cost-signature-map.png" alt="Saving table" />
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12">
        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="h3">Track pipeline health</h3>
          <p className="body-2 text-muted">
          Easily monitor your dbt project costs and run performance.
          Identify model bottlenecks and remediate performance issues.
          </p>
          <img
            src="../images/integrations-charts.png"
            alt="Saving table"
            className="w-full max-w-[540px] h-auto object-contain"
          />
        </div>

        {/* Divider */}
        <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-border/30 to-transparent mx-auto md:mx-0"></div>

        {/* Right Section */}
        <div className="space-y-4">
          <h3 className="h3">Diagnose dashboard issues</h3>
          <p className="body-2 text-muted">
          Immediately understand bottlenecks in your end user dashboards and identify opportunities to improve user experience.
          </p>
          <img
            src="../images/integrations-looker.png"
            alt="Insights table"
            className="w-full max-w-[540px] h-auto object-contain"
          />
        </div>
      </div>

    </div>
  );
}
