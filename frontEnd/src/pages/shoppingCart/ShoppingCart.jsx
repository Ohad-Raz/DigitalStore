import React, { useState } from "react";
import CartActions from "../../components/cartsComponents/CartActions";
import CheckOutBtn from "../../components/checkoutsComponents/CheckoutBtn";
import { Link } from "react-router-dom";
import styles from "./ShoppingCart.module.css"

function ShoppingCart() {
  const [hasItems, setHasItems] = useState(false);

  return (
    <div className={styles.cartContainer}>
      <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
      <div>
        <CartActions setHasItems={setHasItems} />
        {hasItems ? (
          <CheckOutBtn setHasItems={setHasItems} />
        ) : (
          <p style={{ textAlign: 'center' }}>No products in cart yet, add them from <Link to="/catalog">here</Link></p>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;