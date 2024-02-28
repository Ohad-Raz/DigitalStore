import React, { useState } from "react";
import styles from "./DashboardForm.module.css"

function DashboardForm({ addProduct }) {
  const [newProductData, setNewProductData] = useState({
    category: "",
    company: "",
    name: "",
    modelNumber: "",
    src: "",
    linkToPage: "",
    color: "",
    materials: "",
    sizeDescription: {
      width: "",
      height: "",
    },
    price: "",
    currency: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProductData);
    setNewProductData({
      category: "",
      company: "",
      name: "",
      modelNumber: "",
      src: "",
      linkToPage: "",
      color: "",
      materials: "",
      sizeDescription: { width: "", height: "" },
      price: "",
      currency: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <p className={styles.header} >Add New Product</p>
      <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={newProductData.category}
          onChange={handleChange}
          className={styles.inputField}

        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={newProductData.company}
          onChange={handleChange}
          className={styles.inputField}

        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProductData.name}
          onChange={handleChange}
          className={styles.inputField}

        />
        <input
          type="text"
          placeholder="Model Number"
          name="modelNumber"
          value={newProductData.modelNumber}
          onChange={handleChange}
               className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Image Source"
          name="src"
          value={newProductData.src}
          onChange={handleChange}
               className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Link to Page"
          name="linkToPage"
          value={newProductData.linkToPage}
          onChange={handleChange}
               className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Color"
          name="color"
          value={newProductData.color}
          onChange={handleChange}
               className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Materials"
          name="materials"
          value={newProductData.materials}
          onChange={handleChange}
               className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Width"
          name="width"
          value={newProductData.sizeDescription.width}
          onChange={handleChange}
               className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Height"
          name="height"
          value={newProductData.sizeDescription.height}
          onChange={handleChange}
               className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProductData.price}
          onChange={handleChange}
               className={styles.inputField}
        />
        <select
          value={newProductData.currency}
          onChange={handleChange}
               className={styles.inputField}
          name="currency"
        >
          <option value="USD">$ (USD)</option>
          <option value="ILS">&#8362; (ILS)</option>
          <option value="EUR">€ (EUR)</option>
        </select>
        <div>
        <button type="submit">Add Product</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default DashboardForm;
