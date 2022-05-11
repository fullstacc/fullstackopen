// component for displaying search results; matches case-insensitively
const Countries = ({ countries, showAll, query }) => {
  const countriesToShow = showAll
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );

  if (countriesToShow.length > 0) {
    if (countriesToShow.length !== 250 && countriesToShow.length > 10) {
      return (
        <div>too many countries found, please enter more specific query</div>
      );
    }

    if (countriesToShow.length === 1) {
      const selectedCountry = countriesToShow[0];
      const languages = Object.values(selectedCountry.languages);
      return (
        <div>
          <table>
            <tr>
              <td>
                <h3> {selectedCountry.name.common} </h3>
              </td>
            </tr>
            <tr>
              <td> Capital: {selectedCountry.capital}</td>
            </tr>
            <tr>
              <td> Area: {selectedCountry.area} km²</td>
            </tr>
            <tr>
              <td>
                Languages:
                <ul>
                  {languages.map((x) => (
                    <li>{x}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <img src={selectedCountry.flags['png']} alt="country flag" />
              </td>
            </tr>
          </table>
        </div>
      );
    }
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
