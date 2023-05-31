import EscolherTipo from "./EscolherTipo";
import EscolherPesquisa from "./EscolherPesquisa";

export default function SeletorRegiao({
  setSearchValue,
  onChangeTipoPesquisa,
  onChangeReconhecidos,
}) {
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleTipoPesquisaChange(value) {
    onChangeTipoPesquisa(value);
  }

  function handleReconhecidoChange(value) {
    onChangeReconhecidos(value);
  }

  return (
    <div className="selecionar-regiao">
      <select
        name="regioes"
        className="seletor-regioes"
        id="seletor-regioes"
        defaultValue={"Todas"}
      >
        <option value="Todas">Todos</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Antarctic">Antártida</option>
        <option value="Asia">Ásia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
      <input
        type="search"
        name="search"
        id="search"
        className="pesquisa-pais"
        placeholder="Pesquisar por nome..."
        onChange={handleChange}
      />
      <span className="separador"></span>
      <EscolherPesquisa onChangeTipoPesquisa={handleTipoPesquisaChange} />
      <span className="separador"></span>
      <EscolherTipo onChangeReconhecidos={handleReconhecidoChange} />
    </div>
  );
}
