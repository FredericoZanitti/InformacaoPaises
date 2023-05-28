import React from "react";
import "./Modal.css";

//esse children pode ser qualquer coisa que será passada no modal: um objeto, um botao, um paragrafo, ec.
export default function Modal({
  isOpen,
  setModalOpen,
  setCodigoIndividual,
  setData,
  children,
}) {
  if (isOpen) {
    function retornarMoedas(currencies) {
      let output = "";

      for (let currencyCode in currencies) {
        if (currencies.hasOwnProperty(currencyCode)) {
          let currency = currencies[currencyCode];
          output += `( ${currencyCode} ) ${currency.name}, `;
        }
      }
      // Removendo a vírgula extra no final
      output = output.slice(0, -2);
      return output;
    }

    function buscarNomeFronteiras(obj, pais) {
      let output = "";

      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          const item = obj[key];

          if (item.borders) {
            if (item.borders.includes(pais)) {
              output += `${item.name.common}, `;
            }
          }
        }
      }

      // Removendo a vírgula extra no final
      output === "" ? (output = "N/A") : (output = output.slice(0, -2));
      return output;
    }

    function buscarIdiomas(lang) {
      let output = "";

      for (const [languageCode, languageName] of Object.entries(lang)) {
        output += `${languageName}, `;
      }
      // Removendo a vírgula extra no final
      output = output.slice(0, -2);
      return output;
    }

    return (
      <div className="popup-pais">
        <div className="popup-pais-interno">
          <div>{children}</div>

          <div className="card">
            <div className="bandeira-nome-card">
              <img
                className="bandeira-card"
                src={setCodigoIndividual.flags.png}
                alt={setCodigoIndividual.flags.alt}
              />

              <p className="texto-band-card">
                <b>Nome Oficial</b>
                <br />
                {setCodigoIndividual.name.official}
              </p>
              <p className="texto-band-card">
                <b>Nome Popular</b>
                <br />
                {setCodigoIndividual.name.common}
              </p>
              <p className="texto-band-card-onu">
                {!setCodigoIndividual.independent
                  ? "*Não reconhecido pela ONU"
                  : ""}
              </p>
            </div>
            <div className="texto-card">
              <div className="nomes-card">
                {setCodigoIndividual.capital &&
                setCodigoIndividual.capital.length > 0 ? (
                  <p>
                    <b>
                      {setCodigoIndividual.capital.length === 1
                        ? "Capital"
                        : "Capitais"}
                    </b>
                    : {setCodigoIndividual.capital.join(", ")}
                  </p>
                ) : (
                  <p>
                    <b>Capital:</b> N/A
                  </p>
                )}
                <p>
                  <b>População:</b>{" "}
                  {setCodigoIndividual.population.toLocaleString()}
                </p>
                <p>
                  <b>Moeda:</b> {retornarMoedas(setCodigoIndividual.currencies)}
                </p>
                <p>
                  <b>Idiomas:</b> {buscarIdiomas(setCodigoIndividual.languages)}{" "}
                </p>
                <p>
                  <b>Código Internacional:</b> {setCodigoIndividual.cca3}
                </p>
                <b>Área: </b>
                {setCodigoIndividual.area.toLocaleString()} km²
                <p>
                  <b>Região:</b> {setCodigoIndividual.region}
                </p>
                <p>
                  <b>Continente:</b>{" "}
                  {setCodigoIndividual.continents &&
                  setCodigoIndividual.continents.length > 0
                    ? setCodigoIndividual.continents[0]
                    : "Continente: N/A"}
                </p>
                {setCodigoIndividual.timezones &&
                setCodigoIndividual.timezones.length > 0 ? (
                  <p>
                    <b>Time Zones:</b>{" "}
                    {setCodigoIndividual.timezones.join(", ")}
                  </p>
                ) : (
                  <p>
                    <b>Time Zones:</b> N/A
                  </p>
                )}
                <p>
                  <b>Fronteiras:</b>{" "}
                  {buscarNomeFronteiras(setData, setCodigoIndividual.cca3)}
                </p>
              </div>
            </div>
          </div>

          <button onClick={() => setModalOpen(!isOpen)}>Fechar</button>
        </div>
      </div>
    );
  }

  return null;
}
