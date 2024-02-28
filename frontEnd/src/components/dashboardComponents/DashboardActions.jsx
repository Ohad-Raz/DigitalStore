import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { APIBaseUrl } from "../../config";
import { UserContext } from "../../context/UserContext";
import DashboardForm from "./DashboardForm";
import DashboardProduct from "./DashboardProduct";
import styles from "./DashboardActions.module.css"

function DashboardActions() {
  const { user } = useContext(UserContext);
  const authorizationToken = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/products`, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      });
      setProducts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (newProductData) => {
    try {
      const response = await axios.post(
        `${APIBaseUrl}/products`,
        newProductData,
        {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        }
      );
      console.log("New product added:", response.data);
      setProducts((prevProducts) => [...prevProducts, response.data.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${APIBaseUrl}/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      });
      const updatedProducts = products.filter(
        (product) => product._id !== productId
      );
      setProducts(updatedProducts);
    } catch (err) {
      console.error(err);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const response = await axios.patch(
        `${APIBaseUrl}/products/${updatedProduct._id}`,
        updatedProduct,
        {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Product updated successfully!");
      } else {
        throw new Error("Failed to update product");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update product");
    }
  };

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
      <DashboardForm addProduct={addProduct} />
      <DashboardProduct  
        products={products}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
    </div>
  );
}

export default DashboardActions;
