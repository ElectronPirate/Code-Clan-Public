const CountriesView = require('./views/countries_view.js');
const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
  const countriesView = new CountriesView();
  countriesView.bindEvents();

  const countriesModel = new Countries();
  countriesModel.getData();
});
