import "./Seletores.css";

export default function ClassificarPor() {
  return (
    <div className="seletor-classificacao">
      <label htmlFor="combobox-classificacao" className="label-comboboxes">
        Classificar por
      </label>
      <select
        name="classificacao"
        className="combobox-filtros"
        id="combobox-classificacao"
        defaultValue={"Nenhum"}
      >
        <option value="Nenhum">Nenhum</option>
        <option value="area">Área</option>
        <option value="population">População</option>
      </select>
    </div>
  );
}
