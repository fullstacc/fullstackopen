import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  // showAll state to determine which persons should be displayed
  const [showAll, setShowAll] = useState(true);

  // The newName state is meant for controlling the form input element.
  const [newName, setNewName] = useState('enter name here');
  const [newNumber, setNewNumber] = useState('enter number here');

  // state management for the search form
  const [query, setQuery] = useState('enter query here');

  const deleteUser = (userId) => {
    // prompt user to confirm wish to delete
    if (window.confirm('Do you really want to delete this user?')) {
      personService.deleteUser(userId);
      setPersons(persons.filter((person) => person.id !== userId));
    }
  };

  // function for adding contacts to the persons state
  const addContact = (event) => {
    console.log('attempting to add contact');
    // prevent page from reloading upon form submit
    event.preventDefault();
    // build an object to post to the database
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    // check persons array for presence of duplicate name
    if (persons.some((person) => person.name === newName)) {
      const personToUpdate = persons.find((person) => person.name === newName);
      if (window.confirm('Use already exists! Do you want to update number?')) {
        personService.update(personToUpdate.id, {
          name: newName,
          number: newNumber,
          id: personToUpdate.id,
        });
        setNewName('');
        setPersons(
          persons.map((person) =>
            person.id != personToUpdate.id
              ? person
              : { name: newName, number: newNumber, id: personToUpdate.id }
          )
        );
      }

      setNewName('');
    } else {
      // use the setPersons() function to modify persons state
      // use concat vice .push() because we don't mutate state directly in React
      setPersons(persons.concat(contactObject));
      setNewName('');

      // send POST to server
      personService.create(contactObject);
    }
  }; // end addContact

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

  const personFormPropsObj = {
    newNumber,
    newName,
  };

  // initial state should be fetched from server using axios using effect hook
  useEffect(() => {
    personService.getAll().then((res) => setPersons(res.data));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} handleQuery={handleQuery} />
      <PersonForm
        propsObj={personFormPropsObj}
        addContact={addContact}
        handleInputName={handleInputName}
        handleInputNumber={handleInputNumber}
      />
      <Persons
        showAll={showAll}
        query={query}
        persons={persons}
        deleteUser={deleteUser}
      />
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
// 2.15: Currently, the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.
// 2.16: Extract the code that handles the communication with the backend into its own module
// 2.17: Make it possible for users to delete entries from the phonebook.
// The deletion can be done through a dedicated button for each person in the phonebook list.
// You can confirm the action from the user by using the window.confirm method
// 2.18: Change the functionality so that if a number is added to an already existing user, the new number will replace the old number.
// It's recommended to use the HTTP PUT method for updating the phone number.
// If the person's information is already in the phonebook, the application can confirm the action from the user
