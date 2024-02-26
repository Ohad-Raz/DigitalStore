import React, { useContext } from 'react';
import axios from 'axios';
import { APIBaseUrl } from "../../config";
import { UserContext } from '../../context/UserContext';
import styles from './AddToCart.module.css';

function AddToCart({ productId }) {
  const { user } = useContext(UserContext);
  const authorizationToken = localStorage.getItem('token');
  const addToCart = async () => {
    try {
      await axios.post(
        `${APIBaseUrl}/carts/items`,
        { item: productId, quantity: 1 }, // Correct structure of the request body
        {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        }
      );
      console.log('Product added to cart successfully');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  

  return (
    <button className={styles.button} onClick={addToCart}>
      Add to Cart
    </button>
  );
}

export default AddToCart;
