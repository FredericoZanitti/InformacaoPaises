import "./Seletores.css";

export default function EscolherRegiao() {
  return (
    <div className="seletor-regiao">
      <label htmlFor="combobox-regioes" className="label-comboboxes">
        Selecionar Continente
      </label>
      <select
        name="regioes"
        className="combobox-filtros"
        id="combobox-regioes"
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
    </div>
  );
}
