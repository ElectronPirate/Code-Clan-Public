const Calculator = require('../calculator.js');

describe('Calculator: Compound interest', () => {
  test('should return 149,058.55 given 100000, 5 percent, 8 years', () => {
    const result = Calculator.calculateCompoundInterest(
      { baseAmount: 100000, annualInterest: 5, calculationPeriod: 8 }
    );
    expect(result).toBe(149058.55);
  });

});