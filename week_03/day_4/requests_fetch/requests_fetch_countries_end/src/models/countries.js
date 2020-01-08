const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Countries {

  constructor() {
    this.data = [];
  }


  getData() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const request = new RequestHelper(url);

    request.get()
      .then((data) => {
        this.data = data;
        PubSub.publish('Countries:data-loaded', this.data);
      })
      .catch((message) => {
        console.error(message);
      });
  }

};

module.exports = Countries;
