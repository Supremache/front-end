import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

import AddressForm from "./components/AddressForm";
import InfoMobile from "./components/InfoMobile";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";
import Info from "./components/Info";
import {
  Step,
  stepClasses,
  StepIndicator,
  stepIndicatorClasses,
  Stepper,
} from "@mui/joy";
import { Check, Contacts, Payment, Visibility } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const steps = [
  { label: "Address", icon: <Contacts /> },
  { label: "Payment details", icon: <Payment /> },
  { label: "Review your order", icon: <Visibility /> },
];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, hostType } = location.state || {};
  const { mode } = useColorScheme();
  const [activeStep, setActiveStep] = useState(0);

  if (!plan || !hostType) {
    return (
      <Card size="lg" variant="plain" sx={{alignItems: "center"}}>
        <Typography level="h4">
          No plan selected. Please go back and choose a plan.
        </Typography>
        <Button variant="solid" color="primary" onClick={() => (navigate("/hosting"))}>
          Return page
        </Button>
      </Card>
    );
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review hostType={hostType} plan={plan} fee={10} />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ height: { xs: "100%", sm: "100dvh" } }}
    >
      <Grid
        xs={12}
        sm={5}
        lg={5}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          borderRight: { sm: "none", md: "1px solid" },
          borderColor: {
            sm: "none",
            md: mode === "dark" ? "rgba(51, 60, 77, 0.6)" : "divider",
          },
          bgcolor: { xs: "transparent", sm: "background.surface" },
          borderRadius: "md",
          alignItems: "start",
          p: 6,
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
            maxWidth: 500,
          }}
        >
          <Info
            hostType={hostType}
            plan={plan}
            fee={activeStep >= 2 ? 10 : 0}
          />
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          width: "100%",

          alignItems: "start",
          pt: { xs: 6, sm: 6 },
          px: { xs: 2, sm: 4 },
          gap: { xs: 4, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { sm: "space-between", md: "flex-end" },
            alignItems: "center",
            width: "100%",
            maxWidth: { sm: "100%", md: 600 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexGrow: 1,
            }}
          >
            <Stepper
              orientation="horizontal"
              sx={(theme) => ({
                width: "100%",
                "--Stepper-horizontalGap": "1.5rem",
                "--StepIndicator-size": "2rem",
                "--Step-gap": "1rem",
                "--Step-connectorInset": "0.5rem",
                "--Step-connectorRadius": "1rem",
                "--Step-connectorThickness": "2px",
                "--joy-palette-success-solidBg":
                  "var(--joy-palette-primary-500)",
                [`& .${stepClasses.completed}::after`]: {
                  bgcolor: "primary.500",
                },
                [`& .${stepClasses.active} .${stepIndicatorClasses.root}`]: {
                  borderColor: "primary.500",
                },
                [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]:
                  {
                    color: "primary.500",
                    backgroundColor: "transparent",
                    backgroundImage:
                      "radial-gradient(currentColor 2px, transparent 2px)",
                    backgroundSize: "7px 7px",
                    backgroundPosition: "center left",
                  },
                [`& .${stepClasses.disabled} .${stepIndicatorClasses.root}`]: {
                  border: "2px solid",
                  borderColor: "neutral.outlinedDisabledColor",
                  bgcolor: "background.surface",
                  color: "neutral.outlinedDisabledColor",
                },
              })}
            >
              {steps.map((step, index) => (
                <Step
                  key={index}
                  disabled={index > activeStep}
                  active={index === activeStep}
                  completed={index < activeStep}
                  indicator={
                    <StepIndicator variant="solid" color="primary">
                      {index < activeStep ? <Check /> : step.icon}
                    </StepIndicator>
                  }
                >
                  <Typography
                    level="body-sm"
                    fontWeight={400}
                    textColor={
                      index === activeStep
                        ? "text.primary"
                        : index < activeStep
                        ? "neutral.solidBg"
                        : "text.tertiary"
                    }
                  >
                    {step.label}
                  </Typography>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
        <Card
          variant="outlined"
          sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box component={"div"}>
                <Typography level="body-sm">Selected products</Typography>
                <Typography level="h4">
                  {activeStep >= 2 ? plan.price + 10 : plan.price}
                </Typography>
              </Box>
              <InfoMobile
                InfoComponent={
                  <Info
                    hostType={hostType}
                    plan={plan}
                    fee={activeStep >= 2 ? 10 : 0}
                  />
                }
              />
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
            maxWidth: { sm: "100%", md: 600 },
            maxHeight: "720px",
            gap: { xs: 5, md: "none" },
          }}
        >
          {/* Mobile Stepper */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Stepper
              orientation="horizontal"
              sx={(theme) => ({
                width: "100%",
                "--Stepper-horizontalGap": "1.5rem",
                "--StepIndicator-size": "2rem",
                "--Step-gap": "1rem",
                "--Step-connectorInset": "0.5rem",
                "--Step-connectorRadius": "1rem",
                "--Step-connectorThickness": "2px",
                "--joy-palette-success-solidBg":
                  "var(--joy-palette-primary-500)",
                [`& .${stepClasses.completed}::after`]: {
                  bgcolor: "primary.500",
                },
                [`& .${stepClasses.active} .${stepIndicatorClasses.root}`]: {
                  borderColor: "primary.500",
                },
                [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]:
                  {
                    color: "primary.500",
                    backgroundColor: "transparent",
                    backgroundImage:
                      "radial-gradient(currentColor 2px, transparent 2px)",
                    backgroundSize: "7px 7px",
                    backgroundPosition: "center left",
                  },
                [`& .${stepClasses.disabled} .${stepIndicatorClasses.root}`]: {
                  border: "2px solid",
                  borderColor: "neutral.outlinedDisabledColor",
                  bgcolor: "background.surface",
                  color: "neutral.outlinedDisabledColor",
                },
              })}
            >
              {steps.map((step, index) => (
                <Step
                  key={index}
                  disabled={index > activeStep}
                  active={index === activeStep}
                  completed={index < activeStep}
                  indicator={
                    <StepIndicator variant="solid" color="primary">
                      {index < activeStep ? <Check /> : step.icon}
                    </StepIndicator>
                  }
                >
                  <Typography
                    level="body-sm"
                    fontWeight={400}
                    textColor={
                      index === activeStep
                        ? "text.primary"
                        : index < activeStep
                        ? "neutral.solidBg"
                        : "text.tertiary"
                    }
                  >
                    {step.label}
                  </Typography>
                </Step>
              ))}
            </Stepper>
          </Box>
          {activeStep === steps.length ? (
            <Stack spacing={2} useFlexGap>
              <Typography level="h1">📦</Typography>
              <Typography level="h4">Thank you for your order!</Typography>
              <Typography level="body-md" color="neutral">
                Your order number is
                <strong>&nbsp;#140396</strong>. We have emailed your order
                confirmation and will update you once its actived.
              </Typography>
              <Button
                sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
              >
                Go to my orders
              </Button>
            </Stack>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  alignItems: "end",
                  flexGrow: 1,
                  gap: 1,
                  pb: { xs: 12, sm: 0 },
                  mt: { xs: 2, sm: 0 },
                  mb: "40px",
                  justifyContent:
                    activeStep !== 0 ? "space-between" : "flex-end",
                }}
              >
                {activeStep !== 0 && (
                  <Button
                    startDecorator={<ChevronLeft />}
                    onClick={handleBack}
                    variant="plain"
                    color="neutral"
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  variant="solid"
                  endDecorator={<ChevronRight />}
                  onClick={handleNext}
                  sx={{ width: { xs: "100%", sm: "fit-content" } }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
