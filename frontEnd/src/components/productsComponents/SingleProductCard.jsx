import React from "react";
import ProductCard from "./ProductCard";
import AddToCart from "../cartsComponents/AddToCart";

function SingleProductCard({ product }) {

  return (
    <div>

      <ProductCard product={product} />
      <AddToCart productId={product._id}/>
    </div>
  );
}

export default SingleProductCard;
