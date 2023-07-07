import React from "react";
import "./SideBar.css";
import Cloud from "./public/img/cloud-background.png";
import Image from "next/image";



// coneccion 1 pajes.js

function SideBar(props) {
    return (
        <nav id="navBar">
            <button id="btnClose" onClick={props.fun}>
                    X
                </button> 
              
          
            {/* //   <h1 style={{ color: "white" }}>Nav</h1> */}
        </nav>
        //  ___________________Funciona parece y desaparece el nav con esta fórmula_______
        // Estos símbolos extraños así van si se reacomodan
        // no funciona el código- me di cuenta una hora después-
    );
}

export default SideBar;
