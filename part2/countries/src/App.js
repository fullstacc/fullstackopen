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

  // input handlers
  const handleInputCountry = (event) => {
    setNewQuery(event.target.value);
    console.log('setnewquery is', event.target.value);
    if (query !== '') {
      // flip search flag
      setShowAll(false);
    } else {
      setShowAll(true);
    }
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
    console.log('effect');
    axios.get(dataSource).then((response) => {
      const responseArray = response.data;
      // TODO: sort countries by common name
      setCountries(responseArray);
    });
  }, []);

  return (
    <div>
      <h1>countries</h1>
      <Form
        propsObj={countryFormPropsObj}
        setShowAll={setShowAll}
        handleInputCountry={handleInputCountry}
      />
      <Countries countries={countries} showAll={showAll} query={query} />
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
