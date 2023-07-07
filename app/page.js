"use client";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
// import { handleClientScriptLoad } from "next/script";

function CurrentLocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
      fill="white"
    >
      <path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z" />
    </svg>
  );
}
function LocationIcon(

) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}


export default function Home() {
  /* Esta sección sirve para organizar la barra lateral izquierda 
 como padre e hijo en donde se utiliza un use State si es falso 
 no aparece y si es true aparece ayudado por el código -nav- 
 con líneas 
 señalado en la parte de abajo*/
  //  ___________________Funciona parece y desaparece el nav con esta fórmula_______
  const [sideBar, SetSideBar] = useState(false);
 //metodologia para jalar las api key
  const [current, setCurrent] = useState([])
  
useEffect(() => {
  const getData = async () => {
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={a096a35659ffe7908d3653f86da19bfc}`)
  if(res.ok == true) {
    const data = await res.json();
    setCurrent(data);

  }
  };
  getData();
})
console.log(current)

  // Manejo del posicionamiento aparece desaparece con un estado
  function handleSideBar() {
    SetSideBar(!sideBar);
  }

  return (
    <main id="container">
      <section id="currentWheather">
      {current === [] ? "" : (
        <>
        
        <div id="navBar-btns">
          {/* coneccion 1 SideBar.js*/}
          <button id="btnSearch" onClick={handleSideBar}>
            Search for places
          </button>
          <button id="btnLocation">
            <CurrentLocationIcon />
          </button>
        </div>

        <div id="navBar-img">
        <img src="./img/Cloud-background.png" alt="fondo nubes" />
        </div>

        <div id="navBar-data">
 
          <p>
            <span>{/*current.main.temp*/}15</span> °C
          </p>
          <p>Shower</p>
          <p>
            <span>Today</span>
            <span>.</span>
            <span>Fri. 5 Jun</span>
          </p>
          <p>
            <span><LocationIcon /></span>
            <span>{/*current.city*/}Helsinki</span>
          </p>
        </div>

        </>
      )}


       
        {/* <SideBar fun={handleSideBar} /> 
        {sideBar === true ? (
        ) : (
          ""
        )} */}

      </section>
      <section id="forecast">
        
      </section>

    </main>
  );
}

