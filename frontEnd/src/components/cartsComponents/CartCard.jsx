import React from "react";
import { Link } from "react-router-dom";
import "./CartCard.css"

function CartCard({ item, removeFromCart, updateCartItem }) {
  // Add a check to ensure item is not null or undefined
  if (!item || !item.item) {
    return <div>Loading...</div>;
  }

  const { item: productItem, quantity } = item;

  const handleRemoveFromCart = () => {
    removeFromCart(productItem._id);
  };

  const handleUpdateQuantity = (newQuantity) => {
    updateCartItem(productItem._id, newQuantity);
  };

  return (
    <div className="cartCard">
      <Link to={`/product/${productItem._id}`} className="productLink">
        <h2>{productItem.name}</h2>
        <p>Company: {productItem.company}</p>
        <p>Model Number: {productItem.modelNumber}</p>
        <img className="catalogCardImg" src={productItem.src} alt={productItem.name} />
        <br />
        <p>Color: {productItem.color}</p>
        <p>Price: {productItem.price}    {productItem.currency}</p>
    
      </Link>
      <div className="quantityContainer">
        <button onClick={() => handleUpdateQuantity(quantity - 1)}>-</button>
        <input type="number" value={quantity} onChange={(e) => handleUpdateQuantity(parseInt(e.target.value))} />
        <button onClick={() => handleUpdateQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
}

export default CartCard;
