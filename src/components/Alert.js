import { useContext, useState } from "react";
import "../styles/alert.css";
import { MainContext } from "../context/MainContext";

const Alert = () => {
  const { alertas, eliminarAlerta } = useContext(MainContext);

  const byeByeAlerta = (textoAlerta) => eliminarAlerta(textoAlerta);
  const renderAlerta = (textoAlerta, index = 0) => (
    <div
      key={index}
      className="alerta"
      onClick={() => {
        byeByeAlerta(textoAlerta);
      }}
    >
      {textoAlerta}
    </div>
  );
  return (
    <div className="alertWrapper">
      {alertas.map((alerta, indice) => renderAlerta(alerta, indice))}
    </div>
  );
};

export default Alert;
