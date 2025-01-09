import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  AspectRatio,
  Button,
  List,
  ListItem,
  ListItemDecorator,
  Divider,
  useTheme,
  Chip,
  Stack,
  IconButton,
  Tooltip,
  CardCover,
} from "@mui/joy";
import {
  Business,
  People,
  Speed,
  Security,
  InfoRounded,
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
  ArrowBackIos,
  ArrowForwardIos,
  CheckCircleOutline,
  NorthEast,
  SpeedRounded,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ahmed Al-Farsi",
    role: "Founder & CEO",
    image:
      "https://th.bing.com/th/id/OIP.Zoeau4lYP7AoWqCgQ7v8dQHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
    comment:
      "Ahmed is the visionary behind Istidafa, driving the company's growth and strategic direction with his leadership and passion for innovation.",
  },
  {
    name: "Fatima Al-Balushi",
    role: "CTO",
    image:
      "https://th.bing.com/th/id/OIP.Zoeau4lYP7AoWqCgQ7v8dQHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
    comment:
      "Fatima leads the tech team, ensuring that our infrastructure remains cutting-edge and scalable, keeping us ahead in the hosting industry.",
  },
  {
    name: "Omar Al-Habsi",
    role: "Head of Customer Support",
    image:
      "https://th.bing.com/th/id/OIP.Zoeau4lYP7AoWqCgQ7v8dQHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
    comment:
      "Omar is dedicated to delivering exceptional customer support, managing a team that works around the clock to ensure client satisfaction.",
  },
  {
    name: "Maryam Al-Zadjali",
    role: "Marketing Director",
    image:
      "https://th.bing.com/th/id/OIP.Zoeau4lYP7AoWqCgQ7v8dQHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
    comment:
      "Maryam oversees all marketing initiatives, crafting strategies that enhance Istidafa's brand presence and attract new customers.",
  },
];

const milestones = [
  { year: 2010, event: "Istidafa Web Hosting founded" },
  { year: 2013, event: "Launched VPS hosting services" },
  { year: 2015, event: "Expanded to 5 data centers globally" },
  { year: 2018, event: "Introduced managed WordPress hosting" },
  { year: 2020, event: "Achieved 99.99% uptime across all services" },
  { year: 2022, event: "Launched eco-friendly hosting options" },
];

