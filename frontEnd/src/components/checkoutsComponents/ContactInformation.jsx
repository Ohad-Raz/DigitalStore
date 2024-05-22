import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const ContactInformation = ({ handleContactInfoChange, contactInfo }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={handleContactInfoChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="tel"
            variant="standard"
            onChange={handleContactInfoChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="housePhone"
            name="housePhone"
            label="Home/Company Phone Number"
            fullWidth
            autoComplete="tel"
            variant="standard"
            onChange={handleContactInfoChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactInformation;
