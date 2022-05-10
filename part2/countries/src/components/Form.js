const Form = ({ query, handleInputCountry, setNewQuery, setShowAll }) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    // TODO: onSubmit, input initial state value, onchange value,
    <form>
      <h2> add entry </h2>
      <div>
        find countries:{' '}
        <input
          value={query}
          onChange={handleInputCountry}
          onSubmit={submitHandler}
        />
      </div>
    </form>
  );
};

export default Form;
