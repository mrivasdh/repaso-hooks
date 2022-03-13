import React, { useState, useContext } from "react";
import { MainContext } from "../context/MainContext";

import "../styles/form.css";

const Form = () => {
  const { agregarPersonaje, cambiarModo } = useContext(MainContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [frasePreferida, setFrasePreferida] = useState("");
  const [imagen, setImagen] = useState("");

  const createNewCharacter = () => {
    agregarPersonaje({
      nombre,
      apellido,
      frasePreferida,
      imagen
    });
    setNombre("");
    setApellido("");
    setFrasePreferida("");
    setImagen("");
    cambiarModo();
  };

  return (
    <div>
      <h2>Crear nuevo personaje</h2>
      <div className="formWrapper">
        <input
          id="nombre"
          type="text"
          className="formInput"
          placeholder="Nombre del personaje"
          onChange={(event) => {
            setNombre(event.target.value);
          }}
          value={nombre}
        />
        <input
          id="apellido"
          type="text"
          className="formInput"
          placeholder="Apellido del personaje"
          onChange={(event) => {
            setApellido(event.target.value);
          }}
          value={apellido}
        />
        <input
          id="fraseFavorita"
          type="text"
          className="formInput"
          placeholder="Frase favorita del presonaje"
          onChange={(event) => {
            setFrasePreferida(event.target.value);
          }}
          value={frasePreferida}
        />

        <input
          id="imagen"
          type="text"
          className="formInput"
          placeholder="Imagen o foto del personaje"
          onChange={(event) => {
            setImagen(event.target.value);
          }}
          value={imagen}
        />
      </div>
      <button className="fancyButton" onClick={createNewCharacter}>
        Guardar!
      </button>
    </div>
  );
};

export default Form;
