import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Link,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Tooltip,
  Typography,
} from "@mui/joy";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

const footerCategories = [
  {
    id: "category-a",
    title: "Hosting Services",
    links: [
      { label: "Free Tier", path: "/hosting" },
      { label: "Shared Hosting", path: "/hosting" },
      { label: "VPS Hosting", path: "/hosting" },
      { label: "Dedicated Servers", path: "/hosting" },
    ],
  },
  {
    id: "category-b",
    title: "Support",
    links: [
      { label: "Contact Us", path: "/contact" },
      { label: "Knowledge Base", path: "/" },
      { label: "FAQs", path: "/faq" },
      { label: "Server Status", path: "/" },
    ],
  },
  {
    id: "category-c",
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/" },
      { label: "Blog", path: "/blog" },
      { label: "Our Services", path: "/" },
    ],
  },
  {
    id: "category-d",
    title: "Resources",
    links: [
      { label: "Affiliate Program", path: "/" },
      { label: "Tutorials", path: "/" },
      { label: "Site Builder", path: "/" },
      { label: "API Documentation", path: "/" },
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }

    setTimeout(() => {
      setData({ email: "", status: "initial" });
    }, 3000);
  };

  return (
    <Box
      component={"section"}
      sx={{
        flexGrow: 1,
        p: 10,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid container spacing={10}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Typography level="title-md" mb={5}>
            ISTIDAFA Web Hosting.
          </Typography>

          <FormControl
            component={"fieldset"}
            onSubmit={handleSubmit}
            sx={{
              border: "none",
              gap: 2,
            }}
          >
            <FormLabel
              sx={(theme) => ({
                gap: 2,
                "--FormLabel-color": theme.vars.palette.primary.plainColor,
              })}
            >
              <Typography variant="plain" color="neutral" level="body-sm">
                Subscribe to our newsletter and be the first to know about
                exclusive offers, new features, and the latest updates.
              </Typography>
            </FormLabel>
            <Input
              size="sm"
              variant="outlined"
              sx={{ width: "100%" }}
              placeholder="mail@istidafa.com"
              type="email"
              required
              value={data.email}
              onChange={(event) =>
                setData({ email: event.target.value, status: "initial" })
              }
              error={data.status === "failure"}
              startDecorator={<MailIcon />}
              endDecorator={
                <Button
                  variant="solid"
                  color="primary"
                  loading={data.status === "loading"}
                  type="submit"
                >
                  Subscribe
                </Button>
              }
            />
            {data.status === "failure" && (
              <FormHelperText
                sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
              >
                Oops! Something went wrong, please try again later.
              </FormHelperText>
            )}
            {data.status === "sent" && (
              <FormHelperText
                sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
              >
                You are all set!
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid container spacing={4} size={{ xs: 12, md: 7, lg: 8 }}>
          {footerCategories.map((category) => (
            <Grid size={{ xs: 6, lg: 3 }} key={category.id}>
              <Box
                id={category.id}
                sx={{ fontSize: "sm", textTransform: "capitalize" }}
              >
                <Typography level="body-sm" sx={{ color: "text.tertiary" }}>
                  {category.title}
                </Typography>

                {category.links.map((link) => (
                  <ListItem
                    key={link.label}
                    aria-labelledby={category.id}
                    onClick={() => (navigate(link.path))}
                    sx={{
                      cursor: "pointer",
                      transition: "0.3s ease",
                      fontWeight: "md",
                      textDecoration: "none",
                      mt: 2,
                      ":hover": { color: "text.primary" },
                    }}
                  >
                    <ListItemContent>{link.label}</ListItemContent>
                  </ListItem>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* <Grid size={{ xs: 6, lg: 3 }}>
            <Box
              id="category-a"
              sx={{ fontSize: "sm", textTransform: "uppercase" }}
            >
              <Typography
                level="body-sm"
                sx={{ color: "text.tertiary", mb: 3 }}
              >
                Category A
              </Typography>

              <ListItem
                component="a"
                href="#"
                aria-labelledby="category-a"
                sx={{
                  textDecoration: "none",
                  gap: 1,
                }}
              >
                <ListItemContent>Link 1.1</ListItemContent>
              </ListItem>
            </Box>
          </Grid> */}

        <Grid
          container
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "xs" }}
          gap={2}
          size={12}
        >
          <Grid
            container
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "flex-start" }}
            gap={3}
            sx={{
              order: { xs: 2, sm: 1 },
              textAlign: { xs: "center", sm: "left" },
              fontSize: "sm",
            }}
          >
            <Grid container spacing={2}>
              <ListItem
                component={"a"}
                href="/"
                sx={{
                  transition: "0.3s ease",
                  fontWeight: "md",
                  textDecoration: "none",
                  ":hover": { color: "text.primary" },
                }}
              >
                <ListItemContent>Privacy Policy</ListItemContent>
              </ListItem>
              <span>•</span>
              <ListItem
                component={"a"}
                href="/"
                sx={{
                  transition: "0.3s ease",
                  fontWeight: "md",
                  textDecoration: "none",
                  ":hover": { color: "text.primary" },
                }}
              >
                <ListItemContent>Terms of Service</ListItemContent>
              </ListItem>
            </Grid>
            <Grid sx={{ mt: { xs: 1, sm: 0 } }}>
              <ListItem>© {new Date().getFullYear()} ISTIDAFA. All rights reserved.</ListItem>
            </Grid>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                component="a"
                href="/"
                sx={{ alignSelf: "center" }}
              >
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                component="a"
                href="/"
                sx={{ alignSelf: "center" }}
              >
                <XIcon />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                component="a"
                href="/"
                sx={{ alignSelf: "center" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                component="a"
                href="/"
                sx={{ alignSelf: "center" }}
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
