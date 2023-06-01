import "./Seletores.css";

export default function EscolherIdioma() {
  return (
    <div className="seletor-idiomas">
      <label htmlFor="combobox-idiomas" className="label-comboboxes">
        Selecionar idioma
      </label>
      <select
        name="idiomas"
        className="combobox-filtros"
        id="combobox-idiomas"
        defaultValue={"Todas"}
      >
        <option value="Todos">Todos</option>
        <option value="German">Alemão</option>
        <option value="Arabic">Árabe</option>
        <option value="Chinese">Chinês</option>
        <option value="Korean">Coreano</option>
        <option value="Croatian">Croata</option>
        <option value="Danish">Dinamarquês</option>
        <option value="Spanish">Espanhol</option>
        <option value="French">Francês</option>
        <option value="Greek">Grego</option>
        <option value="Dutch">Holandês</option>
        <option value="English">Inglês</option>
        <option value="Italian">Italiano</option>
        <option value="Japanese">Japonês</option>
        <option value="Latin">Latin</option>
        <option value="Norwegian">Norueguês</option>
        <option value="Polish">Polonês</option>
        <option value="Portuguese">Português</option>
        <option value="Russian">Russo</option>
        <option value="Swedish">Sueco</option>
        <option value="Turkish">Turco</option>
      </select>
    </div>
  );
}