export default function About() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <Stack alignItems={"center"}>
        <Chip size="md" variant="outlined" startDecorator={<InfoRounded />}>
          About us
        </Chip>
        <Typography level="h1" sx={{ mb: 2, textAlign: "center" }}>
          ISTIDAFA Web Hosting
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        <Grid xs={12} md={6}>
          <Typography level="h2" sx={{ mb: 2 }}>
            Our Story
          </Typography>
          <Typography level="body-lg" sx={{ mb: 2 }}>
            Founded in 2010, Istidafa Web Hosting began with a simple mission:
            to provide reliable, fast, and secure hosting solutions for
            businesses of all sizes. Our name, "Istidafa," means "hosting" in
            Arabic, reflecting our roots and our global ambitions.
          </Typography>
          <Typography level="body-md" sx={{ mb: 2 }}>
            Over the years, we've grown from a small local provider to a global
            hosting company, serving clients across the Middle East, Europe, and
            North America. Our success is built on our commitment to
            cutting-edge technology, exceptional customer service, and our deep
            understanding of the diverse needs of modern businesses.
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <AspectRatio ratio="16/9" sx={{ mb: 2 }}>
            <img
              src="./assets/img/about-img.jpg?height=360&width=640"
              alt="Istidafa Web Hosting Headquarters"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </AspectRatio>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {[
          {
            icon: <Business />,
            title: "Reliability",
            description: "We guarantee 99.9% uptime for all our services.",
          },
          {
            icon: <People />,
            title: "Customer-Centric",
            description: "Our clients' success is our top priority.",
          },
          {
            icon: <SpeedRounded/>,
            title: "Innovation",
            description:
              "We constantly evolve to stay ahead in the hosting industry.",
          },
          {
            icon: <Security />,
            title: "Security",
            description:
              "We implement the latest security measures to protect our clients' data.",
          },
        ].map((value, index) => (
          <Grid xs={12} sm={6} md={3} key={index}>
            <Card variant="plain" sx={{ height: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                {React.cloneElement(value.icon, {
                  sx: {
                    fontSize: 30,
                    mb: 2,
                    color: "primary.500",
                    alignSelf: "center",
                  },
                })}
                <Typography level="title-lg" sx={{ mb: 1 }}>
                  {value.title}
                </Typography>
                <Typography level="body-md" textColor={"text.tertiary"}>
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography level="h2" sx={{ mb: 3, textAlign: "center" }}>
        Our Team
      </Typography>
      <Box
        sx={{
          height: "40vh",
          width: "100%",
          position: "relative",

          ":hover": {
            ".arrow-icon": {
              opacity: 1,
              visibility: "visible",
              transition: "opacity .5s ease-in-out, visibility .5s ease-in-out",
            },
          },
        }}
      >
        <IconButton
          onClick={prevSlide}
          className="arrow-icon"
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            zIndex: 10,
            opacity: 0, // Initially hidden
            visibility: "hidden", // Initially not visible
            ":hover": { background: "transparent" },
            transition: "opacity .5s ease-in-out, visibility .5s ease-in-out",
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <motion.div
          key={currentIndex}
          initial={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "100%",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <Stack spacing={2} textAlign={"center"} alignItems={"center"}>
            <Box
              component={"img"}
              alt={teamMembers[currentIndex].name}
              src={teamMembers[currentIndex].image}
              sx={{
                width: 100,
                height: 100,
                objectFit: "cover",
                borderRadius: "63% 37% 30% 70%/50% 45% 55% 50%",
                border: "2px solid rgba(255,255,255, .12)",
              }}
            />

            <Typography level="title-lg">
              {teamMembers[currentIndex].name}
            </Typography>
            <Chip color="primary" variant="outlined">
              {teamMembers[currentIndex].role}
            </Chip>

            <Typography level="body-md" textColor={"text.tertiary"}>
              {teamMembers[currentIndex].comment}
            </Typography>

            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Tooltip title="Facebook" variant="outlined">
                <IconButton
                  variant="outlined"
                  size="sm"
                  aria-label="Facebook profile"
                  href={`https://www.facebook.com`}
                  target="_blank"
                  component="a"
                >
                  <Facebook />
                </IconButton>
              </Tooltip>

              <Tooltip title="Twitter" variant="outlined">
                <IconButton
                  variant="outlined"
                  size="sm"
                  aria-label="Twitter profile"
                  href={`https://x.com/`}
                  target="_blank"
                  component="a"
                >
                  <Twitter />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn" variant="outlined">
                <IconButton
                  variant="outlined"
                  size="sm"
                  aria-label="LinkedIn profile"
                  href={`https://www.linkedin.com/`}
                  target="_blank"
                  component="a"
                >
                  <LinkedIn />
                </IconButton>
              </Tooltip>

              <Tooltip title="WhatsApp" variant="outlined">
                <IconButton
                  variant="outlined"
                  size="sm"
                  aria-label="WhatsApp number"
                  href={`https://wa.me/`}
                  target="_blank"
                  component="a"
                >
                  <WhatsApp />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </motion.div>
        <IconButton
          onClick={nextSlide}
          className="arrow-icon"
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            zIndex: 10,
            opacity: 0, // Initially hidden
            visibility: "hidden", // Initially not visible
            ":hover": { background: "transparent" },
            transition: "opacity .5s ease-in-out, visibility .5s ease-in-out",
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Typography level="h2" sx={{ mb: 3, textAlign: "center" }}>
        Our Milestones
      </Typography>
      <List>
        {milestones.map((milestone, index) => (
          <ListItem key={index}>
            <ListItemDecorator>
              <CheckCircleOutline color="primary" />
            </ListItemDecorator>
            <Typography level="body-lg">
              <strong>{milestone.year}:</strong> {milestone.event}
            </Typography>
          </ListItem>
        ))}
      </List>

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
            src="./assets/img/about-carrer-bg.jpg"
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
          <Typography level="h2" textColor={"neutral.100"} sx={{ mb: 2 }}>
            Join Our Team
          </Typography>
          <Typography level="body-lg" textColor={"neutral.300"} sx={{ mb: 3 }}>
            We're always looking for talented individuals to join our growing
            team. If you're passionate about web hosting and technology, we'd
            love to hear from you!
          </Typography>
          <Button size="sm" variant="solid" endDecorator={<NorthEast />}>
            View Career Opportunities
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
