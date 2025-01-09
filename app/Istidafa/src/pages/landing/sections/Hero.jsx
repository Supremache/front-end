import { Box, Button, IconButton, useTheme } from "@mui/joy";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import InfiniteScroll from "./InfiniteScroll";
import { useNavigate } from "react-router-dom";

const heroItems = [
  {
    id: 1,
    title: "High Speed",
    description: "Experience lightning-fast speeds with SSD storage.",
  },
  {
    id: 2,
    title: "Top Security",
    description: "Enjoy advanced DDoS protection and SSL certificates.",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Our expert team is available around the clock.",
  },
  {
    id: 4,
    title: "99.9% Uptime",
    description: "Guaranteed uptime ensures your site is always available.",
  },
];

export default function Hero() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add your image URLs here
  ];

  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 3,
          color: "text.primary",
          position: "relative",
          p: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
            minWidth: 300,
          }}
        >
          <Typography
            fontSize={"3rem"}
            fontWeight={"md"}
            lineHeight={1.1}
            sx={{
              position: "relative",
              display: "inline-block",
            }}
          >
            Build, Scale, Succeed—All on Our {""}
            <Box
              component="span"
              sx={{
                position: "relative",
                fontFamily: `"Instrument Serif", "Instrument Serif Placeholder", serif`,
                fontWeight: 400,
                fontStyle: "italic",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-0.125rem",
                  left: "-0.5rem",
                  right: "-0.5rem",
                  height: "0.75rem",
                  zIndex: -1,
                  backgroundImage:
                    "url('./assets/img/unitingline.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transition: "width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)",
                },
              }}
            >
              Hosting Platform
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <AnimatePresence>
            {heroItems.map((item, index) =>
              index === activeIndex ? (
                <motion.div
                  key={item.id}
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <motion.h1
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontWeight: 400 }}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      fontWeight: 400,
                      color: `${theme.palette.text.tertiary}`,
                    }}
                  >
                    {item.description}
                  </motion.h3>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Button variant="solid" onClick={() => (navigate("/signup"))}>
            Get Started
          </Button>
          <Button variant="outlined" color="neutral" onClick={() => (navigate("/hosting"))}>
            Learn More
            <OpenInNewRoundedIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Box>
      </Box>
      <InfiniteScroll />
    </Box>
  );
}
