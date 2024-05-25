import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { APIBaseUrl } from "../../config";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ShippingInformation from './ShippingInformation';
import ContactInformation from './ContactInformation';
import ShippingMethod from './ShippingMethod.jsx';
import styles from "./CheckoutForm.module.css";

const steps = ['Shipping Information', 'Contact Information', 'Shipping Method'];

function CheckoutForm() {
  const { user } = useContext(UserContext);
  const authorizationToken = localStorage.getItem("token");
  const [shippingAddress, setShippingAddress] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [shippingMethod, setShippingMethod] = useState('');
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeStep, setActiveStep] = useState(0); 
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

  const handleContactInfoChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mappedProducts = productsInCart.map(item => ({ item: item.item._id, quantity: item.quantity }));
  
    const checkoutData = {
      owner: user.id,
      products: mappedProducts,
      totalPrice,
      shippingAddress,
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
      navigate('/orders');
    } catch (error) {
      console.error('Error completing checkout:', error);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.container}>
    <div className={styles.stepperContainer}>

      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {activeStep === 0 && (
            <ShippingInformation 
              handleShippingAddressChange={handleShippingAddressChange} 
              shippingAddress={shippingAddress} 
            />
          )}
          {activeStep === 1 && (
            <ContactInformation 
              handleContactInfoChange={handleContactInfoChange} 
              contactInfo={contactInfo} 
            />
          )}
          {activeStep === 2 && (
            <ShippingMethod 
              handleShippingMethodChange={handleShippingMethodChange} 
              shippingMethod={shippingMethod} 
            />
          )}
          <div className={styles.btnContainer}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={styles.btn}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              className={styles.btn}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
