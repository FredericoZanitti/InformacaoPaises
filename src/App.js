import "./App.css";
import Cabecalho from "./components/Cabecalho";
import InformacaoPaises from "./components/InformacaoPaises";
import SeletorRegiao from "./components/SeletorRegiao";
import { useState } from "react"; // Importe o useState do React

function App() {
  const [searchValue, setSearchValue] = useState(""); // Defina o estado para searchValue
  const [tipo, setTipo] = useState("qq"); // Defina o estado para tipo

  return (
    <div className="App">
      <Cabecalho />
      <SeletorRegiao setSearchValue={setSearchValue} setTipo={setTipo} />{" "}
      {/* Passe setSearchValue como prop */}
      <InformacaoPaises searchValue={searchValue} tipo={tipo} />
    </div>
  );
}

export default App;
