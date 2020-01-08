const UpperCaser = require('./upper_caser.js');

describe('UpperCaser', () => {
  test('should be able to convert a single word to uppercase', () => {
    const upperCaser = new UpperCaser(['shouting']);
    expect(upperCaser.toUpperCase()).toEqual(['SHOUTING']);
  });

  test('should be able to convert multiple words to uppercase', () => {
    const upperCaser = new UpperCaser(['i', 'am', 'shouting']);
    expect(upperCaser.toUpperCase()).toEqual(['I', 'AM', 'SHOUTING']);
  });
});
