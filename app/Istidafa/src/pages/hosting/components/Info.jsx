import * as React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionGroup,
  AccordionSummary,
  accordionSummaryClasses,
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { Check, Info as InfoIcon } from "@mui/icons-material";

function Info({ hostType, plan, fee }) {
  return (
    <React.Fragment>
      <Typography level="h4" color="primary" sx={{ mb: 4 }}>
        Order Summary
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography level="title-lg">
          {hostType.charAt(0).toUpperCase() + hostType.slice(1)} Hosting Plan:
        </Typography>
        <Typography level="title-lg" fontWeight="bold">
          {plan.name}
        </Typography>
      </Box>

      <Typography level="title-md">Plan Benefits</Typography>

      <List>
        {plan.features.map((benefit, index) => (
          <ListItem key={index}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="body-sm" textColor="text.tertiary">
                {benefit}
              </Typography>
            </ListItemContent>
          </ListItem>
        ))}
      </List>

      <Accordion
        variant="soft"
        sx={{
          borderRadius: "md",
          [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
            {
              padding: 1,
              borderRadius: "md",
            },
          [`& .${accordionSummaryClasses.button}`]: {
            padding: 1,
            borderRadius: "md",
          },
        }}
      >
        <AccordionSummary
          aria-controls="additional-info-content"
          id="additional-info-header"
          sx={{
            "&:focus": {
              background: "none",
            },
          }}
        >
          <Typography
            startDecorator={<InfoIcon sx={{ color: "text.primary" }} />}
            level="body-sm"
            fontWeight="md"
            sx={{ color: "text.primary" }}
          >
            Additional Informations
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List size={"sm"} sx={{ listStyleType: "disc", pl: 3 }}>
            {[
              "30-day money-back guarantee",
              "24/7 customer support",
              "Free domain for the first year (with annual plans)",
              "Automatic backups included",
            ].map((benefit, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  marginLeft: 2,
                }}
              >
                <ListItemContent>
                  <Typography level="body-sm" textColor="text.tertiary">
                    {benefit}
                  </Typography>
                </ListItemContent>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Stack spacing={2} mt={2}>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography level="body-sm" textColor="text.tertiary">
            Monthly Subscription
          </Typography>
          <Typography level="body-sm" textColor="text.tertiary">
            ${plan.price}
          </Typography>
        </Box>
        {fee > 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography level="body-sm" textColor="text.tertiary">
              Setup Fee
            </Typography>
            <Typography level="body-sm" textColor="text.tertiary">
              ${fee}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography level="title-lg">Total Price</Typography>
          <Typography level="title-lg">
            ${plan.price + fee}
            <Typography textColor="text.tertiary" level="body-sm">
              {" "}
              / month
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </React.Fragment>
  );
}

Info.propTypes = {
  hostType: PropTypes.string.isRequired,
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  fee: PropTypes.number.isRequired,
};
export default Info;
