import React from "react";
import ProductCard from "./ProductCard";
import AddToCart from "../cartsComponents/AddToCart";
import styles from "./SingleProductCard.module.css";

function SingleProductCard({ product }) {

  return (
    <div className={styles.card}>
<div >
      <ProductCard product={product} />
      </div>
      <div>
      <AddToCart productId={product._id}/>
      </div>
    </div>
  );
}

export default SingleProductCard;
