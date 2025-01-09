import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  Select,
  Option,
  Button,
  Card,
  CardContent,
  Grid,
  Textarea,
  IconButton,
  Tooltip,
  styled,
  RadioGroup,
  FormControl,
  CardActions,
} from "@mui/joy";
import { Search, Info, Domain, AutoAwesome } from "@mui/icons-material";

const StyledCard = styled(({ isSelected, ...other }) => <Card {...other} />)(
  ({ theme, isSelected }) => ({
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(51, 60, 77, 0.6)"
        : theme.palette.neutral.outlinedBorder,
    '&:hover, &[aria-checked="true"]': {
      background:
        "linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)",
      boxShadow: "0px 2px 8px hsla(0, 0%, 0%, 0.1)",
      ...(theme.palette.mode === "dark" && {
        background:
          "linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)",
        boxShadow: "0px 1px 8px hsla(210, 100%, 25%, 0.5)",
      }),
    },
    ...(isSelected && {
      borderColor: theme.vars.palette.primary[500],
    }),
  })
);

function DomainCard({ name, description }) {
  return (
    <Card
      variant="plain"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: ".3s  ease",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
          bgcolor: "transparent",
        },
      }}
    >
      <CardContent>
        <Typography
          level="h2"
          component="h2"
          sx={{ mb: 2, textAlign: "center" }}
        >
          {name}
        </Typography>
        <Typography level="body-sm" sx={{ mb: 2, textAlign: "center" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto", justifyContent: "center" }}>
        <Button variant="solid" color="primary" size="sm">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

export default function AdvancedDomainRegistration() {
  const [registrationType, setRegistrationType] = useState("manual");
  const [domainName, setDomainName] = useState("");
  const [extension, setExtension] = useState(".com");
  const [projectDescription, setProjectDescription] = useState("");

  const handleRegistrationTypeChange = (type) => {
    setRegistrationType(type);
  };

  const handleSearch = () => {
    console.log("Searching for domain:", domainName + extension);
  };

  const handleGenerate = () => {
    console.log("Generating domain based on:", projectDescription);
  };

  const domainOptions = [
    { name: ".com", description: "Commercial websites" },
    { name: ".org", description: "Non-profit organizations" },
    { name: ".net", description: "Network-related sites" },
    { name: ".io", description: "Tech startups and services" },
    { name: ".edu", description: "Educational institutions" },
    { name: ".gov", description: "Government entities" },
    { name: ".co", description: "Company or corporation" },
    { name: ".ai", description: "Artificial Intelligence focus" },
    { name: ".app", description: "Mobile applications" },
    { name: ".dev", description: "Developer-focused sites" },
  ];

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography level="h2" component="h1" sx={{ mb: 4 }}>
        Domain Registration
      </Typography>

      <FormControl>
        <RadioGroup
          name="registrationType"
          value={registrationType}
          onChange={() => handleRegistrationTypeChange("manual")}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            width: "100%",
            justifyContent: "center",
            m: "0 auto",
            maxWidth: 600,
            mb: 6,
          }}
        >
          <StyledCard
            variant="outlined"
            size="sm"
            onClick={() => setRegistrationType("manual")}
            isSelected={registrationType === "manual"}
            aria-checked={registrationType === "manual"}
          >
            <Typography
              level="body-sm"
              textColor={
                registrationType === "manual"
                  ? "text.primary"
                  : "neutral.solidBg"
              }
              startDecorator={
                <Domain
                  sx={{
                    color:
                      registrationType === "manual"
                        ? "primary.500"
                        : "neutral.solidBg",
                  }}
                />
              }
            >
              Register a Domain
            </Typography>
          </StyledCard>

          <StyledCard
            variant="outlined"
            size="sm"
            onClick={() => setRegistrationType("ai")}
            isSelected={registrationType === "ai"}
            aria-checked={registrationType === "ai"}
          >
            <Typography
              level="body-sm"
              textColor={
                registrationType === "ai" ? "text.primary" : "neutral.solidBg"
              }
              startDecorator={
                <AutoAwesome
                  sx={{
                    color:
                      registrationType === "ai"
                        ? "primary.500"
                        : "neutral.solidBg",
                  }}
                />
              }
            >
              Generate Domain using AI
            </Typography>
          </StyledCard>
        </RadioGroup>
      </FormControl>

      {/* <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Switch
            checked={registrationType === "manual"}
            onChange={() => handleRegistrationTypeChange("manual")}
            endDecorator="Register a Domain"
          />
          <Switch
            checked={registrationType === "ai"}
            onChange={() => handleRegistrationTypeChange("ai")}
            endDecorator="Generate Domain using AI"
          />
        </Stack> */}

      {registrationType === "manual" && (
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid xs={12} sm={10}>
            <Input
              size="md"
              variant="outlined"
              startDecorator={<Search color="primary" />}
              placeholder="Enter your domain name"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              sx={{ color: "neutral.solidBg", borderRadius: "md" }}
              endDecorator={
                <Tooltip
                  title="Choose your preferred domain extension"
                  variant="outlined"
                >
                  <Select
                    size={null}
                    variant="outlined"
                    value={extension}
                    onChange={(_, value) => setExtension(value)}
                    sx={{
                      px: 1,
                      left: 8,
                    }}
                  >
                    <Option value=".com">.com</Option>
                    <Option value=".net">.net</Option>
                    <Option value=".org">.org</Option>
                    <Option value=".io">.io</Option>
                  </Select>
                </Tooltip>
              }
            />
          </Grid>
          <Grid xs={12} sm={2}>
            <Button
              variant="solid"
              color="primary"
              size="md"
              fullWidth
              startDecorator={<Search />}
              onClick={handleSearch}
            >
              Search Domain
            </Button>
          </Grid>
        </Grid>
      )}

      {registrationType === "ai" && (
        <Box sx={{ textAlign: "center" }}>
          <Textarea
            placeholder="Write a brief description of your project"
            minRows={3}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            sx={{ mb: 2, color: "neutral.solidBg" }}
            endDecorator={
              <Tooltip title="Describe your project to get AI-generated domain suggestions">
                <IconButton variant="plain" color="neutral" size="sm">
                  <Info />
                </IconButton>
              </Tooltip>
            }
          />
          <Button
            variant="solid"
            color="primary"
            size="sm"
            onClick={handleGenerate}
          >
            Generate Domain
          </Button>
        </Box>
      )}

      <Typography level="h2" sx={{ mt: 10, mb: 2, textAlign: "center" }}>
        Choose From the Most Popular Domains
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {domainOptions.map((domain, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={index}>
            <DomainCard name={domain.name} description={domain.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
