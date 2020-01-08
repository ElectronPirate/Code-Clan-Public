const PubSub = require('../helpers/pub_sub.js');

class PrimeChecker {

  bindEvents() {
    PubSub.subscribe('NumberInputView:number-submitted', (event) => {
      const inputtedNumber = event.detail;
      const result = this.numberIsPrime(inputtedNumber);
      PubSub.publish('PrimeChecker:result-calculated', result);
    });
  }

  numberIsPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
    }
    return true;
  }

};

module.exports = PrimeChecker;
