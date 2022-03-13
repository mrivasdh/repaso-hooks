import React, { useState, createContext, useReducer } from "react";
import { REDUCER_INIT } from "../constants/reducer";
import reducer from "../reducer/MainReducer";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, REDUCER_INIT);

  const [modoVista, setModoVista] = useState(true);

  const agregarAlerta = (nuevaAlerta) => {
    dispatch({ type: "addCharacter", payload: nuevaAlerta });
  };

  const eliminarAlerta = (idAlerta) => {
    dispatch({ type: "removeCharacter", payload: idAlerta });
  };

  const agregarPersonaje = (nuevoPersonaje) => {
    dispatch({ type: "addCharacter", payload: nuevoPersonaje });
  };

  const eliminarPersonaje = (idPersonaje) => {
    dispatch({ type: "removeCharacter", payload: idPersonaje });
  };

  const cambiarModo = () => {
    setModoVista(!modoVista);
  };

  return (
    <MainContext.Provider
      value={{
        alertas: state.alerts,
        personajes: state.characters,
        modoVista,
        agregarAlerta,
        eliminarAlerta,
        agregarPersonaje,
        eliminarPersonaje,
        cambiarModo
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
