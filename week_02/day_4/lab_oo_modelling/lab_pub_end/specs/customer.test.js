const Drink = require('../drink.js');
const Customer = require('../customer.js');

describe('Drink', () => {

  let drink, customer;

  beforeEach(() => {
    drink = new Drink("beer", 2, 5);
    customer = new Customer("Frodo", 10, 28, 0);
  });

  test('should have the right name',  () => {
    expect(customer.name).toBe('Frodo');
  });

  test('should have the right money',  () => {
    expect(customer.wallet).toBe(10);
  });

  test('should have the right age',  () => {
    expect(customer.age).toBe(28);
  });

  test('should have 0 drunkenness',  () => {
    expect(customer.drunkenness).toBe(0);
  });

  test('has sufficient funds',  () => {
    expect(customer.sufficientFunds(drink)).toBe(true);
  });

  test('does not have sufficient funds',  () => {
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    expect(customer.sufficientFunds(drink)).toBe(false);
  });

  test('wallet decreases when they buy a drink',  () => {
    customer.buyDrink(drink);
    expect(customer.wallet).toBe(8);
  });

  test('drunkenness increases when they buy a drink',  () => {
    customer.buyDrink(drink);
    expect(customer.drunkenness).toBe(5);
  });

  test('can not buy a drink with insufficient funds',  () => {
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    customer.buyDrink(drink);
    expect(customer.wallet).toBe(0);
    expect(customer.drunkenness).toBe(25);
  });

});
