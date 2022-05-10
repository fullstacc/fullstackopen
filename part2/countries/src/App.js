import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Countries from './components/Countries';

function App() {
  // state for form input element
  const [query, setNewQuery] = useState('enter country here');
  const [countries, setCountries] = useState([]);

  // input handlers
  const handleInputCountry = (event) => {
    setNewQuery(event.target.value);
  };

  // props objects to simplify passing props
  const countryFormPropsObj = {
    query,
    handleInputCountry,
  };

  // load the data from the server (after initial render)
  // TODO: extract from the endpoint only the data we need (there are lots of fields!)
  const dataSource = 'https://restcountries.com/v3.1/all';
  useEffect(() => {
    console.log('effect');
    axios.get(dataSource).then((response) => {
      console.log('promise fulfilled');
      console.log(response.data);
      setCountries(response.data);
      console.log('validating countries', countries[0]);
      console.log('number of countries', countries.length);
    });
  }, []);

  return (
    <div>
      <h1>countries</h1>
      <Form propsObj={countryFormPropsObj} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;

// 2.12: The API https://restcountries.com provides data for different countries in a machine-readable format, a so-called REST API.
// Create an application, in which one can look at data of various countries.
// The application should probably get the data from the endpoint all.

// The country to be shown is found by typing a search query into the search field.
// If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific
