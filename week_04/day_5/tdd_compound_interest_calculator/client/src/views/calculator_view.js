const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper');

class CalculatorView {
  
  constructor(form, resultElement){
    this.form = form;
    this.request = new RequestHelper('http://localhost:3000/api/results/compound');
    this.result = resultElement;
  }

  bindEvents(){
    this.form.addEventListener('submit', (evt) => {
      this.handleSubmit(evt);
    });

    PubSub.subscribe('Calculator:result-loaded', (evt) => {
      this.render(evt.detail);
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    const options = this.createOptions(evt.target);
    this.request.post(options)
      .then((result) => {
        PubSub.publish('Calculator:result-loaded', result);
      })
      .catch(console.error);
  }

  createOptions(form){
    return {
      baseAmount: Number(form.baseAmount.value),
      annualInterest: Number(form.annualInterest.value),
      calculationPeriod: Number(form.calculationPeriod.value)
    };
  }

  render(result){
   this.result.textContent = new Intl.NumberFormat('us-ENG', { style: 'currency', currency: 'USD' }).format(result);
  }

}

module.exports = CalculatorView;