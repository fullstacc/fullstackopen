import { useState } from 'react'

const App = () => {
  // the persons state is meant for holding the array of contacts
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  // The newName state is meant for controlling the form input element.
  const [newName, setNewName] = useState('enter name here')


  // function for adding contacts to the persons state
  const addContact = (event) => {
    // prevent page from reloading upon form submit
    event.preventDefault()
    const contactObject = {
      name: newName,
      id: persons.length + 1
    }

    // use the setPersons() function to modify persons state
    // use concat vice .push() because we don't mutate state directly in React
    setPersons(persons.concat(contactObject))
    setNewName('')

  }


  // function for updating input field state
  const handleinputContact = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleinputContact}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return <div>{person.name}</div>
        })}
      </div>
    </div>
  )
}

export default App

// 2.6: As a user, I can add names to the phonebook and have them added to the list of "numbers"
// 2.7
