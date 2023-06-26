export default function PesquisarPorCapital({ onChangePesquisaCapital }) {
  function handleChange(event) {
    onChangePesquisaCapital(event.target.value);
  }

  return (
    <div className="pesquisa-pais-nome">
      <label htmlFor="search" className="pesquisa-pais-nome-label">
        Pesquise um país pela sua capital
      </label>
      <input
        type="search"
        name="search"
        id="search"
        className="pesquisa-pais-input"
        placeholder="Digite parte do nome..."
        onChange={handleChange}
      />
    </div>
  );
}
