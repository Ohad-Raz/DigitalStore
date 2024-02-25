import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  // Check if product is undefined before accessing its properties
  if (!product) {
    return <div>No product data available</div>;
  }
  return (
    <div className="productCard">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Company: {product.company}</p>
      <p>Model Number: {product.modelNumber}</p>
      <img className="productCardImg" src={product.src} />
      <br />
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
  );
}

export default ProductCard;
