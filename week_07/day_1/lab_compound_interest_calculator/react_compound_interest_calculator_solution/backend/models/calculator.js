class Calculator{

  static calculateCompoundInterest({ baseAmount, annualInterest, calculationPeriod }){
    annualInterest /= 100;

    const totalInterest = baseAmount * (Math.pow(1 + annualInterest/12, 12*calculationPeriod) - 1);
    const futureValue = totalInterest + baseAmount;
    return Number(futureValue.toFixed(2));
  }

}

module.exports = Calculator;