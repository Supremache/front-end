import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardCover,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, transform } from "framer-motion";
const reviews = [
  {
    icon: XIcon,
    title: "Remy Sharp",
    description:
      "We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing.",
    avatar:
      "https://th.bing.com/th/id/OIP.2KX4XynQDvcxK8ucLg6bcgHaHa?w=900&h=900&rs=1&pid=ImgDetMain",
  },
  {
    icon: GitHubIcon,
    title: "John Doe",
    description:
      "Amazing platform for learning and networking with fellow developers.",
    avatar:
      "https://i.pinimg.com/originals/7d/ca/be/7dcabe92370fff0c6489aba65af5dab2.jpg",
  },
  {
    icon: LinkedInIcon,
    title: "Jane Smith",
    description:
      "The resources provided have helped me significantly in my coding journey.",
    avatar:
      "https://i.pinimg.com/originals/32/0d/97/320d9780116207ffc6dd566a5da6801a.jpg",
  },
  {
    icon: RedditIcon,
    title: "Mike Taylor",
    description:
      "This platform is a goldmine for coding challenges and interview prep!",
    avatar:
      "https://th.bing.com/th/id/OIP.n45kOTHq7M7RXvyoQU9dhAHaLH?w=1000&h=1500&rs=1&pid=ImgDetMain",
  },
  {
    icon: InstagramIcon,
    title: "Sarah Connor",
    description:
      "I love how engaging and supportive the community is. Definitely a game changer.",
    avatar:
      "https://external-preview.redd.it/g_TulzzxpZ8PH52JbJXYVPxHlZ7NsgfASyUflmr_Yco.jpg?width=640&crop=smart&auto=webp&s=c7e948534f833f5c0dbc644fd04da5febb7dc3ee",
  },
  {
    icon: FacebookIcon,
    title: "Emily Davis",
    description:
      "A must-have resource for anyone serious about advancing their coding skills.",
    avatar:
      "https://th.bing.com/th/id/OIP.VBbrcHqA91yN-sNrhRh9agHaLG?rs=1&pid=ImgDetMain",
  },
  {
    icon: YouTubeIcon,
    title: "Alice Johnson",
    description:
      "The video tutorials are top-notch and have helped me ace my coding interviews.",
    avatar:
      "https://th.bing.com/th/id/OIP.JX-ba4WXnbTYj3ADrfuC8gAAAA?pid=ImgDet&w=177&h=231&c=7&dpr=1.3",
  },
];

const awards = [
  "./assets/img/ph/1.avif",
  "./assets/img/ph/2.avif",
  "./assets/img/ph/3.avif",
  "./assets/img/ph/4.avif",
  "./assets/img/ph/5.avif",
  "./assets/img/ph/6.avif",
  "./assets/img/ph/7.avif",
  "./assets/img/ph/8.avif",
  "./assets/img/ph/9.avif",
];

