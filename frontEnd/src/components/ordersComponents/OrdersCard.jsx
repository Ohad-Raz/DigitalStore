import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function OrdersCard() {
  const [cartData, setCartData] = useState({});
  const [formData, setFormData] = useState({});
  
  // Extracting data from URL parameters
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cart = searchParams.get('cart');
    const form = searchParams.get('formData');
    console.log('Cart data from URL:', cart);
    console.log('Form data from URL:', form);
    
    // Update cartData and formData directly
    setCartData(cart || {});
    setFormData(form || {});
  }, [location]);
  
  return (
    <div>
      <h2>Checkout Details</h2>
      <h3>Cart Data:</h3>
      <pre>{JSON.stringify(cartData, null, 2)}</pre>
      <h3>Form Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

export default OrdersCard;
