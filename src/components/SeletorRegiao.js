export default function SeletorRegiao({ setSearchValue, setTipo }) {
  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  function handleChangeTipo(event) {
    setTipo(event.target.value);
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

      <form className="container">
        <label>
          <input
            type="radio"
            name="radio"
            id="radio"
            value="in"
            onChange={handleChangeTipo}
          />
          Início
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            id="radio"
            value="qq"
            onChange={handleChangeTipo}
          />
          Qualquer parte
        </label>
      </form>
    </div>
  );
}
