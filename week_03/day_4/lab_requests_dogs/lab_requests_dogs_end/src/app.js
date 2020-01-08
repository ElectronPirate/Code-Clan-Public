const BreedFormView = require('./views/breed_form_view.js');
const DogView = require('./views/dog_view.js');
const Dogs = require('./models/dogs.js');

document.addEventListener('DOMContentLoaded', () => {
  const breedFormView = new BreedFormView();
  breedFormView.bindEvents();

  const dogView = new DogView();
  dogView.bindEvents();

  const dogs = new Dogs();
  dogs.bindEvents();
});
