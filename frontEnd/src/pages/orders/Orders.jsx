import React from 'react'
import OrdersActions from '../../components/ordersComponents/OrdersActions'
import styles from "./Orders.module.css"

function Orders() {
  return (
    <div className={styles.ordersContainer}>
      <h2 style={{ textAlign: 'center' }}>Orders</h2>
    <div>
<OrdersActions/>
    </div>
    
    </div>

  )
}

export default Orders

// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { APIBaseUrl } from "../../config";
// import { UserContext } from "../../context/UserContext";

// function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState(null);
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const authorizationToken = localStorage.getItem("token");
//         const response = await axios.get(`${APIBaseUrl}/orders`, {
//           headers: {
//             Authorization: `Bearer ${authorizationToken}`,
//           },
//         });
//         console.log("Fetched orders:", response.data.data); // Add this log to check the fetched data
//         setOrders(response.data.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError(error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   console.log("Orders:", orders);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Orders</h2>
//       {Array.isArray(orders) &&
//         orders.map((order) => (
         
//           <div key={order._id}>
//             <p>Order ID: {order._id ? order._id : "N/A"}</p>
//              <h5>Products</h5>
//           <div>
//             {order.products.map((product) => (
//               <div key={product.item._id}>
//                 <p>Name: {product.item ? product.item.name : "N/A"}</p>

//                 <p>Quantity: {product.quantity}</p>
//                 <p>Price per product: {product.item ? product.item.price * product.quantity : "N/A"} {product.item ? product.item.currency : ""}</p>

//               </div>
//             ))}
//             {/* Display currency value and total price */}
//             <div>
//               <hr></hr>
              
//               <p>
//                 Total Price:{" "}
//                 {order.products.reduce(
//                   (total, product) =>
//                     total + product.item.price * product.quantity,
//                   0
//                 )} {order.products[0].item.currency}
           
//               </p>
//             </div>
//           </div>
//             <h5>Shipping Address</h5>
//             <p>Name: {order.shippingAddress.shippingName}</p>
//             <p>Country: {order.shippingAddress.shippingCountry}</p>
//             <p>Street: {order.shippingAddress.shippingStreet}</p>
//             <p>City: {order.shippingAddress.shippingCity}</p>
//             <p>Postal Code/Zip: {order.shippingAddress.shippingPostalCode}</p>
//             <p>Address 2: {order.shippingAddress.shippingStreet2}</p>
//             <p>House Number: {order.shippingAddress.houseNumber}</p>
//             <p>House Number 2: {order.shippingAddress.houseNumber2}</p>

//             <h5>Contact Information</h5>
//             <p>Email: {order.contactInfo.email}</p>
//             <p>Phone: {order.contactInfo.phone}</p>
//             <p>House/Company Phone Number: {order.contactInfo.housePhone}</p>

//             <h5>Shipping Method</h5>
//             <p>{order.shippingMethod}</p>

//             <h5>Order Date</h5>
//             <p>{order.orderDate}</p>

//             <h5>Order Status</h5>
//             <p>{order.status}</p>

//             {/* Add more details as needed */}
//           </div>
//         ))}
//       {error && <p>Error fetching orders: {error.message}</p>}
//     </div>
//   );
// }

// export default Orders;
