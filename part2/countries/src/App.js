import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Country from './components/Country';
import Countries from './components/Countries';

function App() {
  // state for form input element
  const [query, setNewQuery] = useState('enter country here');
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [details, setShowDetails] = useState(false);
  const [currentCountry, setCurrentCountry] = useState([]);
  const [currentCountryWeather] = useState([]);

  // input handlers
  const handleInputCountry = (event) => {
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

  const handleCurrentCountry = (currentCountry, weather = defaultWeather) => {
    console.log('current country changed!');
    let tempCountry = {
      ...currentCountry,
      ...weather,
    };

    setCurrentCountry(tempCountry);
    console.log('currentcountry', currentCountry.name.common);
  };

  // unnecessary, current weather is tied to the currentCountry state
  // const handleCurrentCountryWeather = (currentCountryWeather) => {
  //   setCurrentCountryWeather(currentCountryWeather);
  // };

  const handleShowDetails = () => {
    setShowDetails(!details);
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
    axios.get(dataSource).then((response) => {
      let responseArray = response.data;
      // add unique identifiers for each country prior to loading them into app state
      responseArray = responseArray.map((country, index) => {
        return { ...country, uid: index };
      });
      // TODO: sort countries by common name
      setCountries(responseArray);
    });
  }, [countries]);

  // Create a state for currentCountry and embed the latlon in that state
  // when the state changes, it will load the weather data source
  // or set a state for the current weatherDataSource
  // whenever currentCountry changes, change weatherDataSource and then display result in Countries detail

  // TODO: Get weather data
  // OpenWeather API requires use of Geocoding API to translate city names to lat/lon
  // lat/lon already included in dataSource schema: country.capitalInfo.latlng
  // is it better to load 250 weather data once and store in memory? or query for weather data only when asked?
  // to preserve my api usage requirements, opting for latter

  useEffect(() => {
    console.log('firing');
    if (Object.keys(currentCountry).length > 0) {
      console.log('madeithere');
      const latlng = Object.values(currentCountry.latlng);
      const lat = latlng[0];
      const lon = latlng[1];
      const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;
      console.log('precall');
      const weatherDataSource = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
      console.log('weatherdatasource', weatherDataSource);
      axios.get(weatherDataSource).then((response) => {
        console.log(response.data.main.temp);
        let tempWeatherObject = {
          currentTemp: response.data.main.temp,
          currentFeelsLike: 'unknown',
          currentImage: '',
        };
        handleCurrentCountry(currentCountry, tempWeatherObject);
        // let responseArray = response.data;
        // handleCurrentCountryWeather(response.data);
        // add attributes for current temperature, weather, feels like, etc.
      });
    }
  }, [currentCountry.name]);
  // something in the above is the problem! fix constant queries to api endpoint

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
        details={details}
        handleShowDetails={handleShowDetails}
        handleCurrentCountry={handleCurrentCountry}
        currentCountryWeather={currentCountryWeather}
      />
    </div>
  );
}

export default App;

// 2.12: The API https://restcountries.com provides data for different countries in a machine-readable format, a so-called REST API.
// Create an application, in which one can look at data of various countries.
// The application should probably get the data from the endpoint all.
// The country to be shown is found by typing a search query into the search field.
// If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific
// When there is only one country matching the query,
// then the basic data of the country (eg. capital and area), its flag and the languages spoken there, are shown

//2.13: Improve on the application in the previous exercise, such that when the names of multiple countries are shown on
// the page there is a button next to the name of the country, which when pressed shows the view for that country

// 2.14: Add to the view showing the data of a single country, the weather report for the capital of that country.
// There are dozens of providers for weather data.
