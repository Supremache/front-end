import {
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Link,
  Stack,
  Textarea,
  Typography,
  useTheme,
} from "@mui/joy";
import React, { useState } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";

export default function Contact() {
  const theme = useTheme();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "initial",
  });

  const [dataSubscribe, setSubscribeData] = useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      setTimeout(() => {
        setData({
          name: "",
          email: "",
          subject: "",
          message: "",
          status: "sent",
        });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }

    setTimeout(() => {
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
        status: "initial",
      });
    }, 3000);
  };

  const handleSubscribeSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      setTimeout(() => {
        setSubscribeData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setSubscribeData((current) => ({ ...current, status: "failure" }));
    }

    setTimeout(() => {
      setSubscribeData({ email: "", status: "initial" }); // Clear the message
    }, 3000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Grid container spacing={4}>
        <Grid
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography level="title-md" color="primary">
            Contact Us
          </Typography>
          <Typography level="h1">How can we help you?</Typography>
          <Typography level="body-md" textColor="text.tertiary">
            Fill in the form or drop your email
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: "lg",
                boxShadow: 1,
              }}
            >
              <PhoneIphoneIcon sx={{ fontSize: 24, color: "primary.main" }} />
            </Card>
            <Typography level="body-sm">+20 10 1111 xxxx</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: "lg",
                boxShadow: 1,
              }}
            >
              <MailIcon sx={{ fontSize: 24, color: "primary.main" }} />
            </Card>
            <Typography level="body-sm">contact@istidafa.com</Typography>
          </Box>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack sx={{ mt: 2 }}>
            <Card
              component="form"
              onSubmit={handleSubmit}
              variant="soft"
              size="lg"
              sx={{
                borderRadius: "lg",
              }}
            >
              <FormControl required>
                <FormLabel>Name</FormLabel>
                <Input
                  size="sm"
                  variant="plain"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </FormControl>

              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  variant="plain"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormControl required>
                <FormLabel>Subject</FormLabel>
                <Input
                  size="sm"
                  variant="plain"
                  type="text"
                  name="subject"
                  placeholder="Enter the subject"
                />
              </FormControl>
              <FormControl required>
                <FormLabel>Message</FormLabel>
                <Textarea
                  size="sm"
                  variant="plain"
                  name="message"
                  placeholder="Enter your message..."
                  minRows={5}
                />
              </FormControl>

              <Button
                variant="solid"
                color="primary"
                loading={data.status === "loading"}
                type="submit"
              >
                Submit
              </Button>

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
            </Card>
          </Stack>
        </Grid>
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
            width: { xs: "100%", md: "700px" },
            height: 200,
            position: "relative",
          }}
        >
          <Box
            component={"img"}
            alt="faq"
            src="./assets/img/subscribe-bg.jpg"
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
          <FormControl
            component={"fieldset"}
            onSubmit={handleSubscribeSubmit}
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
              <Typography
                variant="plain"
                textColor="neutral.100"
                level="title-lg"
              >
                Join the newsletter and read the new posts first.
              </Typography>
            </FormLabel>
            <Input
              size="sm"
              sx={{ width: "100%", bgcolor: theme.palette.mode === "light" ? "neutral.200" : "neutral.800"}}
              placeholder="mail@istidafa.com"
              type="email"
              required
              value={data.email}
              onChange={(event) =>
                setSubscribeData({
                  email: event.target.value,
                  status: "initial",
                })
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
            {dataSubscribe.status === "failure" && (
              <FormHelperText
                sx={(theme) => ({
                  color: theme.vars.palette.danger[400],
                  display: "inline-block",
                })}
              >
                Oops! Something went wrong, please try again later.
              </FormHelperText>
            )}
            {dataSubscribe.status === "sent" && (
              <FormHelperText
                sx={(theme) => ({
                  color: theme.vars.palette.primary[400],
                  display: "inline-block",
                })}
              >
                You are all set!
              </FormHelperText>
            )}
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}
