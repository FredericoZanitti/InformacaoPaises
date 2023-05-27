import React from "react";
import "./Modal.css";

//esse children pode ser qualquer coisa que será passada no modal: um objeto, um botao, um paragrafo, ec.
export default function Modal({
  isOpen,
  setModalOpen,
  setCodigoIndividual,
  children,
}) {
  if (isOpen) {
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
                {setCodigoIndividual.currencies &&
                  Object.keys(setCodigoIndividual.currencies).map(
                    (currencyKey) => (
                      <div key={currencyKey}>
                        <p>
                          <b>Moeda:</b> {currencyKey} -{" "}
                          {setCodigoIndividual.currencies[currencyKey].name}
                        </p>
                      </div>
                    )
                  )}
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
                {setCodigoIndividual.borders &&
                setCodigoIndividual.borders.length > 0 ? (
                  <p>
                    <b>Fronteiras:</b> {setCodigoIndividual.borders.join(", ")}
                  </p>
                ) : (
                  <p>
                    <b>Fronteiras:</b> N/A
                  </p>
                )}
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
