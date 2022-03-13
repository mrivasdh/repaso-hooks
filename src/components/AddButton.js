import { useContext } from "react";
import "../styles/addButton.css";
import { MainContext } from "../context/MainContext";

const AddButton = () => {
  const { modoVista, cambiarModo } = useContext(MainContext);
  return (
    <span className="add" onClick={cambiarModo}>
      {" "}
      {modoVista ? "+" : "X"}{" "}
    </span>
  );
};

export default AddButton;
