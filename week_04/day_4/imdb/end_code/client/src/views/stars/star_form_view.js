const PubSub = require('../../helpers/pub_sub.js');

class StarFormView{

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
    const newStar = this.createStar(evt.target);
    PubSub.publish('StarForm:star-submitted', newStar);
    evt.target.reset();
  }

  createStar(form) {
    const newStar = {
      first_name: form.fname.value,
      last_name: form.lname.value
    };

    return newStar;
  }

}

module.exports = StarFormView;
