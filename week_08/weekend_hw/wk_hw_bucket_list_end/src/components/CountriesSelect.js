import React from 'react';
import './CountriesSelect.css';

const CountriesSelect = (props) => {

  const handleChange = (evt) => {
    props.countrySelected(evt.target.value);
  };

  const createOptions = () => {
    return props.countries.map(country => {
      return (
        <option
          key={country.name}
          value={country.name}
        >
          {country.name}
        </option>
      );
    });
  };

  return (
      <select onChange={ evt => handleChange(evt) } className="country-select">
        {createOptions()}
      </select>
  );

}

export default CountriesSelect;
