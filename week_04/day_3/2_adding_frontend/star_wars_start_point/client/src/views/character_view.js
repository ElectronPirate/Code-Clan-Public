const PubSub = require('../helpers/pub_sub.js');

class CharacterView{

  constructor (container) {
    this.container = container;
  }

  bindEvents() {
    PubSub.subscribe('Characters:character-data-loaded', (evt) => {
      const characters = evt.detail;
      this.render(characters);
    });
  }

  render(characters) {
    this.clearCharacters();

    characters.forEach((character) => {
      const card = this.createCard(character);
      this.container.appendChild(card);
    });
  }

  clearCharacters() {
    this.container.innerHTML = '';
  }

  createCard(character) {
    const meta = document.createElement('div');
    meta.classList.add('meta');
    meta.innerHTML = `<span>Darkside: ${character.darkside} | Age: ${character.age}</span>`;

    const header = document.createElement('div');
    header.classList.add("header");
    header.innerHTML = `${character.name}`;

    const content = document.createElement('div');
    content.classList.add("content");

    const card = document.createElement('div');
    card.classList.add("ui");
    card.classList.add("card");

    content.appendChild(header);
    content.appendChild(meta);
    card.appendChild(content);

    return card;
  }

}

module.exports = CharacterView;
