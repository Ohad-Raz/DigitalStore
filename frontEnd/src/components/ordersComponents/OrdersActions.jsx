import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { APIBaseUrl } from "../../config";
import { UserContext } from "../../context/UserContext";
import OrdersCard from "./OrdersCard";
import "./OrdersActions.css";
import { Link } from "react-router-dom";

function OrdersActions() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const authorizationToken = localStorage.getItem("token");
        const response = await axios.get(`${APIBaseUrl}/orders`, {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        });
        console.log("Fetched orders:", response.data.data);
        setOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error);
      }
    };

    fetchOrders();
  }, []);

  console.log("Orders:", orders);

  return (
    <div className="OrdersContainer">
      {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id}>
            <OrdersCard order={order} />
          </div>
        ))
      ) : (
        <p>{error ? "Error fetching orders" : "No user orders yet,"} add them from <Link style={{ color: 'black' }} to="/shopping-Cart">here</Link></p>
      )}
    </div>
  );
}

export default OrdersActions;
