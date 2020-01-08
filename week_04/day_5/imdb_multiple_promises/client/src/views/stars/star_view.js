const PubSub = require('../../helpers/pub_sub.js');

class StarView{

  constructor(container) {
    this.container = container;
  }

  render(star){
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = `${star.first_name} ${star.last_name}`;

    const content = document.createElement('div');
    content.classList.add('content');

    const starItem = document.createElement('div');
    starItem.classList.add('item');
    starItem.innerHTML = '<img class="ui avatar image" src="/images/star.jpg" />';

    content.appendChild(header);
    starItem.appendChild(content)

    this.container.appendChild(starItem);
  }

}

module.exports = StarView;
