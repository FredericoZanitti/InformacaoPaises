import EscolherTipo from "./EscolherTipo";
import EscolherPesquisa from "./EscolherPesquisa";
import PesquisarPorNome from "./PesquisarPorNome";
import EscolherRegiao from "./EscolherRegiao";
import EscolherIdioma from "./EscolherIdioma";
import ClassificarPor from "./ClassificarPor";
import EscolherOrdem from "./EscolherOrdem";

export default function FiltrosPesquisa({
  setSearchValue,
  onChangeTipoPesquisa,
  onChangeReconhecidos,
  onChangeOrdem,
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

  function handleOrdemChange(value) {
    onChangeOrdem(value);
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
      <ClassificarPor />
      <EscolherOrdem onChangeOrdem={handleOrdemChange} />
      <EscolherTipo onChangeReconhecidos={handleReconhecidoChange} />
      <div className="copyright">
        Copyright © 2023 <br /> Frederico Zanitti Silva
      </div>
    </div>
  );
}
