const PubSub = require('../../helpers/pub_sub.js');
const MovieView = require('./movie_view.js');

class MoviesGridView{

  constructor(container) {
    this.container = container;
  }

  bindEvents() {
    PubSub.subscribe('Movies:data-loaded', (evt) => {
      this.render(evt.detail);
    });
  }

  render(movies) {
    this.container.innerHTML = '';
    const movieView = new MovieView(this.container);
    movies.forEach((movie) => movieView.render(movie));
  }

}

module.exports = MoviesGridView;
