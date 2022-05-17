import React, { useState } from 'react';

const Country = ({ country }) => {
  //   country has its own state for visibility
  const [visibility, setVisibility] = useState(false);

  // function for flipping visibility
  const makeVisible = () => {
    setVisibility(!visibility);
  };

  if (visibility) {
    return (
      <div id={country.uid}>
        <table>
          <tbody>
            <tr>
              <td>
                <h3> {country.name.common} </h3>
              </td>
            </tr>
            <tr>
              <td> Capital: {country.capital}</td>
            </tr>
            <tr>
              <td> Area: {country.area} km²</td>
            </tr>
            <tr>
              <td>
                Languages:
                <ul>
                  languages
                  {/* {Object.values(country.languages).map((x, i) => (
                    <li key={i}>{x}</li>
                  ))} */}
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <img src={country.flags['png']} alt="country flag" />
              </td>
            </tr>
            <tr>
              <td>
                <h3> Weather in {country.capital}</h3>
              </td>
            </tr>
            <tr>
              <td>Current Temperature:</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={makeVisible}>
            {' '}
            Hide {country.name.common} details{' '}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={makeVisible}>
          {' '}
          show {country.name.common} details
        </button>
      </div>
    );
  }
};

export default Country;

// create container and internals
// let countryDetail = document.createElement('div');
// countryDetail.setAttribute('id', 'details-table');
// let tableToInsert = document.createElement('table');
// let row = tableToInsert.insertRow(0);
// let row2 = tableToInsert.insertRow(1);
// let row3 = tableToInsert.insertRow(2);
// let row4 = tableToInsert.insertRow(3);
// let row5 = tableToInsert.insertRow(4);

// // inser cells into rows
// let cell1 = row.insertCell(0);
// let cell2 = row2.insertCell(0);
// let cell3 = row3.insertCell(0);
// let cell4 = row4.insertCell(0);
// let cell5 = row5.insertCell(0);

// cell1.innerHTML = country.name.common;
// cell2.innerHTML = `Capital: ${country.capital}`;
// cell3.innerHTML = `Area: ${country.area}`;
// cell4.innerHTML = `Languages: ${languages}`;
// cell5.innerHTML = `<img src=${country.flags['png']} alt="country flag" />`;

// put the table in a parent div
// countryDetail.appendChild(tableToInsert);
