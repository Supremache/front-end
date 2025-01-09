import { Check, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import PricingCard from "../../../components/PricingCard";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    chipLabel: "SHARED HOSTING",
    title: "Shared Hosting",
    price: "3.99",
    features: [
      "10 GB SSD Storage",
      "Unmetered Bandwidth",
      "Host up to 5 Domains",
      "AI Tools",
      "Free SSL Certificates",
      "24/7 email and live chat support",
      "Full-featured cPanel",
      "Free website builder",
      "1-click WordPress installs",
    ],
    buttonLabel: "Explore more packages",
    path: "/hosting",
  },
  {
    chipLabel: "VPS HOSTING",
    title: "VPS Hosting",
    price: "19.99",
    recommended: true,
    features: [
      "50 GB SSD Storage",
      "Unmetered Bandwidth",
      "4 GB RAM, 2 CPU Cores",
      "AI Tools",
      "Free SSL certificates",
      "24/7 priority support",
      "Advanced cPanel",
      "Full Root Access",
      "DDoS protection",
      "Regular backups",
    ],
    buttonLabel: "Explore more packages",
    path: "/hosting",
  },
  {
    chipLabel: "DEDICATED HOSTING",
    title: "Dedicated Hosting",
    price: "99.99",
    features: [
      "1 TB SSD Storage",
      "Unmetered Bandwidth",
      "16 GB RAM, 8 CPU Cores",
      "AI Tools",
      "Free SSL certificates",
      "24/7 premium support",
      "Advanced cPanel",
      "Full Hardware & OS Control",
      "Full DDoS protection",
      "Automated daily backups",
      "Dedicated resources for optimal uptime and performance",
    ],
    buttonLabel: "Explore more packages",
    path: "/hosting",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Pricing() {
  const theme = useTheme();
const navigate = useNavigate();
  return (
    <Box component={"section"}>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 500,
          margin: "0 auto",
          mb: 5,
        }}
      >
        <Typography level="title-md" color="primary">
          Pricing
        </Typography>

        <Typography
          level="h2"
          variant="plain"
          textColor={"text.primary"}
          textTransform={"capitalize"}
        >
          Flexible Hosting Plans Tailored to Your Needs
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <PricingCard
              chipLabel={plan.chipLabel}
              title={plan.title}
              price={plan.price}
              buttonLabel={plan.buttonLabel}
              path={() => (navigate(plan.path))}
              features={plan.features}
              isRecommended={plan.recommended}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
