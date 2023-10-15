import React, { useState } from "react";
import SunIcon from "./Sun";
import MoonIcon from "./Moon";
import "./DarkMode.css";

const DarkMode = () => {
  
    const SetLightMode= () => {
      document.querySelector("body").setAttribute("data-theme", "light");
    } 
    const SetDarkMode= () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } 
   const toggleTheme=(e)=>{
     if(e.target.checked)SetDarkMode();
     else SetLightMode()
   }
  
  


  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <SunIcon />
        <MoonIcon/>
      </label>
    </div>
  );
};

export default DarkMode;
