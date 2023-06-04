import "./App.css";
import Cabecalho from "./components/Cabecalho";
import InformacaoPaises from "./components/InformacaoPaises";
import FiltrosPesquisa from "./components/FiltrosPesquisa";
import { useState, useEffect } from "react"; // Importe o useState do React

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [tipoPesquisa, setTipoPesquisa] = useState("q");
  const [reconhecido, setReconhecido] = useState("t");
  const [ordem, setOrdem] = useState("a");

  useEffect(() => {
    //marcação default dos combos de pesquisa por nome e nação independente
    const pesq = document.getElementById("qualquerparte");
    pesq.checked = true;
    const rec = document.getElementById("todas");
    rec.checked = true;
    const ord = document.getElementById("descendente");
    ord.checked = true;
  }, []);

  function handleTipoPesquisaChange(value) {
    setTipoPesquisa(value);
  }

  function handleReconhecidoChange(value) {
    setReconhecido(value);
  }

  function handleOrdemChange(value) {
    setOrdem(value);
  }

  return (
    <div className="App">
      <Cabecalho />
      <FiltrosPesquisa
        setSearchValue={setSearchValue}
        onChangeTipoPesquisa={handleTipoPesquisaChange}
        onChangeReconhecidos={handleReconhecidoChange}
        onChangeOrdem={handleOrdemChange}
      />
      <InformacaoPaises
        searchValue={searchValue}
        tipoPesquisa={tipoPesquisa}
        reconhecido={reconhecido}
        ordem={ordem}
      />
    </div>
  );
}

export default App;
