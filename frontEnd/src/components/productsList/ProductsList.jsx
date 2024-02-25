import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIBaseUrl } from "../../config";
import CatalogCard from "../productsComponents/CatalogCard";
import "./ProductsList.css"

function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="CatalogContainer">
      {products.map((product, index) => (
        <CatalogCard key={index} product={product} />
      ))}</div>
    </div>
  );
}

export default ProductsList;
