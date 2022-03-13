import React, { useState, createContext, useContext } from "react";
import { MainContext } from "../context/MainContext";
import "../styles/card.css";
import Character from "./Character";
import Form from "./Form";

const Card = () => {
  const { personajes, modoVista, eliminarPersonaje } = useContext(MainContext);
  const renderChars = () => {
    return personajes.map((cadaPersonaje) => {
      return (
        <div
          onClick={() => {
            eliminarPersonaje(cadaPersonaje);
          }}
        >
          <Character personaje={cadaPersonaje} />
        </div>
      );
    });
  };
  return (
    <div className="card">
      <div className="content">{modoVista ? renderChars() : <Form />}</div>
    </div>
  );
};

export default Card;
