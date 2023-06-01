import "./App.css";
import Cabecalho from "./components/Cabecalho";
import InformacaoPaises from "./components/InformacaoPaises";
import FiltrosPesquisa from "./components/FiltrosPesquisa";
import { useState, useEffect } from "react"; // Importe o useState do React

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [tipoPesquisa, setTipoPesquisa] = useState("q");
  const [reconhecido, setReconhecido] = useState("t");

  useEffect(() => {
    //marcação default dos combos de pesquisa por nome e nação independente
    const pesq = document.getElementById("qualquerparte");
    pesq.checked = true;
    const rec = document.getElementById("todas");
    rec.checked = true;
  }, []);

  function handleTipoPesquisaChange(value) {
    setTipoPesquisa(value);
  }

  function handleReconhecidoChange(value) {
    setReconhecido(value);
  }

  return (
    <div className="App">
      <Cabecalho />
      <FiltrosPesquisa
        setSearchValue={setSearchValue}
        onChangeTipoPesquisa={handleTipoPesquisaChange}
        onChangeReconhecidos={handleReconhecidoChange}
      />
      <InformacaoPaises
        searchValue={searchValue}
        tipoPesquisa={tipoPesquisa}
        reconhecido={reconhecido}
      />
    </div>
  );
}

export default App;
