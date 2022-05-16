const Form = ({ query, handleInputCountry, setNewQuery, setShowAll }) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    // TODO: onSubmit, input initial state value, onchange value,
    <form onSubmit={submitHandler}>
      <h2> search for a country </h2>
      <div>
        find countries: <input value={query} onChange={handleInputCountry} />
      </div>
    </form>
  );
};

export default Form;
