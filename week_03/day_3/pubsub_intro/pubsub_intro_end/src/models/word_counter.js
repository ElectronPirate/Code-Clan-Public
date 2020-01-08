const PubSub = require('../helpers/pub_sub.js');

class WordCounter {

  bindEvents() {
    PubSub.subscribe('FormView:text-submitted', (event) => {
      const inputtedText = event.detail;
      const result = this.countWords(inputtedText);
      PubSub.publish('WordCounter:result-calculated', result);
    });
  }

  countWords(text) {
    const words = text.split(' ');
    return words.length;
  }

}

module.exports = WordCounter;
