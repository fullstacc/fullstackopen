import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  // the persons state is meant for holding the array of contacts
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  // ]);

  const [persons, setPersons] = useState([]);

  // showAll state to determine which persons should be displayed
  const [showAll, setShowAll] = useState(true);

  // The newName state is meant for controlling the form input element.
  const [newName, setNewName] = useState('enter name here');
  const [newNumber, setNewNumber] = useState('enter number here');

  // state management for the search form
  const [query, setQuery] = useState('enter query here');

  // function for adding contacts to the persons state
  const addContact = (event) => {
    // prevent page from reloading upon form submit
    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    // check persons array for presence of duplicate name
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
    } else {
      // use the setPersons() function to modify persons state
      // use concat vice .push() because we don't mutate state directly in React
      setPersons(persons.concat(contactObject));
      setNewName('');
    }
  };

  // function for handling search queries
  const handleQuery = (event) => {
    // update the state for the input field
    setQuery(event.target.value);
    if (event.target.value !== '') {
      // flip searching flag
      setShowAll(false);
    }
  };

  // function for updating input field state
  const handleInputName = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value);
  };

  // TODO: refactor into its own module within /compponents/
  const personFormPropsObj = {
    addContact,
    handleInputName,
    newNumber,
    newName,
    handleInputNumber,
  };

  // initial state should be fetched from server using axios using effect hook
  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled');
      // this fills the persons state array
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} handleQuery={handleQuery} />
      <PersonForm propsObj={personFormPropsObj} />
      <Persons showAll={showAll} query={query} persons={persons} />
    </div>
  );
};

export default App;

// 2.6: As a user, I can add names to the phonebook and have them added to the list of "numbers"
// 2.7: Prevent the user from being able to add names that already exist in the phonebook.
// 2.8: Expand your application by allowing users to add phone numbers to the phone book.
// 2.9: Implement a search field that can be used to filter the list of people by name
// 2.10: If you have implemented your application in a single component, refactor it by extracting suitable parts into new components.
// Maintain the application's state and all event handlers in the App root component.

// 2.11 Modify the application such that the initial state of the data is fetched from the server using the axios-library.
// Complete the fetching with an Effect hook.
