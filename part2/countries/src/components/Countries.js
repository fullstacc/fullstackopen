// component for displaying search results; matches case-insensitively
const Countries = ({ countries, showAll, query }) => {
  const countriesToShow = showAll
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );

  if (countriesToShow.length > 0) {
    return (
      <div>
        <h2>results</h2>
        <ul>
          {countriesToShow.map((x) => {
            return <li>{x.name.common}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div>no results found!</div>;
  }
};

export default Countries;
