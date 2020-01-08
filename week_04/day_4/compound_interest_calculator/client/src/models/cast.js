const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Cast{
  constructor(){
    this.url = 'http://localhost:3000/api/movies';
    this.request = new RequestHelper(this.url);
  }

  bindEvents() {
    PubSub.subscribe('MovieView:cast-clicked', (evt) => {
      this.getCast(evt.detail);
    })
  }

  getCast(movieId){
    this.request.url = `http://localhost:3000/api/movies/${movieId}/cast`;
    this.request.get()
      .then((cast) => {
        PubSub.publish('Cast:data-loaded', cast);
      })
      .catch(console.error);
  }
}

module.exports = Cast;
