import "./App.css";
import Cabecalho from "./components/Cabecalho";
import InformacaoPaises from "./components/InformacaoPaises";
import SeletorRegiao from "./components/SeletorRegiao";
import { useState } from "react"; // Importe o useState do React

function App() {
  const [searchValue, setSearchValue] = useState(""); // Defina o estado para searchValue

  return (
    <div className="App">
      <Cabecalho />
      <SeletorRegiao setSearchValue={setSearchValue} />{" "}
      {/* Passe setSearchValue como prop */}
      <InformacaoPaises searchValue={searchValue} />
    </div>
  );
}

export default App;
