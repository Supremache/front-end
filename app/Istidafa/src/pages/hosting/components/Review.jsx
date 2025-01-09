import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemContent,
  Stack,
  Typography,
} from "@mui/joy";
import * as React from "react";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type:", detail: "Visa" },
  { name: "Card holder:", detail: "Mr. John Smith" },
  { name: "Card number:", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date:", detail: "04/2026" },
];

export default function Review({ hostType, plan, fee }) {
  return (
    <Stack spacing={4}>
      <List size={null}>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemContent>
            <Typography level="body-md" textColor="text.primary" textTransform={"capitalize"}>{hostType}</Typography>
            <Typography level="body-sm" textColor="text.tertiary">
              {plan.name}
            </Typography>
          </ListItemContent>
          <Typography level="body-md" textColor="text.primary">${plan.price}</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemContent>
            <Typography level="body-md" textColor="text.primary">Step fee</Typography>
            <Typography level="body-sm" textColor="text.tertiary">
              Plus taxes
            </Typography>
          </ListItemContent>
          <Typography level="body-md" textColor="text.primary">${fee}</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemContent>
            <Typography level="body-md" textColor="text.primary">Total</Typography>
          </ListItemContent>
          <Typography level="title-lg" sx={{ fontWeight: 700 }}>
          ${plan.price + fee}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography level="title-md" textColor="text.primary" gutterBottom>
            Shipment details
          </Typography>
          <Typography gutterBottom textColor="text.primary">John Smith</Typography>
          <Typography gutterBottom sx={{ color: "text.tertiary" }}>
            {addresses.join(", ")}
          </Typography>
        </div>
        <div>
          <Typography level="title-md" textColor="text.primary" gutterBottom>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: "100%", mb: 1 }}
                >
                  <Typography level="body-sm" sx={{ color: "text.tertiary" }}>
                    {payment.name}
                  </Typography>
                  <Typography level="body-md"  textColor="text.primary">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
