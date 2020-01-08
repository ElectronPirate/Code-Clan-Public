const MovieFormView = require('./views/movies/movie_form_view.js');
const MoviesGridView = require('./views/movies/movies_grid_view.js');
const Movies = require('./models/movies.js');

const StarFormView = require('./views/stars/star_form_view.js');
const StarsGridView = require('./views/stars/stars_grid_view.js');
const Stars = require('./models/stars.js');

const MainNav = require('./views/main_nav.js');


document.addEventListener('DOMContentLoaded', () => {

  // MAIN NAV
  const mainNav = document.querySelector('#main-nav');
  const mainNavView = new MainNav(mainNav);
  mainNavView.bindEvents();

  // STARS
  const starsForm = document.querySelector('#stars-form');
  const starsFormView = new StarFormView(starsForm);
  starsFormView.bindEvents();

  const starsContainer = document.querySelector('#stars-container');
  starsContainer.style.display = "none";

  const starsGridView = new StarsGridView(document.querySelector('div#stars'));
  starsGridView.bindEvents();

  const stars = new Stars();
  stars.bindEvents();
  stars.getData();

  // MOVIES
  const moviesForm = document.querySelector('#movies-form');
  const moviesFormView = new MovieFormView(moviesForm);
  moviesFormView.bindEvents();

  const moviesContainer = document.querySelector('div#movies');
  const moviesGridView = new MoviesGridView(moviesContainer);
  moviesGridView.bindEvents();

  const movies = new Movies();
  movies.bindEvents();
  movies.getData();

});
