import { connect } from 'react-redux';
import CountriesSelect from './CountriesSelect.js';

const mapDispatchToProps = dispatch => ({
  countrySelected(countryName) {
    dispatch({
      type: 'ADD_COUNTRY',
      country: { name: countryName, visited: false }
    });
  }
});

const mapStateToProps = state => {
  return {
    countries: state.countriesData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSelect);
