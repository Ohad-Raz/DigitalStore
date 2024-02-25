import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleProductCard from "../../components/productsComponents/SingleProductCard";
import { APIBaseUrl } from "../../config";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${APIBaseUrl}/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <SingleProductCard product={product} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default SingleProduct;
