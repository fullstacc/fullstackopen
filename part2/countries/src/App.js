import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Countries from './components/Countries';

function App() {
  // state for form input element
  const [query, setNewQuery] = useState('enter country here');
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [currentCountry, setCurrentCountry] = useState([]);
  const [currentCountryWeather] = useState([]);

  // input handler for search form
  const handleInputCountry = (event) => {
    console.log('input query state changed!');
    setNewQuery(event.target.value);
    if (query !== '') {
      // flip search flag
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  // object for template for weather params
  const defaultWeather = {
    currentTemp: 'unknown',
    currentFeelsLike: 'unknown',
    currentImage: '',
  };

  // adds weather paramters to the selected country, only when this function fires
  // also toggles the individual country's visibility by altering its state (via its viewDetails property)
  const handleCurrentCountry = (currentCountry, weather = defaultWeather) => {
    // add weather fields
    let tempCountry = {
      ...currentCountry,
      ...weather,
    };

    let countriesCopy = countries;
    countriesCopy[tempCountry.uid] = tempCountry;
    setCountries(countriesCopy);

    setCurrentCountry(tempCountry);
  };

  const handleShowDetails = (uid) => {
    // flip details state flag
    // setShowDetails(!details);
  };

  // props objects to simplify passing props
  const countryFormPropsObj = {
    query,
    setNewQuery,
    setShowAll,
  };

  // load the data from the server (after initial render)
  // TODO: extract from the endpoint only the data we need (there are lots of fields!)
  const dataSource = 'https://restcountries.com/v3.1/all';
  useEffect(() => {
    console.log(
      'useeffect for country data has been called, countries array has changed'
    );
    axios.get(dataSource).then((response) => {
      console.log('trying to get country data');
      let responseArray = response.data;
      // add unique identifiers for each country prior to loading them into app state
      responseArray = responseArray.map((country, index) => {
        return { ...country, uid: index };
      });
      setCountries(responseArray);
    });
  }, []);

  return (
    <div>
      <h1>countries</h1>
      <Form
        propsObj={countryFormPropsObj}
        setShowAll={() => setShowAll}
        handleInputCountry={handleInputCountry}
      />
      <Countries
        countries={countries}
        showAll={showAll}
        query={query}
        handleShowDetails={handleShowDetails}
        currentCountry={currentCountry}
        handleCurrentCountry={handleCurrentCountry}
        currentCountryWeather={currentCountryWeather}
      />
    </div>
  );
}

export default App;
