import axios from "axios";

export default function infoPaises(regiao) {
  const fields =
    "name,translations,region,subregion,capital,population,flags,languages,currencies,cca2,cca3";

  const url =
    regiao === "Todas"
      ? `https://restcountries.com/v3.1/all?fields=${fields}`
      : `https://restcountries.com/v3.1/region/${encodeURIComponent(
          regiao
        )}?fields=${fields}`;

  return axios.get(url);
}
