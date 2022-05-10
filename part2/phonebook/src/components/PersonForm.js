const PersonForm = ({addContact, handleInputName, newNumber, newName, handleInputNumber}) => {


    return (
        <form onSubmit={addContact}>
        <h2> Add Entry </h2>
        <div>
          name: <input value={newName} onChange={handleInputName}/>
        </div>
        
        <div>number: <input value={newNumber} onChange={handleInputNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

}

export default PersonForm