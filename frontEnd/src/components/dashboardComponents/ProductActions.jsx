import "./ProductActions.css";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { APIBaseUrl } from "../../config";
import { UserContext } from "../../context/UserContext";



function ProductActions() {
  const { user } = useContext(UserContext);
  const authorizationToken = localStorage.getItem("token");

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

  const addProduct = async (e) => {
    e.preventDefault();
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
        setEditableProduct(response.data);
        console.log("Product updated successfully!");
      } else {
        throw new Error("Failed to update product");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update product");
    }
  };

  const [editableProduct, setEditableProduct] = useState(null);

  const handleEdit = (product) => {
    setEditableProduct(product);
  };

  const handleSaveChanges = async () => {
    try {
      await updateProduct(editableProduct);
      setProducts(
        products.map((p) =>
          p._id === editableProduct._id ? editableProduct : p
        )
      );
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
    <div>
      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={newProductData.category}
          onChange={(e) =>
            setNewProductData({ ...newProductData, category: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={newProductData.company}
          onChange={(e) =>
            setNewProductData({ ...newProductData, company: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProductData.name}
          onChange={(e) =>
            setNewProductData({ ...newProductData, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Model Number"
          name="modelNumber"
          value={newProductData.modelNumber}
          onChange={(e) =>
            setNewProductData({
              ...newProductData,
              modelNumber: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Image Source"
          name="src"
          value={newProductData.src}
          onChange={(e) =>
            setNewProductData({ ...newProductData, src: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Link to Page"
          name="linkToPage"
          value={newProductData.linkToPage}
          onChange={(e) =>
            setNewProductData({ ...newProductData, linkToPage: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Color"
          name="color"
          value={newProductData.color}
          onChange={(e) =>
            setNewProductData({ ...newProductData, color: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Materials"
          name="materials"
          value={newProductData.materials}
          onChange={(e) =>
            setNewProductData({ ...newProductData, materials: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Width"
          name="width"
          value={newProductData.sizeDescription.width}
          onChange={(e) =>
            setNewProductData({
              ...newProductData,
              sizeDescription: {
                ...newProductData.sizeDescription,
                width: e.target.value,
              },
            })
          }
        />
        <input
          type="text"
          placeholder="Height"
          name="height"
          value={newProductData.sizeDescription.height}
          onChange={(e) =>
            setNewProductData({
              ...newProductData,
              sizeDescription: {
                ...newProductData.sizeDescription,
                height: e.target.value,
              },
            })
          }
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProductData.price}
          onChange={(e) =>
            setNewProductData({ ...newProductData, price: e.target.value })
          }
        />
     <select
          value={newProductData.currency}
          onChange={(e) =>
            setNewProductData({ ...newProductData, currency: e.target.value })
          }
        >
          <option value="USD">$ (USD)</option>
          <option value="ILS">&#8362; (ILS)</option>
          <option value="EUR">€ (EUR)</option>
        </select>
        <button type="submit">Add Product</button>
      </form>

      {products.map((product, index) => {
        // console.log(product._id); //
        return (
          <div key={index}>
            {" "}
            {/* Use index as key */}
            {editableProduct && editableProduct._id === product._id ? (
              <div>
                {Object.entries(product).map(([key, value]) => (
                  <div key={key + index}>
                    {" "}
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
              <div>
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

                <button onClick={() => handleEdit(product)}>Update</button>
                <button onClick={() => deleteProduct(product._id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProductActions;
