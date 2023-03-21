import "./SideBar.css";

import React, { useEffect, useState } from "react";
import Measurements from "./Measurements";
import Collect from "./Collect"
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
    // Parent div
    <div className="left" id="section">
    {/*************** Customize Section: Start ****************/}
      <div className="customize-section">
        {/*************** 1st compone ****************/}
          <h4>Customize</h4>
          <div className="customize-section-buttons">
            <div id="button1">
              <button onClick={handleDarkModeToggle}>
                {darkMode ? <SunDay /> : <MoonNight />}
              </button>
            </div>
            <div>
              <button id="btn1">Reset</button>
            </div>
          </div>
      </div>
    {/*************** Customize Section: End ****************/}

    {/******************************** Measurements Section: End ***********************/}
          <Measurements />
    {/******************************** Measurements Section: End ***********************/}

    {/******************************** Collect Section: End ***********************/}
          <Collect />
    {/******************************** Collect Section: End ***********************/}
    </div>
    
  )
}

export default SideBar;