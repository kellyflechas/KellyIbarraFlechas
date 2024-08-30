import React, { Component } from 'react';
import gato from "./../img/gatito.png";
import perroO from "./../img/perrofooter.png";

function Nosotros() {
    return (
        <div className="horizontal-container">
        <div className="box left-box">
         <div className='imagen-dog'> <img src={perroO} alt=""/></div>
        <div className='text-dog'>
        <h2>Bienestar</h2>
        <h4>Los mejores productos para tu mascota.</h4>
        </div>
          
          
        </div>
        <div className="box right-box">
         <div className='imagen-cat'> <img src={gato} alt=""/></div>
         <div className='text-cat'>
        <h2>Servicio de Peluqueria</h2>
        <h4>¡Es hora de que tu mascota brille!.</h4>
        </div>
      
      </div>
      </div>
      
     
    )
}   

export default Nosotros;
