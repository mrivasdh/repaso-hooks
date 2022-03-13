import React, { useState, createContext } from "react";
import "../styles/character.css";

const Character = ({ personaje }) => {
  return (
    <div className="charWrapper">
      <div className="content">
        <div className="imagenWrapper">
          <img src={personaje.img} alt={personaje.nombre} />
        </div>
        <div className="infoWrapper">
          <div className="title">
            <div className="nombreWrapper">{personaje.nombre}</div>
            <div className="apellidoWrapper">{personaje.apellido}</div>
          </div>
          <div className="frase">"{personaje.frasePreferida}"</div>
        </div>
      </div>
    </div>
  );
};

export default Character;
