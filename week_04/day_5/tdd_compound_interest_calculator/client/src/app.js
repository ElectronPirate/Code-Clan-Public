const CalculatorView = require('./views/calculator_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const calculatorView = new CalculatorView(document.querySelector('#calculator-form'), document.querySelector('#result'));
  calculatorView.bindEvents();
});

