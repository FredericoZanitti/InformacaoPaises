import "./App.css";
import Cabecalho from "./components/Cabecalho";
import InformacaoPaises from "./components/InformacaoPaises";
import SeletorRegiao from "./components/SeletorRegiao";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <SeletorRegiao />
      <InformacaoPaises />
    </div>
  );
}

export default App;
