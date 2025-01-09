import * as React from "react";
import {
  CssVarsProvider,
  styled,
  useColorScheme,
  useTheme,
} from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Warning from "@mui/icons-material/Warning";
import CreditCard from "@mui/icons-material/CreditCard";
import AccountBalance from "@mui/icons-material/AccountBalance";
import SimCard from "@mui/icons-material/SimCard";
import { CardActions, CardContent, CardOverflow } from "@mui/joy";
import { CreditCardRounded } from "@mui/icons-material";

const PaymentContainer = ({ children }) => {
  const { mode } = useColorScheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: { xs: 250, sm: 275, md: 300 },
        p: 3,
        borderRadius: "lg",
        bgcolor: mode === "dark" ? "background.level1" : "background.surface",
        boxShadow: "sm",
      }}
    >
      {children}
    </Box>
  );
};

const FormInput = styled(Input)(({ theme }) => ({
  color: theme.palette.neutral.solidBg,

  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(51, 60, 77, 0.6)"
      : theme.palette.neutral.outlinedBorder,
}));

const FormLabel2 = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.text.tertiary,
  fontWeight: 400,
}));

const StyledCard = styled(({ isSelected, ...other }) => <Card {...other} />)(
    ({ theme, isSelected }) => ({
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      borderColor:
        theme.palette.mode === 'dark'
          ? 'rgba(51, 60, 77, 0.6)'
          : theme.palette.neutral.outlinedBorder,
      '&:hover, &[aria-checked="true"]': {
        background:
          'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)',
        boxShadow: '0px 2px 8px hsla(0, 0%, 0%, 0.1)',
        ...(theme.palette.mode === 'dark' && {
          background:
            'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
          boxShadow: '0px 1px 8px hsla(210, 100%, 25%, 0.5)',
        }),
      },
      ...(isSelected && {
        borderColor: theme.vars.palette.primary[500], 
      }),
    })
  );

export default function Component() {
  const theme = useTheme();
  const [paymentType, setPaymentType] = React.useState("creditCard");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    if (value.length <= 16) {
      setCardNumber(formattedValue);
    }
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleExpirationDateChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d{2})(?=\d{2})/, "$1/");
    if (value.length <= 4) {
      setExpirationDate(formattedValue);
    }
  };

  return (
    <CssVarsProvider>
      <Stack spacing={3} sx={{ width: "100%", maxWidth: 500, mx: "auto" }}>
        <FormControl>
          <RadioGroup
            name="paymentType"
            value={paymentType}
            onChange={handlePaymentTypeChange}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: "100%",
            }}
          >
            <StyledCard
              variant="outlined"
              size="sm"
              onClick={() => setPaymentType("creditCard")}
              isSelected={paymentType === "creditCard"}
              aria-checked={paymentType === "creditCard"}
            >
              <Typography
                level="body-sm"
                textColor={paymentType === "creditCard" ? "text.primary" : "neutral.solidBg"}
                startDecorator={
                  <CreditCard
                    sx={{
                      color:
                        paymentType === "creditCard"
                          ? "primary.500"
                          : "neutral.solidBg", 
                    }}
                  />
                }
              >
                Card
              </Typography>
            </StyledCard>

            <StyledCard
              variant="outlined"
              size="sm"
              onClick={() => setPaymentType("bankTransfer")}
              isSelected={paymentType === "bankTransfer"}
              aria-checked={paymentType === "bankTransfer"}
            >
              <Typography
                level="body-sm"
                textColor={paymentType === "bankTransfer" ? "text.primary" : "neutral.solidBg"}
                startDecorator={
                  <CreditCard
                    sx={{
                      color:
                        paymentType === "bankTransfer"
                          ? "primary.500"
                          : "neutral.solidBg", 
                    }}
                  />
                }
              >
                Bank account
              </Typography>
            </StyledCard>
          </RadioGroup>
        </FormControl>

        {paymentType === "creditCard" && (
          <Stack spacing={2}>
            <PaymentContainer>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  level="title-md"
                  textColor="text.primary"
                  textTransform={"capitalize"}
                >
                  Credit card
                </Typography>
                <CreditCard sx={{ fontSize: 24, color: "text.primary" }} />
              </Box>
              <SimCard
                sx={{
                  fontSize: { xs: 48, sm: 56 },
                  transform: "rotate(90deg)",
                }}
              />
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel2>Card number</FormLabel2>
                  <FormInput
                    placeholder="0000 0000 0000 0000"
                    required
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </FormControl>
                <FormControl sx={{ width: "20%" }}>
                  <FormLabel2>CVV</FormLabel2>
                  <FormInput
                    placeholder="123"
                    required
                    value={cvv}
                    onChange={handleCvvChange}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel2>Name</FormLabel2>
                  <FormInput placeholder="John Smith" required />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel2>Expiration date</FormLabel2>
                  <FormInput
                    placeholder="MM/YY"
                    required
                    value={expirationDate}
                    onChange={handleExpirationDateChange}
                  />
                </FormControl>
              </Stack>
            </PaymentContainer>
            <Checkbox label="Remember credit card details for next time" />
          </Stack>
        )}

        {paymentType === "bankTransfer" && (
          <Stack spacing={2}>
            <Box
              sx={{
                p: 1,
                borderRadius: "sm",
                bgcolor: "warning.softBg",
                border: "1px solid",
                borderColor: "rgba(80, 60, 2, .6)",
              }}
            >
              
              <Typography level="body-sm" startDecorator={<Warning sx={{color: "warning.400"}}/>}>
                Your order will be processed once we receive the funds.
              </Typography>
            </Box>
            <Typography level="title-md" textColor="text.primary">Bank account</Typography>
            <Typography level="body-sm" textColor="text.secondary">
              Please transfer the payment to the bank account details shown
              below.
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography level="body-sm" sx={{ color: "text.tertiary" }}>
                  Bank:
                </Typography>
                <Typography level="body-sm" textColor={"text.primary"}>
                  Mastercredit
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography level="body-sm" sx={{ color: "text.tertiary" }}>
                  Account number:
                </Typography>
                <Typography level="body-sm" textColor="text.primary">
                  123456789
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography level="body-sm" sx={{ color: "text.tertiary" }}>
                  Routing number:
                </Typography>
                <Typography level="body-sm" textColor="text.primary">
                  987654321
                </Typography>
              </Box>
            </Stack>
          </Stack>
        )}
      </Stack>
    </CssVarsProvider>
  );
}
