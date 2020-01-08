const PubSub = require('../helpers/pub_sub.js');

class CountriesView {

  bindEvents() {
    PubSub.subscribe('Countries:data-loaded', (evt) => {
      const countriesData = evt.detail;
      this.render(countriesData);
    });
  }

  render(countriesData) {
    const countriesList = document.querySelector('#countries');

    countriesData.forEach((country) => {
      const name = document.createElement('li');
      name.textContent = country.name;
      countriesList.appendChild(name);
    })
  }

}

module.exports = CountriesView;
