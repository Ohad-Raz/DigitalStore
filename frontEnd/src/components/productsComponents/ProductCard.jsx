import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  // Check if product is undefined before accessing its properties
  if (!product) {
    return <div>No product data available</div>;
  }
  return (
    <div className={styles.card}>
           <div className={styles.imgContainer}>
      <img className={styles.img}  src={product.src} />
      </div>
      <div className={styles.infoContainer}>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Company: {product.company}</p>
      <p>Model Number: {product.modelNumber}</p>
    
      
      <Link to={product.linkToPage}>Link to real store Page</Link>
      <p>Color: {product.color}</p>
      <p>Materials: {product.materials}</p>
      <p>
        Size: Width -{" "}
        {product.sizeDescription ? product.sizeDescription.width : "N/A"},
        Height -{" "}
        {product.sizeDescription ? product.sizeDescription.height : "N/A"}
      </p>
      <p>Price: {product.price} {product.currency}</p>
    </div>

    </div>
  );
}

export default ProductCard;
