import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/joy";

const logos = [
  "./assets/img/brands/amazon-web-services.svg",
  "./assets/img/brands/cloudflare.svg",
  "./assets/img/brands/cpanel.svg",
  "./assets/img/brands/digitalocean.svg",
  "./assets/img/brands/google-cloud.svg",
  "./assets/img/brands/let-s-encrypt.svg",
  "./assets/img/brands/linode.svg",
  "./assets/img/brands/mcafee.svg",
  "./assets/img/brands/microsoft-azure.svg",
  "./assets/img/brands/wordpress-blue.svg",
];

const InfiniteScroll = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: '100%',
        height: '100px',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          width: '200px', 
          height: '100%',
          zIndex: 1,
        },
        '&::before': {
          left: 0,
          background: `linear-gradient(to right, ${theme.palette.background.body}, transparent)`,
        },
        '&::after': {
          right: 0,
          background: `linear-gradient(to left, ${theme.palette.background.body}, transparent)`,
        },
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }} 
        transition={{
          duration: 50, 
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{
  
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {/* Render logos twice to ensure seamless scrolling */}
        {logos.concat(logos).map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            style={{ 
              width: '100px',   
                  height: '100px',
                  marginRight: '40px', 
                  objectFit: 'contain',
                  filter: `invert(${theme.palette.mode === 'dark' ? '1' : '0'}) grayscale(99) contrast(${theme.palette.mode === 'dark' ? '0' : '.5'})`,
             }} 
          />
        ))}
      </motion.div>
    </Box>
  );
};
export default InfiniteScroll;
