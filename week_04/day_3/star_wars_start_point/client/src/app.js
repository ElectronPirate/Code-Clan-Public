const CharacterView = require('./views/character_view.js');
const Characters = require('./models/characters.js');

document.addEventListener('DOMContentLoaded', () => {
  const characterContainer = document.querySelector('#character-container');
  const characterView = new CharacterView(characterContainer);
  characterView.bindEvents();

  const characters = new Characters();
  characters.getData();
});
