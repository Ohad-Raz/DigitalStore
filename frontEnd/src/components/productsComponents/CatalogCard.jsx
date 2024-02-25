import React from "react";
import "./CatalogCard.css";
import { Link } from "react-router-dom";
import AddToCart from "../cartsComponents/AddToCart";

function CatalogCard({ product }) {
  return (
    <div className="catalogCard">
      <Link to={`/products/${product._id}`} className="productLink">
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p>Company: {product.company}</p>
        <p>Model Number: {product.modelNumber}</p>
        <img className="catalogCardImg" src={product.src} alt={product.name} />
        <br />
        <p>Color: {product.color}</p>
        <p>Price: {product.price} {product.currency}</p>
       
      </Link>
      {/* Use the AddToCart component here */}
      <AddToCart productId={product._id} />
    </div>
  );
}

export default CatalogCard;
