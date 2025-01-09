import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  Typography,
  useTheme,
} from "@mui/joy";
import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const faqData = [
  {
    question: "What types of hosting do you offer?",
    answer:
      "We offer Shared Hosting, VPS Hosting, and Dedicated Hosting to fit the needs of all website sizes and budgets. Learn more about each on our Pricing page.",
  },
  {
    question: "How can I migrate my site to your hosting platform?",
    answer:
      "We provide free site migration for all new customers. Our support team will help ensure a seamless transfer of your data.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all of our hosting plans. If you're not satisfied, you can request a full refund within the first 30 days.",
  },
  {
    question: "What level of customer support is available?",
    answer:
      "Our expert support team is available 24/7 to assist with any issues via live chat, phone, or email.",
  },
  {
    question: "Is SSL included with your hosting plans?",
    answer:
      "Yes, every hosting plan includes free SSL certificates to secure your website and protect your visitors' data.",
  },
  {
    question: "What is your server uptime guarantee?",
    answer:
      "We guarantee 99.9% uptime for all our hosting plans, ensuring your website is always available to your visitors.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Yes, you can easily upgrade your hosting plan at any time as your website grows and requires more resources.",
  },
  {
    question: "How do I manage my hosting account?",
    answer:
      "You can manage your hosting account through our user-friendly control panel, where you can access all the tools you need to manage your website, databases, email, and more.",
  },
  {
    question: "How do you handle website speed and performance?",
    answer: [
      "We use high-performance SSD storage, caching mechanisms, and a global content delivery network (CDN) to ensure fast loading times and optimized performance across all devices.",
    ],
  },
  {
    question: "Can I get a refund if I'm not satisfied with the service?",
    answer: [
      "Yes, we offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service within the first 30 days, you can request a full refund.",
    ],
  },
  {
    question: "How do I manage my hosting account?",
    answer: [
      "You can easily manage your hosting services through our user-friendly control panel, where you can configure settings, manage domains, emails, databases, and monitor website performance.",
    ],
  },
  {
    question: "Do you support custom email accounts with hosting?",
    answer: [
      "Yes, all our hosting plans come with custom business email support. You can create professional email addresses (e.g., yourname@yourdomain.com) directly from your control panel.",
    ],
  },
  {
    question: "What are the payment options available?",
    answer: [
      "We accept all major credit cards, PayPal, and bank transfers. You can choose monthly or yearly billing cycles based on your preference, and discounts are available for longer-term plans.",
    ],
  },
];

export default function Faq() {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  return (
    <Box component={"section"}>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 500,
          margin: "0 auto",
          mb: 5,
        }}
      >
        <Typography level="title-md" color="primary">
          FAQ
        </Typography>

        <Typography
          level="h2"
          variant="plain"
          textColor={"text.primary"}
          textTransform={"capitalize"}
        >
          Any Questions? Look Here
        </Typography>

        <Typography level="body-md" textColor="text.tertiary">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </Typography>
      </Box>

      <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row-reverse" },
            width: "100%",
            height: { xs: "100vh", md: "auto" },
            // bgcolor: "common.black",
            borderRadius: "lg",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "400px" },
              height: "100vh",
              position: { xs: "absolute", md: "relative" },
              bottom: { xs: 0, md: "unset" },
              zIndex: { xs: 1, md: "unset" },
              filter: { xs: "blur(10px)", md: "none" },
            }}
          >
            <Box
              component={"img"}
              alt="faq"
              src="./assets/img/hosting-bg.png"
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maskImage: {
                  xs: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
                  md: theme.palette.mode === 'dark' ? "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%)" : null,
                },
                pointerEvents: "none",
              }}
            />
          </Box>

          <AccordionGroup
            transition="0.2s ease"
            size="md"
            variant="plain"
            sx={{
              width: "100%",
              maxWidth: 750,
              flex: 1,
              p: 3,
              justifyContent: "center",
              alignItems: "flex-start" ,
              textAlign: "left",
              zIndex: { xs: 2, md: "unset" }, 
              position: { xs: "relative", md: "unset" }, 
            }}
          >
            {faqData.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={index === idx}
                onChange={(event, expanded) => {
                  setIndex(expanded ? idx : null);
                }}
              >
                <AccordionSummary color={null}>
                  <Typography level="title-md" textColor="neutral">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography level="title-md" textColor="neutral">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionGroup>
        </Box>

    </Box>
  );
}
