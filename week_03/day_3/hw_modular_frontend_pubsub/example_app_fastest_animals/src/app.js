const Animals = require('./models/animals.js');
const SelectView = require('./views/select_view.js');
const AnimalInfoView = require('./views/animal_info_view.js');

document.addEventListener('DOMContentLoaded', function(){
  const animalDropdown = new SelectView();
  animalDropdown.bindEvents();

  const animalInfoDisplay = new AnimalInfoView();
  animalInfoDisplay.bindEvents();

  const animalsDataSource = new Animals();
  animalsDataSource.bindEvents();
});
