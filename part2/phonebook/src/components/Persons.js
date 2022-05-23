// Component for displaying all phonebook (or search results)
const Persons = ({ showAll, query, persons, deleteUser }) => {
  const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.includes(query));

  const doubleFunction = (personId) => {
    console.log('personId is', personId);
    deleteUser(personId);
  };

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => {
          return (
            <li key={person.id}>
              {' '}
              {person.name} {person.number}{' '}
              <button onClick={() => doubleFunction(person.id)}>
                {' '}
                delete{' '}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Persons;
