import IntergrationsApps from "~/components/intergrations-apps";

export default function Integrations() {
  return (
    <section className="container relative h-full w-full mx-auto py-6 md:py-16 space-y-16">
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
    </section>
  );
}
