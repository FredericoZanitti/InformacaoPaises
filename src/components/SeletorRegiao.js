export default function SeletorRegiao() {
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
    </div>
  );
}
