import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const ShippingInformation = ({ handleShippingAddressChange }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shippingName"
            name="shippingName"
            label="Full Name"
            fullWidth
            autoComplete="shipping name"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="companyName"
            name="companyName"
            label="Company Name"
            fullWidth
            autoComplete="shipping company"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shippingPostalCode"
            name="shippingPostalCode"
            label="Post Code/Zip"
            fullWidth
            autoComplete="shipping postal code"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shippingCountry"
            name="shippingCountry"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shippingCity"
            name="shippingCity"
            label="Town/City"
            fullWidth
            autoComplete="shipping city"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shippingStreet"
            name="shippingStreet"
            label="Address 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="houseNumber"
            name="houseNumber"
            label="House Number"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            id="shippingStreet2"
            name="shippingStreet2"
            label="Address 2"
            fullWidth
            autoComplete="shipping address-line3"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            id="houseNumber2"
            name="houseNumber2"
            label="House Number 2"
            fullWidth
            autoComplete="shipping address-line4"
            variant="standard"
            onChange={handleShippingAddressChange}
          />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default ShippingInformation;
