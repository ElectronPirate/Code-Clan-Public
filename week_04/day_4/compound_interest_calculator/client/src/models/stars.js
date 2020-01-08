const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Stars{
  constructor(){
    this.url = 'http://localhost:3000/api/stars';
    this.request = new RequestHelper(this.url);
  }

  getData() {
    this.request.get()
      .then((movies) => {
        PubSub.publish('Stars:data-loaded', movies);
      })
      .catch(console.error);
  }

  bindEvents() {
    PubSub.subscribe('StarForm:star-submitted', (evt) => {
      this.postStar(evt.detail);
    })
  }

  postStar(star) {
    this.request.post(star)
      .then((stars) => {
        PubSub.publish('Stars:data-loaded', stars);
      })
      .catch(console.error);
  }

}

module.exports = Stars;
