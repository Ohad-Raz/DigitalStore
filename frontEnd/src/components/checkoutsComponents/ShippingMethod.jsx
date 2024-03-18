import React from 'react';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ShippingMethod = ({ handleShippingMethodChange, shippingMethod }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping Method
      </Typography>
      <Select
        id="shippingMethod"
        value={shippingMethod}
        onChange={handleShippingMethodChange}
        fullWidth
        variant="standard"
      >
        <MenuItem value="" disabled>
          Select Shipping Method
        </MenuItem>
        <MenuItem value="standard">Standard Shipping</MenuItem>
        <MenuItem value="express">Express Shipping</MenuItem>
      </Select>
    </div>
  );
};

export default ShippingMethod;
