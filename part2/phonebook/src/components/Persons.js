  // Component for displaying all phonebook (or search results)
  const Persons = ({showAll, query, persons}) => {

 
    const personsToShow = showAll ? persons : persons.filter(person => person.name.includes(query)) ;

      return (
          <div>
              <h2>Numbers</h2>
              <ul>
                {personsToShow.map((person) => {
                    return <li key={person.id}> {person.name} {person.number} </li>
          })}
        </ul>
          </div>
       
      )
  }

  export default Persons