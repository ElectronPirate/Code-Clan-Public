const PubSub = require('../helpers/pub_sub.js');

class AnimalInfoView {

  constructor() {
    this.container = document.querySelector('div#animal-info');
  }

  bindEvents() {
    PubSub.subscribe('Animals:selected-animal-ready', (evt) => {
      const animal = evt.detail;
      this.render(animal);
    });
  }

  render(animal) {
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `The ${animal.species}, of class '${animal.class}', has a maximum speed of ${animal.maxSpeed} km/h.`;
    this.container.innerHTML = '';
    this.container.appendChild(infoParagraph);
  }

};

module.exports = AnimalInfoView;
