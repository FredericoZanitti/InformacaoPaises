import "./Radios.css";

export default function EscolherTipo({ onChangeTipoPesquisa }) {
  function handleChange(event) {
    onChangeTipoPesquisa(event.target.value);
  }

  return (
    <div className="escolher-tipo">
      <label htmlFor="inicio" className="parte-nome-label">
        Pesquisar nome
      </label>
      <input
        type="radio"
        className="input-radio"
        name="tipopesquisa"
        id="inicio"
        value="i"
        onChange={handleChange}
      />
      <label htmlFor="inicio" className="input-label">
        <div className="radio-btn"></div>
        <span>Pelo início</span>
      </label>

      <input
        type="radio"
        className="input-radio"
        name="tipopesquisa"
        id="qualquerparte"
        value="q"
        onChange={handleChange}
      />
      <label htmlFor="qualquerparte" className="input-label">
        <div className="radio-btn"></div>
        <span>Por qualquer parte</span>
      </label>
    </div>
  );
}
