import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { Accordion, AccordionDetails, AccordionSummary, CardCover, SvgIcon } from "@mui/joy";
import { Check, ExpandMore } from "@mui/icons-material";
import { getAllServices } from "./data";

export default function ServicesDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    getAllServices().then((servicesList) => {
      const serviceDetails = servicesList.find((s) => s.slug === slug);
      if (serviceDetails) {
        setService(serviceDetails);
      } else {
        navigate("/404");
      }
    });
  }, [slug, navigate]);

  if (!service) {
    return <div>Loading...</div>;
  }

  const { title, icon, details } = service;
  const { info, subInfo, faq, action } = details[0];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography level="h1" component="h1" sx={{ mb: 4, textAlign: "center" }}>
        {title}
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid xs={12} md={6}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
                <SvgIcon sx={{ fontSize: 48, color: "primary.main" }}>
                  {icon}
                </SvgIcon>
              </Box>
              <Typography level="h4" component="h2" sx={{ mb: 2, textAlign: "center" }}>
                {info[0].title}
              </Typography>
              <Typography level="body-md" sx={{ mb: 2 }}>
                {info[0].subTitle}
              </Typography>
              <List size="sm">
                {info[0].features.map((item, index) => (
                  <ListItem key={`${item.title}-${index}`}>
                    <ListItemDecorator>
                      <SvgIcon>{item.icon}</SvgIcon>
                    </ListItemDecorator>
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent>
              <Typography level="h4" component="h2" sx={{ mb: 2 }}>
                {subInfo[0].title}
              </Typography>
              <List size="sm">
                {subInfo[0].benefits.map((benefit, index) => (
                  <ListItem key={index}>
                    <ListItemDecorator>
                      <Check />
                    </ListItemDecorator>
                    {benefit}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ width: "100%", p: 4, borderRadius: "sm" }}>
        <Typography level="h3" component="h3" color="primary" textAlign={"center"} sx={{ mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={2}>
          {faq.map((item, index) => (
            <Grid xs={12} md={6} key={index}>
              <Typography level="title-lg" component="h4" sx={{ mb: 1 }}>
              {"• "}{item.question}
              </Typography>
              <Typography level="body-md">
              {item.answer}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Card
        variant="plain"
        size={null}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row-reverse" },
          width: "100%",
          bgcolor: "common.black",
          borderRadius: "lg",
          mt: 8,
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
            src="../assets/img/service-bg.jpg"
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
        <Typography level="h4" textColor={"neutral.100"} component="h4" sx={{ mb: 2 }}>
          {action[0].title}
        </Typography>
        <Typography sx={{ mb: 4 }} textColor={"neutral.300"}>
          {action[0].subTitle}
        </Typography>
        <Box>
        <Button variant="outlined" size="sm" sx={{ mr: 2, color:"neutral.500"}}>
          {action[0].actions[0]}
        </Button>
        <Button variant="solid" color="primary" size="sm">
          {action[0].actions[1]}
        </Button>
        </Box>
        </CardContent>
      </Card>
      
    </Box>
  );
}