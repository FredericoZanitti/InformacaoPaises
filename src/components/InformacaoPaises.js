import { infoPaises } from "../api/paises.js";
import { useState, useEffect } from "react";
import Modal from "./Modal.js";

export default function InformacaoPaises({
  searchValue,
  tipoPesquisa,
  reconhecido,
}) {
  const [dgData, setDgData] = useState([]);
  const [regiao, setRegiao] = useState("Todas");
  const [openModal, setOpenModal] = useState(false);
  const [codigoInd, setCodigoInd] = useState({});

  const replaceSpecialChars = (str) => {
    return str
      .normalize("NFD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/([^\w]+|\s+)/g, " ") // Substitui espaço e outros caracteres por hífen
      .replace(/\-\-+/g, " ") // Substitui multiplos hífens por um único hífen
      .replace(/(^-+|-+$)/, ""); // Remove hífens extras do final ou do inicio da string
  };

  useEffect(() => {
    onClickSearch(regiao);
  }, [regiao]);

  const onClickSearch = (regiao) => {
    infoPaises(regiao)
      .then((resp) => {
        const sortedData = resp.data.sort((a, b) => {
          return a.translations.por.common.localeCompare(
            b.translations.por.common
          );
        });

        setDgData(sortedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //capiturar o clique do select de regiões
  let select = document.getElementById("seletor-regioes");
  if (select) {
    select.addEventListener("change", function () {
      setRegiao(select.value);
    });
  }

  function buscarCodigoInternacional(item) {
    if (!(item.cca3 === "")) {
      return item.cca3;
    } else if (!(item.cca2 === "")) {
      return item.cca2;
    } else return "N/A";
  }

  //abrir modal
  function openModalPais(item) {
    setOpenModal(true);
    setCodigoInd(item);
  }

  return (
    <div className="info-paises">
      {dgData
        .filter((item) => {
          const data = replaceSpecialChars(item.translations.por.common);

          if (tipoPesquisa === "q") {
            if (reconhecido === "t")
              return data.includes(replaceSpecialChars(searchValue));
            else if (reconhecido === "s")
              return (
                item.independent &&
                data.includes(replaceSpecialChars(searchValue))
              );
            else if (reconhecido === "n")
              return (
                !item.independent &&
                data.includes(replaceSpecialChars(searchValue))
              );
          } else if (tipoPesquisa === "i") {
            if (reconhecido === "t")
              return data.startsWith(replaceSpecialChars(searchValue));
            else if (reconhecido === "s")
              return (
                item.independent &&
                data.startsWith(replaceSpecialChars(searchValue))
              );
            else if (reconhecido === "n")
              return (
                !item.independent &&
                data.startsWith(replaceSpecialChars(searchValue))
              );
          }
        })
        .map((item, index) => (
          <div
            key={index}
            className="info-paises-itens btn-card"
            onClick={() => openModalPais(item)}
          >
            <img
              src={item.flags.png}
              alt={item.flags.alt}
              className="info-paises-bandeira"
            />
            <div className="info-paises-index">{index + 1}</div>
            <p className="info-paises-nome">{item.translations.por.common}</p>

            {item.capital && item.capital.length > 0 ? (
              <p className="info-paises-others">
                <b>{item.capital.length === 1 ? "Capital" : "Capitais"}</b>:{" "}
                {item.capital.join(", ")}
              </p>
            ) : (
              <p className="info-paises-others">Capital: N/A</p>
            )}
            <p className="info-paises-others">
              <b>Região:</b> {item.region}
            </p>
            <p className="info-paises-others">
              <b>Continente:</b>{" "}
              {item.continents && item.continents.length > 0
                ? item.continents[0]
                : "Continente: N/A"}
            </p>
            <p className="info-paises-others" id="codigo-pais">
              <b>Código Internacional:</b> {buscarCodigoInternacional(item)}
            </p>
          </div>
        ))}
      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        setCodigoIndividual={codigoInd}
        setData={dgData}
      ></Modal>
    </div>
  );
}
