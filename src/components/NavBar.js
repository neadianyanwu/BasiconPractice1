import "./NavBar.css";

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
        <h3>
            <Link to="/" className="logo">BASICONS</Link>
        </h3>
    </div>
  )
}

export default NavBar;