import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // Root (home) route
  index("routes/home/home.tsx"),

  // route("features", "routes/features/layout.tsx", [
  //   index("routes/features/features.tsx"),
  //   route("visibility", "routes/features/visibility/visibility.tsx"),
  //   route("savings", "routes/features/savings/savings.tsx"),
  //   route("insights", "routes/features/insights/insights.tsx"),
  //   route("monitors", "routes/features/monitors/monitors.tsx"),
  //   route("usage-groups", "routes/features/usage-groups/usage-groups.tsx"),
  //   route("integrations", "routes/features/integrations/integrations.tsx"),
  //   route("pricing", "routes/features/pricing/pricing.tsx"),
  // ]),
  layout("routes/features/layout.tsx", [
    route("features", "routes/features/features.tsx"),
    ...prefix("features", [
      route("visibility", "routes/features/visibility/visibility.tsx"),
      route("savings", "routes/features/savings/savings.tsx"),
      route("insights", "routes/features/insights/insights.tsx"),
      route("monitors", "routes/features/monitors/monitors.tsx"),
      route("usage-groups", "routes/features/usage-groups/usage-groups.tsx"),
      route("integrations", "routes/features/integrations/integrations.tsx"),
      route("pricing", "routes/features/pricing/pricing.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
