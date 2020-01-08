const PubSub = require('../../helpers/pub_sub.js');
const StarView = require('./star_view.js');

class StarsGridView{

  constructor(container) {
    this.container = container;
  }

  bindEvents() {
    PubSub.subscribe('Stars:data-loaded', (evt) => {
      this.render(evt.detail);
    });
  }

  render(stars) {
    this.container.innerHTML = '';
    const starView = new StarView(this.container);
    stars.forEach((star) => starView.render(star));
  }

}

module.exports = StarsGridView;
