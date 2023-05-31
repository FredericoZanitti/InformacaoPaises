import "./Radios.css";

export default function EscolherTipo({ onChangeReconhecidos }) {
  function handleChange(event) {
    onChangeReconhecidos(event.target.value);
  }

  return (
    <div className="escolher-tipo">
      <input
        type="radio"
        className="input-radio"
        name="reconhecido"
        id="reconhecido"
        value="s"
        onChange={handleChange}
      />
      <label htmlFor="reconhecido" className="input-label">
        <div className="radio-btn"></div>
        <span>Nações Reconhecidas</span>
      </label>

      <input
        type="radio"
        className="input-radio"
        name="reconhecido"
        id="naoreconhecido"
        value="n"
        onChange={handleChange}
      />
      <label htmlFor="naoreconhecido" className="input-label">
        <div className="radio-btn"></div>
        <span>Nações não Reconhecidas</span>
      </label>

      <input
        type="radio"
        className="input-radio"
        name="reconhecido"
        id="todas"
        value="t"
        onChange={handleChange}
      />
      <label htmlFor="todas" className="input-label">
        <div className="radio-btn"></div>
        <span>Todos</span>
      </label>
    </div>
  );
}
