import { useState } from 'react';
import Countries from '../components/Countries';
import Country from '../components/Country';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import { allCountries } from '../data/countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }
  function toogleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    if (newVisitedCountries.indexOf(countryId) !== -1) {
      newVisitedCountries = newVisitedCountries.filter(country => {
        return country !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }
    setVisitedCountries(newVisitedCountries);
  }
  // Filtrando o input em letras LowerCase
  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilter.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowerCase);
        })
      : allCountries;

  console.log(visitedCountries);
  return (
    <div>
      <Header size="large">React Countries</Header>
      <Main>
        <TextInput
          labelDescription="Informe o nome do país (ao menos 3 caracteres): "
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />

        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length} Países encontrados
          </h2>
          <h3 className="text-center font-semibold text-sm">
            {visitedCountries.length} Países Visitados
          </h3>

          {filteredCountries.map(country => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;
            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toogleVisitedCountry}
                key={country.id}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>

      <div>{}</div>
    </div>
  );
}
