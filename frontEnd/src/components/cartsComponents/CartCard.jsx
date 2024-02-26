import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartCard.module.css"

function CartCard({ item, removeFromCart, updateCartItem }) {
  if (!item || !item.item) {
    return <div>Loading...</div>;
  }

  const { item: product, quantity } = item;

  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
  };

  const handleUpdateQuantity = (newQuantity) => {
    updateCartItem(product._id, newQuantity);
  };

  return (
    <div className={styles.card}>
      <Link to={`/products/${product._id}`} className="productLink">
        <h2>{product.name}</h2>
        <p>Company: {product.company}</p>
        <p>Model Number: {product.modelNumber}</p>
        <div className={styles.imgContainer}>
        <img className={styles.img} src={product.src} alt={product.name} />
        </div>
        <br />
        <p>Color: {product.color}</p>
        <p>Price: {product.price}    {product.currency}</p>
    
      </Link>
      <div className={styles.quantityContainer}>
        <button onClick={() => handleUpdateQuantity(quantity - 1)}>-</button>
        <input type="number" value={quantity} onChange={(e) => handleUpdateQuantity(parseInt(e.target.value))} />
        <button onClick={() => handleUpdateQuantity(quantity + 1)}>+</button>
      </div>
      <button className={styles.button} onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
}

export default CartCard;
