import { Check, KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Typography,
} from "@mui/joy";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PricingCard({
  chipLabel,
  title,
  price,
  buttonLabel,
  path,
  features,
  isRecommended = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      style={{
          width: '100%',
      }}
    >
      <Card
        size="lg"
        variant={isRecommended ? "solid" : "plain"}
        color={isRecommended ? "primary" : "neutral"}
        sx={{ boxShadow: isRecommended ? "md" : "none", height: "100%", width: "100%" }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Chip size="sm" variant="outlined" color="neutral">
            {chipLabel}
          </Chip>
          {isRecommended && (
            <Typography
              level="title-sm"
              variant="plain"
              startDecorator={<AutoAwesomeOutlinedIcon />}
              sx={{ color: "neutral.100" }}
            >
              Recommended
            </Typography>
          )}
        </Stack>
        <Typography
          level="h2"
          textAlign={"left"}
          textColor={isRecommended ? "neutral.50" : "inherit"}
        >
          {title}
        </Typography>
        <Divider inset="none"  />
        <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
          {features.map((feature, idx) => (
            <ListItem key={idx}>
              <ListItemDecorator>
                <Check sx={isRecommended ? { color: "neutral.200" } : {}} />
              </ListItemDecorator>
              <Typography textColor={isRecommended ? "neutral.200" : "inherit"}>
                {feature}
              </Typography>
            </ListItem>
          ))}
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography
            level="title-lg"
            sx={{
              mr: "auto",
              color: isRecommended ? "neutral.100" : "inherit",
            }}
          >
            ${price}
            <Typography
              textColor={isRecommended ? "neutral.200" : "text.tertiary"}
              sx={{ fontSize: "sm" }}
            >
              / month
            </Typography>
          </Typography>
          <Button
            size="sm"
            variant="soft"
            color={"neutral"}
            sx={{ color: isRecommended ? "text.primary" : "neutral" }}
            endDecorator={<KeyboardArrowRight />}
            onClick={path}
          >
            {buttonLabel}
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
