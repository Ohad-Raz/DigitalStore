import React from 'react';
import { Link } from 'react-router-dom';

function CheckOutBtn() {
  return (
    <Link to="/checkouts">
      <button>Proceed to Checkout</button>
    </Link>
  );
}

export default CheckOutBtn;
