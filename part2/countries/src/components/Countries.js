// component for displaying search results
const Countries = ({ countries }) => {
  console.log('this is countries', countries);
  if (countries)
    return (
      <div>
        <h2>results</h2>
        <ul>
          {countries.map((x) => {
            return <li>{x.name.common}</li>;
          })}
        </ul>
      </div>
    );
};

export default Countries;
