import Country from './Country';

// component for displaying search results; matches case-insensitively
const Countries = ({
  countries,
  showAll,
  query,
  details,
  handleShowDetails,
  handleCurrentCountry,
  handleCurrentCountryWeather,
  currentCountryWeather,
}) => {
  const toggleShowCountry = (uid) => {
    // if [show]details is false, show the details
    if (!details) {
      handleShowDetails();
      let thisCountry = countriesToShow.find((country) => country.uid === uid);

      // set state for curent country
      handleCurrentCountry(thisCountry);

      const languages = Object.values(thisCountry.languages);
      // create container and internals
      let countryDetail = document.createElement('div');
      countryDetail.setAttribute('id', 'details-table');
      let tableToInsert = document.createElement('table');
      let row = tableToInsert.insertRow(0);
      let row2 = tableToInsert.insertRow(1);
      let row3 = tableToInsert.insertRow(2);
      let row4 = tableToInsert.insertRow(3);
      let row5 = tableToInsert.insertRow(4);

      // inser cells into rows
      let cell1 = row.insertCell(0);
      let cell2 = row2.insertCell(0);
      let cell3 = row3.insertCell(0);
      let cell4 = row4.insertCell(0);
      let cell5 = row5.insertCell(0);

      cell1.innerHTML = thisCountry.name.common;
      cell2.innerHTML = `Capital: ${thisCountry.capital}`;
      cell3.innerHTML = `Area: ${thisCountry.area}`;
      cell4.innerHTML = `Languages: ${languages}`;
      cell5.innerHTML = `<img src=${thisCountry.flags['png']} alt="country flag" />`;

      const weatherTable = document.createElement('div');
      weatherTable.setAttribute('id', 'weather-table');
      let weatherTableToInsert = document.createElement('table');
      let weatherRow = tableToInsert.insertRow(0);
      let weatherRow2 = tableToInsert.insertRow(1);
      let weatherRow3 = tableToInsert.insertRow(2);
      let weatherRow4 = tableToInsert.insertRow(3);

      let weatherCell1 = weatherRow.insertCell(0);
      let weatherCell2 = weatherRow2.insertCell(0);
      let weatherCell3 = weatherRow3.insertCell(0);
      let weatherCell4 = weatherRow4.insertCell(0);

      weatherCell1.innerHTML = `current weather in ${thisCountry.capital}`;
      weatherCell2.innerHTML = `Temperature: `;
      console.log('current weather', currentCountryWeather);

      countryDetail.appendChild(tableToInsert);
      countryDetail.appendChild(weatherTableToInsert);
      let countryDetail2 = (
        <Country country={thisCountry} languages={languages} />
      );

      // TODO: Append a country component as a DOM node

      console.log('country2', countryDetail2);

      document.getElementById(uid).appendChild(countryDetail);
      document.getElementById(uid).appendChild(countryDetail2);
    }
    // if showdetails is true, we already have a details window open so break it down
    else {
      let thisCountryCell = document.getElementById('details-table');
      thisCountryCell.outerHTML = '';
      handleShowDetails();
    }
  };

  const countriesToShow = showAll
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );

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
        <Country
          country={selectedCountry}
          languages={languages}
          handleCurrentCountry={handleCurrentCountry}
        />
      );
    }
    return (
      <div>
        <h2>results</h2>
        <ul>
          {countriesToShow.map((x, i) => {
            let uid = x.uid;
            return (
              <li key={i} id={x.uid}>
                {x.name.common}{' '}
                <button onClick={() => toggleShowCountry(uid)}>show</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div>no results found!</div>;
  }
};

export default Countries;
