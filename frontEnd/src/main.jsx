import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/UserContext.jsx";
import ThemeProvider from "./context/Theme.jsx";
import "./config/i18n.js"; // Import i18n configuration

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>
);
