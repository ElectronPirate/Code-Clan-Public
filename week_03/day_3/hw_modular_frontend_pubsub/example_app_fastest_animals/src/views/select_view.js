const PubSub = require('../helpers/pub_sub.js');

class SelectView {

  constructor() {
    this.element = document.querySelector('select#animals-dropdown');
  }

  bindEvents() {
    PubSub.subscribe('Animals:all-animals-ready', (evt) => {
      const allAnimals = evt.detail;
      this.populate(allAnimals);
    });

    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    });
  };

  populate(animalsData) {
    animalsData.forEach((animal, index) => {
      const option = document.createElement('option');
      option.textContent = animal.species;
      option.value = index;
      this.element.appendChild(option);
    })
  }

}

module.exports = SelectView;
