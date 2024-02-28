import React from 'react';
// import CheckOutCard from '../../components/checkoutsComponents/CheckOutCard';
import CheckoutsActions from '../../components/checkoutsComponents/CheckoutsActions';
import CheckoutForm from '../../components/checkoutsComponents/CheckoutForm';

function Checkouts() {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutsActions />
      <CheckoutForm/>
    </div>
  );
}

export default Checkouts;
