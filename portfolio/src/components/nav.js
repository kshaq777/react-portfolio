import React from "react";
import "../styles/styles.css";
import { Link, useLocation } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  const location = useLocation();
  const style = {
    text: {color: "#40d092"}
  }

  return (
    <nav className="navbar navbar-expand-lg main-nav navbar-dark">
    <div className="navbar-brand">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} style={style.text}>
          kshaq777
        </Link>
      </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="nav-item">   
        <Link to="/about" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link></div>
        <div className="nav-item">   
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link></div>  
        <div className="nav-item">   
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link></div>
      </div>
    </div>
  </nav>

  );
}

export default Nav;
