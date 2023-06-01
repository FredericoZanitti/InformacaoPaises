export default function PesquisarPorNome({ onChangePesquisaNome }) {
  function handleChange(event) {
    onChangePesquisaNome(event.target.value);
  }

  return (
    <div className="pesquisa-pais-nome">
      <label htmlFor="search" className="pesquisa-pais-nome-label">
        Pesquise um país pelo nome
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
