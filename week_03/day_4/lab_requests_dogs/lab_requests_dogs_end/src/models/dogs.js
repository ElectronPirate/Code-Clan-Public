const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Dogs {

  constructor() {
    this.data = null;
  }

  bindEvents() {
    PubSub.subscribe('BreedFormView:form-submitted', (event) => {
      const breed = event.detail;
      this.getData(breed);
    });
  }

  getData(breed) {
    const url = `https://dog.ceo/api/breed/${ breed }/images`;
    const request = new RequestHelper(url);
    request.get()
      .then((data) => {
        this.data = data.message;
        PubSub.publish('Dogs:dog-data-loaded', this.data);
      })
      .catch((message) => {
        console.error(message);
      });
  }
  
};

module.exports = Dogs;
