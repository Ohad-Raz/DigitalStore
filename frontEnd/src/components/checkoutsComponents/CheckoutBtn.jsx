import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./CheckoutBtn.module.css" 

function CheckOutBtn() {
  return (
    <div className={styles.container}>
    
    <Link to="/checkouts">
      <button className={styles.button}>Proceed to Checkout</button>
    </Link></div>
  );
}

export default CheckOutBtn;
