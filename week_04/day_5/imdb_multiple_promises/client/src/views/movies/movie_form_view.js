const PubSub = require('../../helpers/pub_sub.js');

class MovieFormView{

  constructor(form) {
    this.form = form;
  }

  bindEvents() {
    this.form.addEventListener('submit', (evt) => {
      this.handleSubmit(evt);
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newMovie = this.createMovie(evt.target);
    PubSub.publish('MovieView:movie-submitted', newMovie);
    evt.target.reset();
  }

  createMovie(form) {
    const newMovie = {
      title: form.title.value,
      genre: form.genre.value,
      budget: form.budget.value
    };

    return newMovie;
  }

}

module.exports = MovieFormView;
