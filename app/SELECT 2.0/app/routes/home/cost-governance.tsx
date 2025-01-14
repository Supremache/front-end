import { Bell, ChartPie, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function CostGovernance() {
  return (
    <section className="h-full w-full mx-auto bg-gradient-to-b from-accent-foreground from-0% to-transparent to-20% py-6 md:py-12 lg:py-20 space-y-20">
      <div className="max-w-lg text-center mx-auto">
        <p className="text-xs text-primary tracking-widest uppercase mb-4">
          don’t be the query police
        </p>

        <h2 className="h2 mb-4">Raise cost awareness and avoid surprises</h2>
        <p className="body-2 text-muted max-w-md mx-auto">
          Decentralize cost management and promote a shared sense of cost
          ownership across the organization.
        </p>
      </div>

      <div className="container grid md:grid-cols-2 gap-8">
        <Card className="border-border/30">
          <CardContent className="relative flex items-center justify-center p-0 rounded-t-3xl overflow-hidden">
            <img
              src="../images/usage-groups.png"
              alt="Usage Groups Image"
              className="h-[360px] w-[600] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background from-0% to-transparent to-50%"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background from-0% to-transparent to-50%"></div>
          </CardContent>
          <CardHeader className="bg-background p-8 rounded-b-3xl">
            <p className="flex items-center gap-2 text-xs text-primary tracking-widest uppercase">
              <ChartPie size={16} />
              Usage Groups
            </p>
            <CardTitle className="h4 text-white">
              Flexibly allocate Snowflake <br /> resources and query workloads.
            </CardTitle>
            <CardDescription className="relative body-2 h-full w-full mx-auto text-muted">
              Allocate costs to teams, projects or departments and
              <br /> set budgets to encourage efficient usage of Snowflake.
              <Button
                size={"icon"}
                variant="outline"
                className="absolute right-0 bottom-0 rounded-full"
              >
                <Link to="/features/usage-groups">
                  <ChevronRight />
                </Link>
              </Button>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border/30">
          <CardContent className="relative flex items-center justify-center p-0 rounded-t-3xl overflow-hidden">
            <img
              src="../images/notifications.png"
              alt="Usage Groups Image"
              className="h-[360px] w-[600] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background from-0% to-transparent to-50%"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background from-0% to-transparent to-50%"></div>
          </CardContent>
          <CardHeader className="bg-background p-8 rounded-b-3xl">
            <p className="flex items-center gap-2 text-xs text-primary tracking-widest uppercase">
              <Bell size={16} />
              Notifications
            </p>
            <CardTitle className="h4 text-white">
              Don’t get caught off guard.
              <br /> Ever.
            </CardTitle>
            <CardDescription className="relative body-2 h-full w-full mx-auto text-muted">
              Automatically get notified of spend anomalies and
              <br /> easily route alerts to your preferred destination.
              <Button
                size={"icon"}
                variant="outline"
                className="absolute right-0 bottom-0 rounded-full"
              >
                <Link to="/features/monitors">
                  <ChevronRight />
                </Link>
              </Button>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
