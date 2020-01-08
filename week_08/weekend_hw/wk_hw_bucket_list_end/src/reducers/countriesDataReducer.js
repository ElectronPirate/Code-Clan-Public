const CountriesDataReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_COUNTRIES_DATA':
      return [...state, ...action.countryData]
    default:
      return state;
  }
}

export default CountriesDataReducer;