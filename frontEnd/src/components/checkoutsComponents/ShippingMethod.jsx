import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from './ShippingMethod.module.css';

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState('');

  const handleShippingMethodChange = (event) => {
    setShippingMethod(event.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <Typography variant="h6" gutterBottom>
        Shipping Method
      </Typography>
      <Select
        id="shippingMethod"
        value={shippingMethod}
        onChange={handleShippingMethodChange}
        fullWidth
        variant="standard"
        displayEmpty
        classes={{ root: styles.select }}
        MenuProps={{
          PaperProps: {
            className: styles.dropdownPaper,
          },
        }}
      >
        <MenuItem value="" disabled>
          Select Shipping Method
        </MenuItem>
        <MenuItem className={styles.menuItem} value="standard">Standard Shipping</MenuItem>
        <MenuItem className={styles.menuItem} value="express">Express Shipping</MenuItem>
      </Select>
    </div>
  );
};

export default ShippingMethod;
