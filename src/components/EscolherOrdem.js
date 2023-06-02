import "./Radios.css";

export default function EscolherOrdem({ onChangeOrdem }) {
  function handleChange(event) {
    onChangeOrdem(event.target.value);
  }

  return (
    <div className="escolher-tipo" id="esconder-ordem">
      <label className="input-label">Ordem de Classificação</label>
      <input
        type="radio"
        className="input-radio"
        name="ordem"
        id="ascendente"
        value="a"
        onChange={handleChange}
      />
      <label htmlFor="ascendente" className="input-label">
        <div className="radio-btn"></div>
        <span>Ascendentes</span>
      </label>
      <input
        type="radio"
        className="input-radio"
        name="ordem"
        id="descendente"
        value="d"
        onChange={handleChange}
      />
      <label htmlFor="descendente" className="input-label">
        <div className="radio-btn"></div>
        <span>Descendentes</span>
      </label>
    </div>
  );
}
