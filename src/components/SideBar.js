import "./SideBar.css";

import React, { useEffect, useState } from "react";
import { SunDay } from "react-basicons";
import { MoonNight } from "react-basicons";

const SideBar = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect (() => {
    const body =document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  
  
  return (
    <div className="left" id="section">
        <h4 className="col">Customize</h4>

        <div id="button1">
          <button onClick={handleDarkModeToggle}>
            {darkMode ? <SunDay /> : <MoonNight />}
          </button>
        </div>

        <div>
          <button id="btn1">Reset</button>
        </div>
    </div>
    
  )
}

export default SideBar;