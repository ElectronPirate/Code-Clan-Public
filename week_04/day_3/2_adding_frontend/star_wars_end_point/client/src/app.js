const CharacterFormView = require('./views/character_form_view.js');
const CharacterView = require('./views/character_view.js');
const Characters = require('./models/characters.js');

document.addEventListener('DOMContentLoaded', () => {
  const characterContainer = document.querySelector('#character-container');
  const characterView = new CharacterView(characterContainer);
  characterView.bindEvents();

  const characterForm = document.querySelector('#character-form');
  const characterformView = new CharacterFormView(characterForm);
  characterformView.bindEvents();

  const characters = new Characters();
  characters.getData();
});
