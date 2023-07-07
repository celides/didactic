"use client";
import { useState } from "react";
import SideBar from "./components/SideBar";
// import { handleClientScriptLoad } from "next/script";

export default function Home() {
 /* Esta sección sirve para organizar la barra lateral izquierda 
 como padre e hijo en donde se utiliza un use State si es falso 
 no aparece y si es true aparece ayudado por el código -nav- 
 con líneas 
 señalado en la parte de abajo*/
//  ___________________Funciona parece y desaparece el nav con esta fórmula_______
  const [sideBar, SetSideBar] = useState(false);
  // Manejo del posicionamiento aparece desaparece con un estado
  function handleSideBar () {
SetSideBar(!sideBar);
}

return (
    <main id="container">
      <section id="currentWheather">
      {/* coneccion 1 SideBar.js*/}
        <button id="btnSearch" onClick={handleSideBar}>Search for places </button>
        {/* <button id="btnSearch">Search for places</button> */}
       
       {/* Operador ternario */}
       
        {sideBar === true ? (
          <sideBar fun={handleSideBar}/>
     
     // Esta parte es la que aparece y desaparece______________________ 
      //  <nav id="navBar">
      //   <button id="btnClose" onClick={handleSideBar}>X</button>
      //     <h1 style={{ color: "white" }}>Nav</h1>
      //   </nav>
      //   //  ___________________Funciona parece y desaparece el nav con esta fórmula_______
      //   // Estos símbolos extraños así van si se reacomodan 
      //   // no funciona el código- me di cuenta una hora después-
        ) :( 
          "" 
          )}
      </section>
      <section id="forecast"></section>
    </main>
  );
}

