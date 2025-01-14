import FeatureHighlight from "~/components/feature-highlight";

export default function Job() {
  return (
    <section className="relative h-full w-full mx-auto flex flex-col items-center justify-center py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] from-10% to-transparent to-30%"></div>
      <div className="-z-10">
        <img src="../images/job-task.png" alt="Job tasks images" />
      </div>

      <FeatureHighlight
        className="container"
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
    </section>
  );
}
