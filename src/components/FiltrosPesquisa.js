import EscolherTipo from "./EscolherTipo";
import EscolherPesquisa from "./EscolherPesquisa";
import PesquisarPorNome from "./PesquisarPorNome";
import EscolherRegiao from "./EscolherRegiao";
import EscolherIdioma from "./EscolherIdioma";

export default function FiltrosPesquisa({
  setSearchValue,
  onChangeTipoPesquisa,
  onChangeReconhecidos,
}) {
  function handlePesquisaNomeChange(value) {
    setSearchValue(value);
  }

  function handleTipoPesquisaChange(value) {
    onChangeTipoPesquisa(value);
  }

  function handleReconhecidoChange(value) {
    onChangeReconhecidos(value);
  }

  return (
    <div className="filtros-pesquisa">
      <div className="combobox-group">
        <EscolherRegiao />
        <EscolherIdioma />
      </div>
      <PesquisarPorNome onChangePesquisaNome={handlePesquisaNomeChange} />
      <span className="separador"></span>
      <EscolherPesquisa onChangeTipoPesquisa={handleTipoPesquisaChange} />
      <span className="separador"></span>
      <EscolherTipo onChangeReconhecidos={handleReconhecidoChange} />
    </div>
  );
}
