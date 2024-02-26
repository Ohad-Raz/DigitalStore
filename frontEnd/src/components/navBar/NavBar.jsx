import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/Theme";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const { toggleTheme, selectedTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const themeClass =
    selectedTheme.backgroundImage === "url('darkened.png')"
      ? "darkMode"
      : "lightMode";

  const changeSunMoon =
    selectedTheme.backgroundImage === "url('darkened.png')" ? "sun" : "moon";

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className={`NavBarDiv activeNav ${show && "hidden"}`}
      >
        <Container className={isNavOpen ? "navOpenBackground" : ""}>
          <Navbar.Brand href="/home">
            <img src="" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-light">
              {/* <Nav.Link href="/home">Home</Nav.Link> */}
              {/* <Nav.Link href="/auth">Auth</Nav.Link> */}
              {user && user.role === "admin" && (
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              )}
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              <Nav.Link href="/catalog">Catalog</Nav.Link>
              <Nav.Link href="/orders">Orders</Nav.Link>
              {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
              
              <Nav.Link href="/shoppingCart">Shopping Cart</Nav.Link>
              {/* <Nav.Link href="/contact">Contact Us</Nav.Link> */}
              {/* <Nav.Link as={Link} to="/singleproduct/:productId">Single Product</Nav.Link> */}

            </Nav>
            <Nav className="ml-auto">
              <div className="AuthDivNav">
                {user ? (
                  <div className="DivForSignOutBtn">
                    <Link to={"/profile"}>
                      <i className="fa-regular fa-circle-user"></i>
                    </Link>
                    <button
                      className={`SignOutBtn ${themeClass}`}
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                    <button
                      className={`MoonSun ${themeClass}`}
                      onClick={toggleTheme}
                    >
                      <i className={`fa-solid fa-${changeSunMoon}`}></i>
                    </button>
                  </div>
                ) : (
                  <Link to={"/auth"}>Auth</Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
