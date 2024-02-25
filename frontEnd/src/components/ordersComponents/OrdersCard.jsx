import React, { useState } from 'react';
import "./OrdersCard.css";

function OrdersCard({ order }) {
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);
  const [isShippingAddressExpanded, setIsShippingAddressExpanded] = useState(false);
  const [isContactInfoExpanded, setIsContactInfoExpanded] = useState(false);

  const toggleProducts = () => {
    setIsProductsExpanded(!isProductsExpanded);
  };

  const toggleShippingAddress = () => {
    setIsShippingAddressExpanded(!isShippingAddressExpanded);
  };

  const toggleContactInfo = () => {
    setIsContactInfoExpanded(!isContactInfoExpanded);
  };

  return (
    <div className="ordersCard" key={order._id}>
      <p>Order ID: {order._id ? order._id : "N/A"}</p>
      <h5 className="sectionHeader" onClick={toggleProducts}>
        {isProductsExpanded ? 'Products ▼' : 'Products ►'}
      </h5>
      <div className={`sectionContent ${isProductsExpanded ? 'expanded' : 'collapsed'}`}>
        {isProductsExpanded && (
          <>
            {order.products.map((product) => (
              <div key={product.item._id}>
                <p>Name: {product.item ? product.item.name : "N/A"}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price per product: {product.item ? product.item.price * product.quantity : "N/A"} {product.item ? product.item.currency : ""}</p>
              </div>
            ))}
            <div>
              <hr />
              <p>
                Total Price:{" "}
                {order.products.reduce(
                  (total, product) =>
                    total + product.item.price * product.quantity,
                  0
                )} {order.products[0].item.currency}
              </p>
            </div>
          </>
        )}
      </div>
      <h5 className="sectionHeader" onClick={toggleShippingAddress}>
        {isShippingAddressExpanded ? 'Shipping Address ▼' : 'Shipping Address ►'}
      </h5>
      <div className={`sectionContent ${isShippingAddressExpanded ? 'expanded' : 'collapsed'}`}>
        {isShippingAddressExpanded && (
          <div>
            <p>Name: {order.shippingAddress.shippingName}</p>
            <p>Country: {order.shippingAddress.shippingCountry}</p>
            <p>Street: {order.shippingAddress.shippingStreet}</p>
            <p>City: {order.shippingAddress.shippingCity}</p>
            <p>Postal Code/Zip: {order.shippingAddress.shippingPostalCode}</p>
            <p>Address 2: {order.shippingAddress.shippingStreet2}</p>
            <p>House Number: {order.shippingAddress.houseNumber}</p>
            <p>House Number 2: {order.shippingAddress.houseNumber2}</p>
          </div>
        )}
      </div>
      <h5 className="sectionHeader" onClick={toggleContactInfo}>
        {isContactInfoExpanded ? 'Contact Information ▼' : 'Contact Information ►'}
      </h5>
      <div className={`sectionContent ${isContactInfoExpanded ? 'expanded' : 'collapsed'}`}>
        {isContactInfoExpanded && (
          <div>
            <p>Email: {order.contactInfo.email}</p>
            <p>Phone: {order.contactInfo.phone}</p>
            <p>House/Company Phone Number: {order.contactInfo.housePhone}</p>
          </div>
        )}
      </div>
      <h5>Shipping Method</h5>
      <p>{order.shippingMethod}</p>
      <h5>Order Date</h5>
      <p>{order.orderDate}</p>
      <h5>Order Status</h5>
      <p>{order.status}</p>
    </div>
  );
}

export default OrdersCard;
