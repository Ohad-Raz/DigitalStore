// CartActions.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CartCard from './CartCard';
import { APIBaseUrl } from '../../config';
import { UserContext } from '../../context/UserContext';
import styles from "./CartActions.module.css"

function CartActions({ setHasItems }) { // Accept setHasItems as prop
  const [cart, setCart] = useState([]);
  const { user } = useContext(UserContext);
  const authorizationToken = localStorage.getItem('token');

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/carts/items`, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      });
  
      const { products } = response.data;
  
      const cartItems = products.map(item => ({
        item: item.item,
        quantity: item.quantity
      }));
  
      setCart(cartItems);
      setHasItems(cartItems.length > 0); // Set hasItems based on whether cartItems has length greater than 0
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`${APIBaseUrl}/carts/items/${productId}`, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      });
      fetchCart();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      if (quantity > 0) {
        await axios.patch(`${APIBaseUrl}/carts/items/${productId}`, { quantity }, {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        });
      } else {
        await removeFromCart(productId);
      }
      fetchCart();
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  return (
    <div className={styles.container}>
      {cart.map((item, index) => (
        <CartCard
          key={`${item.productId}-${index}`}
          item={item}
          removeFromCart={removeFromCart}
          updateCartItem={updateCartItem}
          product={item.item}
        />
      ))}
    </div>
  );
}

export default CartActions;
