import { ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Connect() {
  return (
    <section className="relative container h-full w-full overflow-hidden mx-auto">

        <div className="absolute bottom-0">
            <img src="../images/gradient.png" alt="Gradient Effect" />
        </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-4 text-center">
        <h2 className="h2 mb-4">
          Get up and running
          <br />
          in less than 15 minutes
        </h2>
        <p className="body-2 text-muted max-w-sm mx-auto">
          Connect your Snowflake account and instantly understand your savings
          potential.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg">Book a Demo</Button>
          <Button size="lg" variant="link">
            Start Free Trial
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
