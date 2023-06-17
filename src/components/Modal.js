import React, { useEffect, useState } from "react";
import "./Modal.css";

//esse children pode ser qualquer coisa que será passada no modal: um objeto, um botao, um paragrafo, ec.
export default function Modal({
  isOpen,
  setModalOpen,
  setCodigoIndividual,
  setData,
  children,
}) {
  const [onuReconhecido, setOnuReconhecido] = useState(true);

  //precisa definir um useEffect porque a classe só deve ser adicionada
  //quando renderizar o componente, por isso o useEffect monitora o
  //setCodigoIndividual.independent para ter efeito somente quando
  //este for alterado de fato.
  useEffect(() => {
    function verificarReconhecimentoOnu(rec) {
      if (rec) {
        setOnuReconhecido(false);
      } else {
        setOnuReconhecido(true);
      }
    }

    verificarReconhecimentoOnu(setCodigoIndividual.independent);
  }, [setCodigoIndividual.independent]);

  //fechar janela com o ESC
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        // Verifica se a tecla pressionada é o "ESC" (código 27)
        if (isOpen) {
          setModalOpen(false); // Fecha a janela do modal
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown); // Adiciona o event listener

    return () => {
      document.removeEventListener("keydown", handleKeyDown); // Remove o event listener ao desmontar o componente
    };
  }, [isOpen, setModalOpen]);

  if (isOpen) {
    function retornarMoedas(currencies) {
      let output = "";

      if (currencies) {
        for (let currencyCode in currencies) {
          if (currencies.hasOwnProperty(currencyCode)) {
            let currency = currencies[currencyCode];
            output += `( ${currencyCode} ) ${currency.name}, `;
          }
        }
        // Removendo a vírgula extra no final
        output = output.slice(0, -2);
      } else output = "N/A";

      return output;
    }

    function buscarNomeFronteiras(obj, pais) {
      let output = "";

      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          const item = obj[key];

          if (item.borders) {
            if (item.borders.includes(pais)) {
              output += `${item.translations.por.common}, `;
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

      if (lang) {
        for (const [languageCode, languageName] of Object.entries(lang)) {
          output += `${languageName}, `;
        }
        // Removendo a vírgula extra no final
        output = output.slice(0, -2);
      } else output = "N/A";
      return output;
    }

    function buscarCodigoInternacional(item) {
      if (!(item.cca3 === "")) {
        return item.cca3;
      } else if (!(item.cca2 === "")) {
        return item.cca2;
      } else return "N/A";
    }

    return (
      <div className="popup-pais">
        <div className="popup-pais-interno">
          <div>{children}</div>

          <div className="card">
            <div className="bandeira-card">
              <img
                className="bandeira-card-item"
                src={setCodigoIndividual.flags.png}
                alt={setCodigoIndividual.flags.alt}
              />

              <span>
                <b>Nome Oficial</b>
                <br />
                {setCodigoIndividual.name.official}
              </span>
              <span>
                <b>Nome Popular</b>
                <br />
                {setCodigoIndividual.name.common}
              </span>
              <span
                className={`texto-band-card-onu ${
                  onuReconhecido ? "" : "visibilidade"
                }`}
              >
                <p className="rec-onu">
                  *Não reconhecido pela ONU como uma nação independente.
                </p>
              </span>
            </div>
            <div className="texto-card">
              {setCodigoIndividual.capital &&
              setCodigoIndividual.capital.length > 0 ? (
                <span>
                  <b>
                    {setCodigoIndividual.capital.length === 1
                      ? "Capital"
                      : "Capitais"}
                  </b>
                  : {setCodigoIndividual.capital.join(", ")}
                </span>
              ) : (
                <span>
                  <b>Capital:</b> N/A
                </span>
              )}
              <span>
                <b>População:</b>{" "}
                {setCodigoIndividual.population.toLocaleString()}
              </span>
              <span>
                <b>Moeda:</b> {retornarMoedas(setCodigoIndividual.currencies)}
              </span>
              <span>
                <b>Idiomas:</b> {buscarIdiomas(setCodigoIndividual.languages)}{" "}
              </span>
              <span>
                <b>Código Internacional: </b>
                {buscarCodigoInternacional(setCodigoIndividual)}
              </span>
              <span>
                <b>Área: </b>
                {setCodigoIndividual.area.toLocaleString()} km²
              </span>
              <span>
                <b>Região:</b> {setCodigoIndividual.region}
              </span>
              <span>
                <b>Continente:</b>{" "}
                {setCodigoIndividual.continents &&
                setCodigoIndividual.continents.length > 0
                  ? setCodigoIndividual.continents[0]
                  : "Continente: N/A"}
              </span>
              <span>
                <b>Subregião:</b>{" "}
                {setCodigoIndividual.subregion &&
                setCodigoIndividual.subregion.length > 0
                  ? setCodigoIndividual.subregion
                  : "N/A"}
              </span>
              {setCodigoIndividual.timezones &&
              setCodigoIndividual.timezones.length > 0 ? (
                <span>
                  <b>Time Zones:</b> {setCodigoIndividual.timezones.join(", ")}
                </span>
              ) : (
                <span>
                  <b>Time Zones:</b> N/A
                </span>
              )}
              <span>
                <b>Fronteiras:</b>{" "}
                {buscarNomeFronteiras(setData, setCodigoIndividual.cca3)}
              </span>
            </div>
          </div>

          <button onClick={() => setModalOpen(!isOpen)}>Fechar</button>
        </div>
      </div>
    );
  }

  return null;
}
