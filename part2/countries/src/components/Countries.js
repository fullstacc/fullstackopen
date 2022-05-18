import React from 'react';
import Country from './Country';

// component for displaying search results; matches case-insensitively
const Countries = ({ countries, showAll, query, handleCurrentCountry }) => {
  // function to update the DOM if toggle switch is activated
  const updateDOM = (country) => {
    const uid = country.uid;
    // const countryTable = document.getElementById(country.uid); avoid accessing DOM directly when using React
    // countryTable.appendChild('stuff goes here');
  };

  // ---------------------------

  const countriesToShow = showAll
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
  // end countriesToShow
  console.log('countriestoshow length', countriesToShow.length);
  if (countriesToShow.length > 0) {
    if (countriesToShow.length !== 250 && countriesToShow.length > 10) {
      return (
        <div>too many countries found, please enter more specific query</div>
      );
    }
    // view individual country details
    if (countriesToShow.length === 1) {
      // this method seems to cause the state to constantly be reset in handleCurrentCountry()
      const selectedCountry = countriesToShow[0];
      const languages = Object.values(selectedCountry.languages);
      return (
        <div>
          {' '}
          <p>{selectedCountry.name.common}</p>
          <Country
            country={selectedCountry}
            languages={languages}
            handleCurrentCountry={() => handleCurrentCountry}
          />
        </div>
      );
    } // end if countriestoshow length is 1

    return (
      <div>
        <h2>results</h2>
        <ul>
          {countriesToShow.map((x, i) => {
            let uid = x.uid;
            return (
              <li key={i} id={x.uid}>
                {x.name.common}
                <Country country={x} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div>no results found!</div>;
  } // end no results found
}; // end Countries component

export default Countries;
