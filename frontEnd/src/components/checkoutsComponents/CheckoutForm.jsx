import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { APIBaseUrl } from "../../config";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function CheckoutForm() {
  const { user } = useContext(UserContext);
  const authorizationToken = localStorage.getItem("token");
  const [shippingAddress, setShippingAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [shippingMethod, setShippingMethod] = useState('');
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();
  
  useEffect(() => {
    fetchProductsInCart();
  }, []);

  const fetchProductsInCart = async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/carts/items`, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      });
      console.log('Products in cart:', response.data.products); 
      setProductsInCart(response.data.products); 
      calculateTotalPrice(response.data.products); 
    } catch (error) {
      console.error('Error fetching products in cart:', error);
    }
  };
  

  const calculateTotalPrice = (cartItems) => {
    if (!Array.isArray(cartItems)) {
      setTotalPrice(0);
      return;
    }
    const totalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.item.price), 0);
    setTotalPrice(totalPrice);
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };
  
  const handleBillingAddressChange = (e) => {
    setBillingAddress({ ...billingAddress, [e.target.name]: e.target.value });
  };

  const handleContactInfoChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
  
    // Map productsInCart to the required structure
    const mappedProducts = productsInCart.map(item => ({ item: item.item._id, quantity: item.quantity }));
  
    const checkoutData = {
      owner: user.id,
      products: mappedProducts,
      totalPrice,
      shippingAddress,
      billingAddress,
      contactInfo,
      shippingMethod,
    };
  
    try {
      const response = await axios.post(`${APIBaseUrl}/orders`, checkoutData, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      });
      console.log('Checkout successful:', response.data);
      // You can redirect the user to the orders page or display a success message here
    } catch (error) {
      console.error('Error completing checkout:', error);
    }
    navigate('/orders');
  };
  

  return (
    <div>
<form onSubmit={handleSubmit}>
<h2>Shipping Information</h2>

  <div>
    <label htmlFor="shippingName">Full Name<span>*</span></label><br/>
    <input type="text" id="shippingName" name="shippingName" placeholder="Full Name" onChange={handleShippingAddressChange} required />
  </div>
  <div>
    <label htmlFor="companyName">Company Name</label><br/>
    <input type="text" id="companyName" name="companyName" placeholder="Company Name" onChange={handleContactInfoChange} />
  </div>
  <div>
    <label htmlFor="shippingPostalCode">Post Code/Zip<span>*</span></label><br/>
    <input type="text" id="shippingPostalCode" name="shippingPostalCode" placeholder="Post Code/Zip" onChange={handleShippingAddressChange} required />
  </div>

  <div>
    <label htmlFor="shippingCountry">Country<span>*</span></label><br/>
    <input type="text" id="shippingCountry" name="shippingCountry" placeholder="Country" onChange={handleShippingAddressChange} required />
  </div>
  <div>
    <label htmlFor="shippingCity">Town/City<span>*</span></label><br/>
    <input type="text" id="shippingCity" name="shippingCity" placeholder="Town/City" onChange={handleShippingAddressChange} required />
  </div>
  <div>
    <label htmlFor="shippingStreet">Address 1<span>*</span></label><br/>
    <input type="text" id="shippingStreet" name="shippingStreet" placeholder="Address 1" onChange={handleShippingAddressChange} required />
  </div>
  <div>
    <label htmlFor="houseNumber">House Number<span>*</span></label><br/>
    <input type="text" id="houseNumber" name="houseNumber" placeholder="House Name/Number" onChange={handleShippingAddressChange} required />
  </div>
  <div>
    <label htmlFor="shippingStreet2">Address 2</label><br/>
    <input type="text" id="shippingStreet2" name="shippingStreet2" placeholder="Address 2" onChange={handleShippingAddressChange} />
  </div>
  <div>
    <label htmlFor="houseNumber2">House Number 2</label><br/>
    <input type="text" id="houseNumber2" name="houseNumber2" placeholder="House Name/Number 2" onChange={handleShippingAddressChange} required />
  </div>

  <h2>Contact Information</h2>
  <div>
    <label htmlFor="email">Email Address<span>*</span></label><br/>
    <input type="email" id="email" name="email" placeholder="Email Address" onChange={handleContactInfoChange} required />
  </div>
  <div>
    <label htmlFor="phone">Phone Number<span>*</span></label><br/>
    <input type="tel" id="phone" name="phone" placeholder="Phone Number" onChange={handleContactInfoChange} required />
  </div>
  <div>
    <label htmlFor="housePhone">home/Company phone Number</label><br/>
    <input type="tel" id="housePhone" name="housePhone" placeholder="House/Company Number" onChange={handleContactInfoChange} />
  </div>

  <h2>Shipping Method</h2>
  <select id="shippingMethod" value={shippingMethod} onChange={handleShippingMethodChange} required>
    <option value="" disabled hidden>Select Shipping Method</option>
    <option value="standard">Standard Shipping</option>
    <option value="express">Express Shipping</option>
  </select>


  <button type="submit">Proceed to Payment</button>
</form>




  </div>
  );
}

export default CheckoutForm;
