import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../cartsComponents/AddToCart";
import styles from "./CatalogCard.module.css";

function CatalogCard({ product }) {
  return (
    <div className={styles.card}>
      <Link to={`/products/${product._id}`} className="productLink">
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p>Company: {product.company}</p>
        <p>Model Number: {product.modelNumber}</p>
        <img className={styles.img} src={product.src} alt={product.name} />
        <br />
        <p>Color: {product.color}</p>
        <p>
          Price: {product.price} {product.currency}
        </p>
      </Link>
      <AddToCart  productId={product._id} />
    </div>
  );
}

export default CatalogCard;
