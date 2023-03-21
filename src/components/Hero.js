import "./Hero.css";

import React from "react";
import { Link } from "react-router-dom";
import { CodeTechDev, Download } from "react-basicons";

const Hero = () => {
  return (
        <div className="hero">
            <div className="content">
                <h1>Basic icons for product design & development</h1>
                <p>326+ icons . Growing collection . 24 x 24 pixel perfect</p>
            </div>
            <div className="button-container">
              <Link to="/downloadall" className="btn"> <Download  size={16} style={{color: "#fff"}} />  Download all </Link>
              <Link to="documentation" className="btn-light"><CodeTechDev  size={16} style={{color: "#fff"}} />  Documentation </Link>
            </div>
        </div>
  );
}

export default Hero;