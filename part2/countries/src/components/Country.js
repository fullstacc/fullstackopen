const Country = ({ country, languages, handleCurrentCountry }) => {
  handleCurrentCountry(country);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <h3> {country.name.common} </h3>
            </td>
          </tr>
          <tr>
            <td> Capital: {country.capital}</td>
          </tr>
          <tr>
            <td> Area: {country.area} km²</td>
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
              <img src={country.flags['png']} alt="country flag" />
            </td>
          </tr>
          <tr>
            <td>
              <h3> Weather in {country.capital}</h3>
            </td>
          </tr>
          <tr>
            <td>Current Temperature:</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Country;
