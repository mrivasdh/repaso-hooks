import AddButton from "./components/AddButton";
import Alert from "./components/Alert";
import Card from "./components/Card";
import MainContextProvider from "./context/MainContext";
import "./styles/global.css";

export default function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Alert />
        <Card />
        <AddButton />
      </MainContextProvider>
    </div>
  );
}
