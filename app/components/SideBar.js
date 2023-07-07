import React from "react";
import "./SideBar.css";

// coneccion 1 pajes.js

function SideBar(props) {
  return (
    <nav id="navBar">
      
      <div id="navBar-btns">
        <button id="btnClose" onClick={props.fun}>X</button>
      </div>
     
      <div id="navBar-img">
        <img
          src="./images/Cloud-background.png"
          alt="fondo nubes" />
      </div>


      <div id="navBar-data">
        <p>
          <span>Today</span>
          <span>.</span>
          <span>Fri, 5 Jun</span>
        </p>
        <p>
          <span>X</span>
          <span>Helsinki</span>
        </p>
      </div>
      {/* //   <h1 style={{ color: "white" }}>Nav</h1> */}
    </nav>
    //  ___________________Funciona parece y desaparece el nav con esta fórmula_______
    // Estos símbolos extraños así van si se reacomodan
    // no funciona el código- me di cuenta una hora después-
  );
}

export default SideBar;
