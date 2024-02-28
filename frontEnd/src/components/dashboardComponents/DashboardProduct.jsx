import React, { useState } from "react";
import styles from "./DashboardProduct.module.css";


function DashboardProduct({ products, deleteProduct, updateProduct }) {
  const [editableProduct, setEditableProduct] = useState(null);

  const handleEdit = (product) => {
    setEditableProduct(product);
  };

  const handleSaveChanges = async () => {
    try {
      await updateProduct(editableProduct);
      setEditableProduct(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setEditableProduct(null);
  };

  const handleFieldChange = (key, value) => {
    setEditableProduct((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
      {products.map((product, index) => (
        <div key={index} className={styles.item}>
          {/* Use index as key */}
          {editableProduct && editableProduct._id === product._id ? (
            <div >
              {Object.entries(product).map(([key, value]) => (
                <div key={key + index}>
                  {/* Append index to key */}
                  <label htmlFor={key}>{key}</label>
                  <input
                    type="text"
                    id={key}
                    value={editableProduct[key]}
                    onChange={(e) => handleFieldChange(key, e.target.value)}
                  />
                </div>
              ))}
              <button onClick={handleSaveChanges}>Save Changes</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div className={styles.fields} >
              <p>Category: {product.category}</p>
              <p>Company: {product.company}</p>
              <p>Name: {product.name}</p>
              <p>Model Number: {product.modelNumber}</p>
              <p>Image Source: {product.src}</p>
              <p>Link to Page: {product.linkToPage}</p>
              <p>Color: {product.color}</p>
              <p>Materials: {product.materials}</p>
              <p>
                Size: Width -{" "}
                {product.sizeDescription
                  ? product.sizeDescription.width
                  : "N/A"}
                , Height -{" "}
                {product.sizeDescription
                  ? product.sizeDescription.height
                  : "N/A"}
              </p>
              <p>Price: {product.price}</p>
              <p>Currency: {product.currency}</p>
              <div className={styles.buttonsContainer}>
              <button onClick={() => handleEdit(product)}>Update</button>
              <button onClick={() => deleteProduct(product._id)}>
                Delete
              </button>
              </div>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );

}

export default DashboardProduct;
