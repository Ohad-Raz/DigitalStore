import React from 'react';
// import CheckOutCard from '../../components/checkoutsComponents/CheckOutCard';
import CheckoutsActions from '../../components/checkoutsComponents/CheckoutsActions';
import CheckoutForm from '../../components/checkoutsComponents/CheckoutForm';
import styles from "./Checkouts.module.css"
function Checkouts() {
  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>
      <CheckoutsActions />
      <CheckoutForm/>
    </div>
  );
}

export default Checkouts;
