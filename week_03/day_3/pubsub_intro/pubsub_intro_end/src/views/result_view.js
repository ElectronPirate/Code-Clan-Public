const PubSub = require('../helpers/pub_sub.js');

class ResultView {

  bindEvents() {
    PubSub.subscribe('WordCounter:result-calculated', (event) => {
      const numberOfWords = event.detail;
      this.displayResult(numberOfWords);
    });
  }

  displayResult(result) {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `You entered ${result} words.`;
  }

}

module.exports = ResultView;
