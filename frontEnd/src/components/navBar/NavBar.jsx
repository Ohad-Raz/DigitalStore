import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/Theme";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/esm/NavLink";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logox4-removebg.png";

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
         <Link to={"/home"}>   
            <img className="navLogo" src={logo} alt="Home" />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-light">
              {/* <Nav.Link  to={"/home">Home</Nav.Link> */}
              {/* <Nav.Link  to={"/auth">Auth</Nav.Link> */}
              {user && user.role === "admin" && (
                <Link  to={"/dashboard"}>Dashboard</Link>
              )}
              {/* <Link  to={"/favorites">Favorites</Link> */}
              <Link  to={"/catalog"}>Catalog</Link>
              <Link  to={"/orders"}>Orders</Link>
              {/* <Link  to={"/profile">Profile</Link> */}
              
              <Link  to={"/shopping-Cart"}>Shopping Cart</Link>
              {/* <Link  to={"/contact">Contact Us</Link> */}
              {/* <Link as={Link} to="/singleproduct/:productId">Single Product</Link> */}

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
                    <buttons
                      className={`MoonSun ${themeClass}`}
                      onClick={toggleTheme}
                    >
                      <i className={`fa-solid fa-${changeSunMoon}`}></i>
                    </buttons>
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
