import {
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Input,
  styled,
} from "@mui/joy";
import * as React from "react";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const FormLabel2 = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.text.tertiary,
  fontWeight: 400,
}));

const FormInput = styled(Input)(({ theme }) => ({
  color: theme.palette.neutral.solidBg,
  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(51, 60, 77, 0.6)"
      : theme.palette.neutral.outlinedBorder,
}));

export default function AddressForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid xs={12} md={6} gap={1}>
        <FormLabel2 htmlFor="first-name" required>
          First name
        </FormLabel2>
        <FormInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={12} md={6} gap={1}>
        <FormLabel2 htmlFor="last-name" required>
          Last name
        </FormLabel2>
        <FormInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Snow"
          autoComplete="last name"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={12} gap={1}>
        <FormLabel2 htmlFor="address1" required>
          Address line 1
        </FormLabel2>
        <FormInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={12} gap={1}>
        <FormLabel2 htmlFor="address2">Address line 2</FormLabel2>
        <FormInput
          id="address2"
          name="address2"
          type="address2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={6} gap={1}>
        <FormLabel2 htmlFor="city" required>
          City
        </FormLabel2>
        <FormInput
          id="city"
          name="city"
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={6} gap={1}>
        <FormLabel2 htmlFor="state" required>
          State
        </FormLabel2>
        <FormInput
          id="state"
          name="state"
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={6} gap={1}>
        <FormLabel2 htmlFor="zip" required>
          Zip / Postal code
        </FormLabel2>
        <FormInput
          id="zip"
          name="zip"
          type="zip"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={6} gap={1}>
        <FormLabel2 htmlFor="country" required>
          Country
        </FormLabel2>
        <FormInput
          id="country"
          name="country"
          type="country"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="sm"
        />
      </FormGrid>
      <FormGrid xs={12} gap={1}>
        <FormControl>
          <Checkbox
            name="saveAddress"
            value="yes"
            label="Use this address for payment details."
          />
        </FormControl>
      </FormGrid>
    </Grid>
  );
}
