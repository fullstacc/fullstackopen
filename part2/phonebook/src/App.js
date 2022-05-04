import { useState } from 'react'

const App = () => {
  // the persons state is meant for holding the array of contacts
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  // The newName state is meant for controlling the form input element.
  const [newName, setNewName] = useState('enter name here')
  const [newNumber, setNewNumber] = useState('enter number here')



  // function for adding contacts to the persons state
  const addContact = (event) => {
    // prevent page from reloading upon form submit
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // check persons array for presence of duplicate name
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
    else {
      // use the setPersons() function to modify persons state
    // use concat vice .push() because we don't mutate state directly in React
    setPersons(persons.concat(contactObject))
    setNewName('')

    }
  }


  // function for updating input field state
  const handleInputName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }

  const handleInputNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleInputName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleInputNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
        {persons.map((person) => {
          return <li key={person.id}> {person.name} {person.number}
          </li>
        })}
        </ul>
        
      </div>
    </div>
  )
}

export default App

// 2.6: As a user, I can add names to the phonebook and have them added to the list of "numbers"
// 2.7: Prevent the user from being able to add names that already exist in the phonebook.
// 2.8: Expand your application by allowing users to add phone numbers to the phone book. 

// 2.9: Implement a search field that can be used to filter the list of people by name
// 2.10: If you have implemented your application in a single component, refactor it by extracting suitable parts into new components.
// Maintain the application's state and all event handlers in the App root component.



