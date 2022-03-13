import { RICK } from "./img";

export const FORM_INITIAL_VALUE = [
  { nombre: "", apellido: "", frasePreferida: "", img: "" }
];

const PERSONAJE_PRINCIPAL = {
  nombre: "Rick",
  apellido: "Sanchez",
  img: RICK,
  frasePreferida: "Daba daba dup dup"
};

const ALERTA_PRINCIPAL = {
  id: 1,
  title: "Hey soy una alerta re bonita"
};

export const REDUCER_INIT = {
  characters: [PERSONAJE_PRINCIPAL],
  alerts: [ALERTA_PRINCIPAL]
};
