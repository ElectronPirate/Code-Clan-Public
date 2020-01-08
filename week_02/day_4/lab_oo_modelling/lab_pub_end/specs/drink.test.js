const Drink = require('../drink.js');

describe('Drink', () => {

  let drink;

  beforeEach(() => {
    drink = new Drink("wine", 4.25, 5);
  });

  test('should have a name',  () => {
    expect(drink.name).toBe('wine');
  });

  test('should have the right price',  () => {
    expect(drink.price).toBe(4.25);
  });

  test('should have the right alcohol level',  () => {
    expect(drink.alcoholLevel).toBe(5);
  });

});