const g2 = [
  "./assets/img/g2/1.png",
  "./assets/img/g2/2.png",
  "./assets/img/g2/3.png",
  "./assets/img/g2/4.png",
  "./assets/img/g2/5.png",
  "./assets/img/g2/6.png",
  "./assets/img/g2/7.png",
  "./assets/img/g2/8.png",
  "./assets/img/g2/9.png",
  "./assets/img/g2/10.png",
  "./assets/img/g2/11.png",
  "./assets/img/g2/12.png",
  "./assets/img/g2/13.png",
];
export default function Reviews() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const IconComponent = reviews[currentIndex].icon;

  const handleMouseMove = (e, index) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;

    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    const rotateX = ((y - cardHeight / 2) / cardHeight) * 10;
    const rotateY = ((x - cardWidth / 2) / cardWidth) * -10;

    setActiveCard({
      index,
      style: {
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`,
      },
    });
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <Box
      component={"section"}
      sx={{
        display: "grid",
        gap: 3,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 500,
          margin: "0 auto",
          mb: 5,
        }}
      >
        <Typography level="title-md" color="primary">
          Reviews
        </Typography>

        <Typography level="h2" variant="plain" textColor={"text.primary"} textTransform={"capitalize"}>
        People love ISTIDAFA
        </Typography>

        <Typography level="body-md" textColor="text.tertiary">
          Showcase the experiences and feedback from real users.
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        width={"100%"}
        height={{ xs: "120vh", md: "65vh" }}
        sx={{
          perspective: "1000px",
        }}
      >
        <Card
          onMouseMove={(e) => handleMouseMove(e, 0)}
          onMouseLeave={handleMouseLeave}
          variant="plain"
          sx={{
            height: "100%",
            width: { xs: "100%", md: "50%", position: "relative" },
            transform:
              activeCard?.index === 0
                ? activeCard.style.transform
                : "rotateX(0deg) rotateY(0deg)",
            transition: "transform 0.3s ease-out",
            ":hover": {
              ".arrow-icon": {
                opacity: 1,
                visibility: "visible",
                transition:
                  "opacity .5s ease-in-out, visibility .5s ease-in-out",
              },
            },
          }}
        >
          <CardCover>
            <Box
              component={"img"}
              src={"./assets/img/review-bg.jpeg"}
              loading="lazy"
              alt={"review"}
              sx={{ width: "100%", height: "auto" }}
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to right bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <Box
              sx={{
                border: "1px solid rgba(255,255,255, .12)",
              }}
            />
          </CardCover>

          {/* Previous Arrow */}
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
            <ArrowBackIosIcon />
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
              height: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                m: "0 auto",
                gap: 5,
                maxWidth: 450,
              }}
            >
              <IconComponent
                sx={{
                  color: "neutral.50",
                  height: 28,
                  width: 28,
                  filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.3))",
                }}
              />
              <Typography level="title-lg" textColor="neutral.200">
                {reviews[currentIndex].description}
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  size="sm"
                  alt={reviews[currentIndex].title}
                  src={reviews[currentIndex].avatar}
                  sx={{
                    filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.3))",
                  }}
                />
                <Typography
                  textColor="neutral.400"
                  level="body-md"
                  fontWeight={"md"}
                  textTransform={"capitalize"}
                >
                  {reviews[currentIndex].title}
                </Typography>
              </Box>
            </CardContent>
          </motion.div>

          {/* Next Arrow */}
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
            <ArrowForwardIosIcon />
          </IconButton>
        </Card>

        <Stack
          direction={"column"}
          height={"100%"}
          spacing={3}
          sx={{ width: { xs: "100%", md: "50%", perspective: "1000px" } }}
        >
          <Card
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={handleMouseLeave}
            variant="plain"
            sx={{
              height: "50%",
              width: "100%",
              transform:
                activeCard?.index === 1
                  ? activeCard.style.transform
                  : "rotateX(0deg) rotateY(0deg)",
              transition: "transform 0.3s ease-out",
            }}
          >
            <CardCover
              sx={{
                background: `radial-gradient(75% 75% at 50% 100%, ${theme.palette.danger[700]} 0%, rgb(0, 0, 0) 100%)`,
              }}
            >
              <Box sx={{ border: "1px solid rgba(255,255,255, .12)" }} />
            </CardCover>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                overflow: "hidden",
                position: "relative",
                width: "100%",
                mask: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 16.5%, rgb(0, 0, 0) 83.5%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 50,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  display: "flex",
                  gap: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  width: "200%",
                }}
              >
                {awards.concat(awards).map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                      opacity: 0.6,
                      filter: `invert(${
                        theme.palette.mode === "dark" ? "1" : "0"
                      }) grayscale(99) contrast(${
                        theme.palette.mode === "dark" ? "0" : ".5"
                      })`,
                    }}
                  />
                ))}
              </motion.div>
              <Box
                component="img"
                alt="product-hunt"
                src="./assets/img/ph/ph.svg"
                sx={{
                  cursor: "pointer",
                  borderRadius: "md",
                  filter: "brightness(1.2) saturate(1.2)",
                  mask: "radial-gradient(100% 65% at 50% 28.799999999999997%, #000000 0%, rgba(0, 0, 0, .5) 100%) add",
                  backdropFilter: "blur(4px)",
                  scale: 1.05,
                  transition: ".5s ease-out",
                  zIndex: 1,
                  ":hover": {
                    scale: 1,
                  },
                }}
              />
            </CardContent>
          </Card>

          <Card
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseLeave={handleMouseLeave}
            variant="plain"
            sx={{
              height: "50%",
              width: "100%",
              transform:
                activeCard?.index === 2
                  ? activeCard.style.transform
                  : "rotateX(0deg) rotateY(0deg)",
              transition: "transform 0.3s ease-out",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                overflow: "hidden",
                position: "relative",
                width: "100%",
                mask: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 16.5%, rgb(0, 0, 0) 83.5%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 50,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  display: "flex",
                  gap: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  width: "200%",
                }}
              >
                {g2.concat(g2).map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      opacity: 0.3,
                    }}
                  />
                ))}
              </motion.div>
              <Box
                component="img"
                alt="g2"
                src="./assets/img/g2/g2.png"
                sx={{
                  height: "20vh",
                  cursor: "pointer",
                  filter: "brightness(1.2) saturate(1.2)",
                  scale: 1.05,
                  transition: ".5s ease-out",
                  zIndex: 1,
                  ":hover": {
                    scale: 1,
                  },
                }}
              />
            </CardContent>
            <CardCover
              sx={{
                background: `radial-gradient(75% 75% at 50% 100%, ${theme.palette.primary[700]} 0%, rgb(0, 0, 0) 100%)`,
              }}
            >
              <Box sx={{ border: "1px solid rgba(255,255,255, .12)" }} />
            </CardCover>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
}
