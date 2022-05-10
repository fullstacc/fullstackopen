const Form = ({ query, handleInputCountry }) => {
  return (
    // TODO: onSubmit, input initial state value, onchange value,
    <form>
      <h2> add entry </h2>
      <div>
        name: <input value={query} onChange={handleInputCountry} />{' '}
        <button type="submit">search</button>
      </div>
    </form>
  );
};

export default Form;
