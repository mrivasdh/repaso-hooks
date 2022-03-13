const reducer = (state, action) => {
  switch (action.type) {
    case "addCharacter":
      return {
        characters: [...state.characters, action.payload],
        alerts: [...state.alerts]
      };
    case "removeCharacter":
      const personajesFiltrados = state.characters.filter(
        (personaje) => personaje.id !== action.payload
      );
      return {
        characters: [...personajesFiltrados],
        alerts: [...state.alerts]
      };
    case "addAlert":
      return {
        characters: [...state.characters],
        alerts: [...state.alerts, action.payload]
      };
    case "removeAlert":
      const alertasFiltradas = state.characters.filter(
        (alerta) => alerta.id !== action.payload
      );
      return {
        characters: [...state.characters],
        alerts: [...alertasFiltradas]
      };
    default:
      return state;
  }
};

export default reducer;
