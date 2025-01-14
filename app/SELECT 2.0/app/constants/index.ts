import {
  Activity,
  BarChart,
  Bell,
  Book,
  Lightbulb,
  Link,
  List,
  PenTool,
  Search,
  User,
} from "lucide-react";
import type { FooterData, NavigationData } from "~/types";

export const navigation: NavigationData = [
  {
    id: 1,
    name: "Features",
    path: "/features",
    items: [
      {
        title: "Complete Cost Visibility",
        description: "Easily explore and monitor Snowflake usage",
        path: "/features/visibility",
        icon: Search,
      },
      {
        title: "Automated Savings",
        description:
          "Instantly save an average of 10-20% of your compute spend",
        path: "/features/savings",
        icon: Activity,
      },
      {
        title: "Rich integrations",
        description: "Understand consumption from connected data tools",
        path: "/features/integrations",
        icon: Link,
      },
      {
        title: "Insights",
        description:
          "Save hours of work with intelligent optimization recommendations",
        path: "/features/insights",
        icon: Lightbulb,
      },
      {
        title: "Comprehensive notifications",
        description:
          "Get notifications directly to Slack and Teams for peace of mind",
        path: "/features/monitors",
        icon: Bell,
      },
      {
        title: "Flexible chargebacks and budgets",
        description:
          "Allocate usage and set budgets for teams or projects by user, role and more",
        path: "/features/usage-groups",
        icon: BarChart,
      },
    ],
  },
  {
    id: 2,
    name: "Pricing",
    path: "#",
    items: [],
  },
  {
    id: 3,
    name: "Resources",
    path: "",
    items: [
      {
        title: "Documentation",
        description: "Learn how to setup and use SELECT",
        path: "#",
        icon: Book,
      },
      {
        title: "Blog",
        description: "Read our latest Snowflake learnings",
        path: "#",
        icon: PenTool,
      },
      {
        title: "Snowflake Developer Guide",
        description: "Learn how to build on Snowflake",
        path: "#",
        icon: PenTool,
      },
      {
        title: "Changelog",
        description: "Stay up to date with our latest features",
        path: "#",
        icon: List,
      },
      {
        title: "dbt-snowflake-monitoring",
        description: "Our open-source dbt package for Snowflake monitoring",
        path: "#",
        icon: Search,
      },
      {
        title: "Customers",
        description: "Hear what our customers have to say about SELECT",
        path: "#",
        icon: User,
      },
    ],
  },
  {
    id: 4,
    name: "About",
    path: "#",
    items: [],
  },
];

export const footerColumns: FooterData = [
  {
    id: 1,
    title: "FEATURES",
    links: [
      { label: "Visibility", path: "/features/visibility" },
      { label: "Insights", path: "/features/insights" },
      { label: "Savings", path: "/features/savings" },
      { label: "Usage Groups", path: "/features/usage-groups" },
      { label: "Notifications", path: "/features/monitors" },
      { label: "Integrations", path: "/features/integrations" },
    ],
  },
  {
    id: 5,
    title: "ABOUT",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Pricing", path: "/pricing" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact Support", path: "/contact" },
      { label: "Status", path: "/status" },
    ],
  },
  {
    id: 4,
    title: "RESOURCES",
    links: [
      { label: "Docs", path: "/docs" },
      { label: "Changelog", path: "/changelog" },
      { label: "Blog", path: "/blog" },
      { label: "dbt snowflake monitoring", path: "/monitoring" },
      { label: "Automated Savings Estimate", path: "/savings-estimate" },
    ],
  },
  {
    id: 3,
    title: "LEGAL",
    links: [
      { label: "Terms", path: "/terms" },
      { label: "Security", path: "/security" },
      { label: "Privacy", path: "/privacy" },
      { label: "Cookies", path: "/cookies" },
      { label: "Data Processing Agreement", path: "/dpa" },
      { label: "CCPA", path: "/ccpa" },
    ],
  },
];
