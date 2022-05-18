import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const tempWeatherObject = {
    currentTemp: 'unknown',
    currentConditions: 'unknown',
  };

  //   country has its own state for visibility
  const [visibility, setVisibility] = useState(false);
  // state for weather
  const [weather, setWeather] = useState(tempWeatherObject);

  // function for flipping visibility
  const makeVisible = () => {
    setVisibility(!visibility);

    const latlng = Object.values(country.latlng);
    const lat = latlng[0];
    const lon = latlng[1];
    const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

    const updatedWeatherSource = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latlng}?key=${APIKEY} `;
    console.log('this is weatherdatasource', updatedWeatherSource);

    axios.get(updatedWeatherSource).then((response) => {
      console.log('trying to get country data');
      let responseArray = response.data;
      const currentTemp = response.data.currentConditions.temp;
      const currentConditions = response.data.currentConditions.conditions;

      const weatherObject = {
        currentTemp: currentTemp,
        currentConditions: currentConditions,
      };

      setWeather(weatherObject);
    });
  };

  // side effect for loading weather data
  useEffect(() => {}, []);

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
              <td> Current Conditions: {weather.currentConditions}</td>
            </tr>
            <tr>
              <td> Current Temperature: {weather.currentTemp}</td>
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
