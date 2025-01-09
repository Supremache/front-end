import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Sheet,
  CardContent,
  Grid,
  Card,
  Button,
  AccordionGroup,
} from "@mui/joy";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";

const faqData = [
  {
    question: "What is ISTIDAFA Web Hosting?",
    answer:
      "ISTIDAFA Web Hosting is a leading web hosting provider offering reliable, fast, and secure hosting solutions for businesses of all sizes. We offer shared hosting, VPS, dedicated servers, and domain registration services.",
  },
  {
    question: "How do I get started with ISTIDAFA Web Hosting?",
    answer:
      "Getting started is easy! Simply visit our website, choose a hosting plan that suits your needs, register a domain (or transfer an existing one), and complete the checkout process. You'll receive an email with login details to start setting up your website.",
  },
  {
    question: "What services does ISTIDAFA Web Hosting offer?",
    answer:
      "We provide a wide range of services, including shared hosting, VPS, dedicated servers, domain registration, WordPress hosting, and SSL certificates. Our plans are designed to meet the needs of individuals, startups, and large businesses.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards, PayPal, and bank transfers for some plans. For more information, contact our sales team.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on most hosting plans. This allows you to try our services risk-free.",
  },
  {
    question: "How do I upgrade or downgrade my hosting plan?",
    answer:
      "You can easily upgrade or downgrade your hosting plan through your account dashboard. Select the plan you want, and the changes will be applied seamlessly.",
  },
  {
    question: "How does your customer support work?",
    answer:
      "Our support team is available 24/7 via live chat, email, and phone. We also provide a comprehensive knowledge base and tutorials to help you resolve issues on your own.",
  },
  {
    question: "Can I host multiple websites on my hosting account?",
    answer:
      "Yes, depending on the hosting plan you choose, you can host multiple websites under one account. Our plans detail the number of domains and websites you can host.",
  },
  {
    question: "What security features are included?",
    answer:
      "All our hosting plans include free SSL certificates, firewall protection, regular backups, and 24/7 security monitoring to keep your website safe from attacks.",
  },
  {
    question: "How do I transfer my website to ISTIDAFA Web Hosting?",
    answer:
      "We offer free website migration services for new customers. Our team will assist you in transferring your existing website from another host to ISTIDAFA without any downtime.",
  },
  {
    question: "Do you offer email hosting?",
    answer:
      "Yes, all hosting plans include email hosting with customizable email addresses for your domain. Our email platform supports both webmail and email clients like Outlook.",
  },
  {
    question: "What kind of uptime guarantee do you provide?",
    answer:
      "We offer a 99.9% uptime guarantee, ensuring that your website is available to visitors almost all the time. In case of any outages, we have systems in place to restore service quickly.",
  },
  {
    question: "Can I get help with SEO for my website?",
    answer:
      "Yes, we offer SEO tools and services to help improve your website’s visibility in search engines. You can access these features from your control panel or request help from our team.",
  },
  {
    question: "What are the benefits of choosing a VPS over shared hosting?",
    answer:
      "A VPS (Virtual Private Server) provides more resources, control, and flexibility than shared hosting. It's ideal for growing websites that require more power and customization options.",
  },
  {
    question: "How do I manage my hosting account?",
    answer:
      "You can manage your hosting account through our easy-to-use control panel, which allows you to handle tasks like setting up email accounts, installing applications, and managing domains.",
  },
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [index, setIndex] = useState(0);

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" },  gap: 4, alignItems: "center" }}>
        <Box sx={{ flex: 1 }}>
          <Typography level="h1" sx={{ mb: 2 }}>
            Frequently Asked Questions
          </Typography>

          <Input
            startDecorator={<SearchRoundedIcon />}
            placeholder="Search question here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 4, maxWidth: "100%" }}
          />

          <AccordionGroup transition="0.2s ease" size={null} variant="plain">
            {filteredFAQs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={index === idx}
                onChange={(event, expanded) => {
                  setIndex(expanded ? idx : null);
                }}
              >
                <AccordionSummary
                  aria-controls={`faq-content-${idx}`}
                  id={`faq-header-${idx}`}
                >
                  <Typography level="title-md">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography level="body-md">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionGroup>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 500,
            height: 500,
          }}
        >
          <Box
            component="img"
            src="./assets/img/faq.svg"
            alt="FAQ Illustration"
            sx={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>

      <Typography level="h2" sx={{ mb: 3, textAlign: "center" }}>
        Still have questions?
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: "center" }}>
              <IconButton
                size="lg"
                variant="solid"
                color="primary"
                sx={{ mb: 2 }}
              >
                <SupportAgentIcon />
              </IconButton>
              <Typography level="h3" sx={{ mb: 1 }}>
                Contact Support
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Our support team is available 24/7 to help you with any issues.
              </Typography>
              <Button variant="outlined" color="primary">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: "center" }}>
              <IconButton
                size="lg"
                variant="solid"
                color="primary"
                sx={{ mb: 2 }}
              >
                <EmailIcon />
              </IconButton>
              <Typography level="h3" sx={{ mb: 1 }}>
                Email Us
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Send us an email and we'll get back to you within 24 hours.
              </Typography>
              <Button variant="outlined" color="primary">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: "center" }}>
              <IconButton
                size="lg"
                variant="solid"
                color="primary"
                sx={{ mb: 2 }}
              >
                <ChatIcon />
              </IconButton>
              <Typography level="h3" sx={{ mb: 1 }}>
                Live Chat
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Chat with our support team in real-time for immediate
                assistance.
              </Typography>
              <Button variant="outlined" color="primary">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
