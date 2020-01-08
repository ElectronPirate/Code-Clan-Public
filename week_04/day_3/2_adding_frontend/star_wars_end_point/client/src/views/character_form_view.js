const Characters = require('../models/characters');

class CharacterFormView{

  constructor (element) {
    this.element = element;
  }

  bindEvents() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newCharacter = {};
      newCharacter.name = evt.target['name'].value;
      newCharacter.darkside = evt.target['darkside'].value;
      newCharacter.age = evt.target['age'].value;

      const characters = new Characters();
      characters.postCharacter(newCharacter);

      this.element.reset();
    });
  }
}

module.exports = CharacterFormView;
