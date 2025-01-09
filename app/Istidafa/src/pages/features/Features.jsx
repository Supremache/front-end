import React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Switch from "@mui/joy/Switch";
import { CardCover, Chip, SvgIcon } from "@mui/joy";
import {
  Storage,
  NetworkCheck,
  Mouse,
  Security,
  Support,
  Https,
  Backup,
  TrendingUp,
  Web,
  Email,
  CloudQueue,
  Speed,
  SmartToy,
  Lightbulb,
  MonitorHeart,
  Edit,
  Analytics,
  Dashboard,
  Star,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <Storage />,
    title: "Fast SSD Storage",
    description: "Speed up your site",
  },
  {
    icon: <NetworkCheck />,
    title: "Unlimited Bandwidth",
    description: "Handle high traffic",
  },
  {
    icon: <Mouse />,
    title: "One-Click Install",
    description: "Install WordPress easily",
  },
  {
    icon: <Security />,
    title: "DDoS Protection",
    description: "Protection against attacks",
  },
  {
    icon: <Support />,
    title: "24/7 Customer Support",
    description: "Get help anytime you need it",
  },
  {
    icon: <Https />,
    title: "Free SSL Certificate",
    description: "Secure your website with HTTPS",
  },
  {
    icon: <Backup />,
    title: "Automatic Backups",
    description: "Never lose your data with automated backups",
  },
  {
    icon: <TrendingUp />,
    title: "Scalable Resources",
    description: "Easily upgrade your plan as your business grows",
  },
  {
    icon: <Web />,
    title: "Website Builder",
    description: "Create your website easily with our drag-and-drop builder",
  },
  {
    icon: <Email />,
    title: "Email Hosting",
    description: "Professional email accounts included",
  },
  {
    icon: <CloudQueue />,
    title: "Global CDN",
    description:
      "Deliver your content faster with a global content delivery network",
  },
];

const aiFeatures = [
  {
    icon: <Speed />,
    title: "AI-Powered Website Optimization",
    description: "Automatically optimize your site for speed and SEO.",
  },
  {
    icon: <SmartToy />,
    title: "Smart Chatbot for Customer Support",
    description: "24/7 AI-driven support to answer your questions.",
  },
  {
    icon: <Lightbulb />,
    title: "Personalized Recommendations",
    description: "Get tailored hosting solutions based on your needs.",
  },
  {
    icon: <MonitorHeart />,
    title: "AI-Based Security Monitoring",
    description: "Proactive threat detection to keep your site safe.",
  },
  {
    icon: <Edit />,
    title: "Content Creation Assistant",
    description: "Generate content ideas and drafts with AI help.",
  },
  {
    icon: <Analytics />,
    title: "Automated Performance Analysis",
    description: "Continuous monitoring and insights for your site.",
  },
  {
    icon: <Dashboard />,
    title: "AI-Powered Analytics Dashboard",
    description: "Understand your audience with AI-driven data analysis.",
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          width: 50,
          borderRadius: "lg",
          boxShadow: "sm",
        }}
      >
        <SvgIcon sx={{ fontSize: 32 }}>{icon}</SvgIcon>
      </Card>
      <Box>
        <Typography level="title-md" textColor="text.primary">
          {title}
        </Typography>
        <Typography level="body-md" textColor="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Features() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Chip variant="outlined" startDecorator={<Star />}>
        Explore the powerful features that make our web platform stand out.
      </Chip>
      <Typography level="h1" component="h1" sx={{ mb: 4, textAlign: "center" }}>
        Istidafa Web Hosting Features
      </Typography>

      <Typography level="title-md" color="primary" sx={{ mb: 3 }}>
        Core Features
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>

      <Typography level="title-md" color="primary" sx={{ mb: 3 }}>
        AI-Powered Features
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {aiFeatures.map((feature, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>

      <Card
        variant="plain"
        size={null}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row-reverse" },
          width: "100%",
          bgcolor: "common.black",
          borderRadius: "lg",
        }}
      >
        <CardCover
          sx={{
            width: { xs: "100%", md: "400px" },
            height: "auto",
            position: "relative",
          }}
        >
          <Box
            component={"img"}
            alt="faq"
            src="./assets/img/feature-bg.jpg"
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maskImage: {
                xs: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%)",
                md: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%)",
              },
              pointerEvents: "none",
            }}
          />
        </CardCover>

        <CardCover
          sx={{
            border: "1px solid rgba(255,255,255, .12)",
          }}
        ></CardCover>

        <CardContent
          sx={{
            flex: 1,
            p: 3,
            justifyContent: "center",
            alignItems: {xs: "center", md:"flex-start"},
            textAlign: {xs: "center", md:"left"}
          }}
        >
          <Typography level="h3" component="h3" textColor={"neutral.100"} sx={{ mb: 2 }}>
            Ready to get started?
          </Typography>
          <Typography textColor={"neutral.300"} sx={{ mb: 3 }}>
            Experience the power of Istidafa's advanced hosting solutions and
            AI-driven features.
          </Typography>
          <Button size="sm" variant="solid" color="primary" onClick={() => (navigate("/signup"))}>
            Sign Up Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
