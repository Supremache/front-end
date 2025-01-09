import {
  Cloud,
  SpeedRounded,
  NetworkCheckRounded,
  Speed,
  NavigateNextRounded,
  Check,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionGroup,
  AccordionSummary,
  accordionSummaryClasses,
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  Chip,
  CircularProgress,
  Grid,
  LinearProgress,
  Sheet,
  Stack,
  styled,
  SvgIcon,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/joy";
import PricingCard from "../../components/PricingCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faqData, hostingServices } from "./data";
import { useCountUp } from 'use-count-up';

const features = [
  {
    title: "Fast SSD Storage",
    description: "Speed up your site",
    icon: <SpeedRounded />,
  },
  {
    title: "Unlimited Bandwidth",
    description: "Handle high traffic",
    icon: <NetworkCheckRounded />,
  },
  {
    title: "AI-Powered Website Optimization",
    description: "Automatically optimize your site for speed and SEO.",
    icon: <Speed />,
  },
];

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  textDecoration: "none",
  "&:hover": { cursor: "pointer" },
  "& .arrow": {
    visibility: "hidden",
    position: "absolute",
    right: -20,
    top: "60%",

    transform: "translateY(-50%)",
  },
  "&:hover .arrow": {
    visibility: "visible",
    opacity: 0.7,
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "3px",
    borderRadius: "8px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "1px",
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary[500],
    opacity: 0.3,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

const metrics = [
  { label: "Uptime", value: 99.99, unit: "%" },
  { label: "Average Response Time", value: 200, unit: "ms" },
  { label: "Customer Satisfaction", value: 98, unit: "%" },
];

export default function Hosting() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [hostingValue, setHostingValue] = useState("shared");
  const [index, setIndex] = useState(0);

  const { value: value1 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 100,
  });

  const handleChoosePlan = (host, plan) => {
    navigate(`/hosting/${host.value}`, {
      state: { plan, hostType: host.value },
    });
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Chip variant="outlined" startDecorator={<Cloud />}>
        Web hosting for every need
      </Chip>

      <Typography variant="plain" level="h2" textColor="text.primary">
        Your path to the perfect hosting plan starts here
      </Typography>
      <Sheet
        variant="soft"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          p: 2,
          mt: 5,
          justifyContent: {
            xs: "space-evenly",
            sm: "space-between",
            md: "space-evenly",
          },
          borderRadius: "md",
          alignItems: "center",
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box>
              <Typography
                level="title-md"
                textColor="text.primary"
                startDecorator={
                  <Check
                    sx={{ fontSize: "md", color: theme.palette.primary[400] }}
                  />
                }
              >
                {feature.title}
              </Typography>
              <Typography level="body-md" textColor="text.tertiary">
                {feature.description}
              </Typography>
            </Box>
          </Box>
        ))}
        <TitleTypography
          level="body-md"
          color="primary"
          onClick={() => navigate("/features")}
          gutterBottom
        >
          Explore more benefits
          <NavigateNextRounded className="arrow" sx={{ fontSize: "1rem" }} />
        </TitleTypography>
      </Sheet>

      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography level="h2" textColor="text.primary">
          Choose your plan
        </Typography>

        <ToggleButtonGroup
          size="sm"
          variant={"outlined"}
          value={hostingValue}
          onChange={(event, newValue) => {
            setHostingValue(newValue);
          }}
          sx={{ m: "0 auto" }}
        >
          <Button value="shared">Shared Hosting</Button>
          <Button value="vps">VPS Hosting</Button>
          <Button value="dedicated">Dedicated Hosting</Button>
          <Button value="cloud">Cloud Hosting</Button>
          <Button value="wordpress">WordPress Hosting</Button>
          <Button value="reseller">Reseller Hosting</Button>
        </ToggleButtonGroup>

        {hostingServices
          .filter((host) => host.value === hostingValue)
          .map((host) => (
            <Grid
              container
              spacing={4}
              key={host.value}
              justifyContent="center"
            >
              {host.priceStructure.map((plan, index) => (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <PricingCard
                    key={index}
                    chipLabel={host.label}
                    title={plan.name}
                    price={plan.price}
                    buttonLabel="Choose Plan"
                    path={() => handleChoosePlan(host, plan)}
                    features={plan.features}
                    isRecommended={plan.recommended}
                  />
                </Grid>
              ))}
            </Grid>
          ))}
      </Box>

      <Box sx={{ py: 8 }}>
        <Typography level="h2" sx={{ mb: 5, textAlign: "center" }}>
          Our Performance Metrics
        </Typography>
        <Grid container spacing={4}>
          {metrics.map((metric, index) => (
            <Grid key={index} xs={12} md={4}>
              <Card size="lg" variant="plain">
                <CardCover
                  sx={{
                    background: `radial-gradient(93% 81% at 50% 100%, ${theme.palette.primary[500]} 0%, rgb(0, 0, 0) 100%)`
                  }}
                >
                  <Box sx={{ border: "1px solid rgba(255,255,255, .12)" }} />
                </CardCover>
                <CardContent sx={{alignItems: "center" }}>
                  <CircularProgress
                    determinate
                    value={Number(value1)}
                    sx={{
                      "--CircularProgress-size": "180px",
                      boxShadow: "md",
                    }}
                  >
                    <Typography level="h2" textColor="neutral.100">
                      {metric.value}
                      {metric.unit}
                    </Typography>
                  </CircularProgress>
                  <Typography level="h3" textColor="neutral.100" sx={{ mt: 2 }}>
                    {metric.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
          gap: 3,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography level="h2" textColor="text.primary">
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row-reverse" },
            width: "100%",
            height: { xs: "100vh", md: "auto" },
            borderRadius: "lg",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "400px" },
              height: "100vh",
              position: { xs: "absolute", md: "relative" },
              bottom: { xs: 0, md: "unset" },
              zIndex: { xs: 1, md: "unset" },
              filter: { xs: "blur(10px)", md: "none" },
            }}
          >
            <Box
              component={"img"}
              alt="faq"
              src="./assets/img/hosting-bg.png"
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maskImage: {
                  xs: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
                  md: theme.palette.mode === 'dark' ? "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%)" : null,
                },
                pointerEvents: "none",
              }}
            />
          </Box>

          <AccordionGroup
            transition="0.2s ease"
            size="md"
            variant="plain"
            sx={{
              width: "100%",
              maxWidth: 750,
              flex: 1,
              p: 3,
              justifyContent: "center",
              alignItems: "flex-start" ,
              textAlign: "left",
              zIndex: { xs: 2, md: "unset" }, 
              position: { xs: "relative", md: "unset" }, 
            }}
          >
            {faqData.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={index === idx}
                onChange={(event, expanded) => {
                  setIndex(expanded ? idx : null);
                }}
              >
                <AccordionSummary color={null}>
                  <Typography level="title-md" textColor="neutral">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography level="title-md" textColor="neutral">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionGroup>
        </Box>
      </Box>
    </Box>
  );
}


