import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";

import { CardCover, Chip, SvgIcon } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { getAllServices } from "./data";
import { BuildRounded } from "@mui/icons-material";


function ServiceCard({ icon, title, description, action, slug }) {
  const navigate = useNavigate();

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
        <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
        <SvgIcon sx={{ fontSize: 48, color: "primary.main" }}>{icon}</SvgIcon>
        </Box>
        <Typography
          level="h4"
          component="h3"
          sx={{ mb: 2, textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography level="body-sm" sx={{ mb: 2, textAlign: "center" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto", justifyContent: "center" }}>
        <Button variant="solid" color="primary" size="sm" onClick={() => {navigate(`/services/${slug}`)}}>
          {action}
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Services() {
    const navigate = useNavigate();
    const [allServices, setAllServices] = useState([]);
    
    useEffect(() => {
      getAllServices().then(setAllServices);
    }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3, textAlign: "center" }}>
      <Chip variant="outlined" startDecorator={<BuildRounded />}>
        Comprehensive Solutions for Your Web Hosting Needs
      </Chip>
      <Typography level="h1" component="h1" sx={{ mb: 4, textAlign: "center" }}>
        Istidafa Web Hosting Services
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {allServices.map((service, index) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <ServiceCard {...service} />
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
          <Typography level="h3" component="h3" textColor={"neutral.100"} sx={{ textAlign: "center" }}>
          Not sure which services you need?
        </Typography>
        <Typography textColor={"neutral.300"} sx={{ mb: 2, textAlign: "center" }}>
          Our experts are here to help you choose the right solutions for your
          business.
        </Typography>
        <Button size="sm" variant="solid" color="primary">
          Get a Free Consultation
        </Button>
        </CardContent>
      </Card>


      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography level="h4" component="h4" sx={{ mb: 2 }}>
          Why Choose Istidafa?
        </Typography>
        <Typography sx={{ mb: 4 }}>
          We offer cutting-edge technology, unparalleled support, and a
          commitment to your success.
        </Typography>
        <Button variant="outlined" color="neutral" size="sm" sx={{ mr: 2 }} onClick={() => (navigate("/about"))}>
          Learn More About Us
        </Button>
        <Button variant="solid" color="primary" size="sm">
          Start Your Free Trial
        </Button>
      </Box>
    </Box>
  );
}
