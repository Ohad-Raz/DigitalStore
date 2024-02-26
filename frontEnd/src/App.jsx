import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import NotFound from "./components/notFound/NotFound";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/Theme";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import Favorites from "./pages/favorites/Favorites";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/profile/Profile";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import SingleProduct from "./pages/singleProduct/SingleProduct";
// import SingleProductCard from "./components/productsComponents/SingleProductCard";
import Checkouts from "./pages/checkouts/Checkouts";
import Contact from "./pages/contact/Contact";

import axios from "axios"; // Import axios

function App() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedTheme } = useContext(ThemeContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:4000/api/v1/users/init-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data);
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setUser(null);
      setIsLoading(false);
    }
  }, [setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ ...selectedTheme }}>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/checkouts" element={<Checkouts/>} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
             {/* Protect Dashboard route based on user role */}
        {user && user.role === 'admin' ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<Navigate to="/home" replace />} />
        )}
        </Routes>


      </Router>
    </div>
  );
}

export default App;
