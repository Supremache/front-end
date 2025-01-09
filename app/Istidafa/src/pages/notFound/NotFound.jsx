import { Box, Button, Card, IconButton, Sheet, Typography } from "@mui/joy";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Card size={"lg"} variant="plain" sx={{alignItems: "center", gap: 2, py: 5}}>
      <Box component={"img"} alt="404" src="./assets/img/404.svg" sx={{width: 650, height: "auto"}} />
      <Typography level="h1">Ooops... Page not found!</Typography>
      <Typography level="body-md" textColor={"text.tertiary"}>
        It seems we cant find the page you are looking for.
      </Typography>
      <Button variant="solid" color="primary" onClick={() => navigate("/")}>
        Go to homepage
      </Button>
    </Card>
  );
}
