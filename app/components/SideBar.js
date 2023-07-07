import React from "react";
import"./SideBar.css";   

// coneccion 1 pajes.js

function SideBar(props){
    return (
    <nav id="navBar">
      
        <div id="navBar-ntns">
        <button id="btnClose" onClick={props.fun}>X</button>
        </div>
        <div>
            <image src=""
        </div>
        <div></div>

    <button id="btnClose" onClick={handleSideBar}>X</button>
      <h1 style={{ color: "white" }}>Nav</h1>
    </nav>
    //  ___________________Funciona parece y desaparece el nav con esta fórmula_______
    // Estos símbolos extraños así van si se reacomodan 
    // no funciona el código- me di cuenta una hora después-
    )
}

export default SideBar;