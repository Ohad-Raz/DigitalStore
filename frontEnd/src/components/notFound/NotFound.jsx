import React from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom";
function NotFound() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="ContainerNotFound" >
      <img className="Toffee" src="images\thirsty_toopi-ai-brush-removebg-2vdpf8h5 (1).png" alt="" />
      <div className="MessageDiv">
      <h1 style={{marginBottom:0}} className="Message404" >404</h1>
      <p>Oops! this are not the pages you are looking for </p>
      <Link to="/home">
      <button className="btnGoBack" >Back to our main page</button>
      </Link>
      </div>
    </div>
  );
}
export default NotFound;