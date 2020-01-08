const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Movies{
  constructor(){
    this.url = 'http://localhost:3000/api/movies';
    this.request = new RequestHelper(this.url);
  }

  bindEvents() {
    PubSub.subscribe('MovieView:movie-delete-clicked', (evt) => {
      this.deleteMovie(evt.detail);
    })

    PubSub.subscribe('MovieView:movie-submitted', (evt) => {
      this.postMovie(evt.detail);
    })

  }

  getData() {
    this.request.get()
      .then((movies) => {
        PubSub.publish('Movies:data-loaded', movies);
      })
      .catch(console.error);
  }

  postMovie(movie) {
    this.request.post(movie)
      .then((movies) => {
        PubSub.publish('Movies:data-loaded', movies);
      })
      .catch(console.error);
  }

  deleteMovie(movieId) {
    this.request.delete(movieId)
      .then((movies) => {
        PubSub.publish('Movies:data-loaded', movies);
      })
      .catch(console.error);
  }

}

module.exports = Movies;
