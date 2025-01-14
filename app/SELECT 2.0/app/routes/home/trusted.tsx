import { BarChart2, Clock, Shield, Sparkles } from "lucide-react";

const logos = [
  "../images/vimeo.svg",
  "../images/cargurus.svg",
  "../images/intercom.svg",
  "../images/clickup.svg",
  "../images/substack.svg",
  "../images/super-com.svg",
  "../images/gopuff.svg",
  "../images/checkout-com.svg",
];

const features = [
  {
    icon: BarChart2,
    title: "Maximize ROI",
    description:
      "SELECT automatically optimizes warehouse utilization and helps ensure efficient use of resources through intelligent scaling for Snowflake users.",
  },
  {
    icon: Shield,
    title: "Be in Control",
    description:
      "Avoid surprises with SELECT's automated anomaly detection and alerting. Timely escalate costs to stakeholders and prevent teams from overspend.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "SELECT enables platform teams to focus on business impact instead of optimizing workloads. Classify queries based on intelligent monitoring tools.",
  },
  {
    icon: Sparkles,
    title: "Optimize Performance",
    description:
      "Created by Snowflake performance experts, SELECT provides recommendations to optimize query performance without increasing costs.",
  },
] as const;

export default function Trusted() {
  return (
    <section className="h-full w-full mx-auto bg-gradient-to-t from-transparent via-accent-foreground to-transparent">
      <div className="px-4 py-16 w-full max-w-4xl mx-auto text-center">
        <p className="body-2">Trusted by world class data teams.</p>
        <div className="grid items-center justify-center grid-cols-2 md:grid-cols-4  gap-8 mt-8 p-4 ">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Brands Logo ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="h2 w-full max-w-5xl text-center mx-auto">
          SELECT is a purpose-built tool for helping customers manage and
          optimize Snowflake
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4 mb-2">
                <feature.icon className="h-6 w-6 text-primary" />
                <h5 className="h5">
                  {feature.title}
                </h5>
              </div>
              <div>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
