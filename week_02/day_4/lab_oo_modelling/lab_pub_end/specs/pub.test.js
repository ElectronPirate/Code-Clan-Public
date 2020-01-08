const Drink = require('../drink.js');
const Pub = require('../pub.js');
const Customer = require('../customer.js');

describe('Pub', () => {

  let drink1, drink2, drink3, drinks;
  let pub;
  let customer1, customer2, customer3;

  beforeEach(() => {
    drink1 = new Drink("beer", 2, 5);
    drink2 = new Drink("wine", 3, 10);
    drink3 = new Drink("gin", 4, 30);
    drinks = [drink1, drink2];
    pub = new Pub("The Prancing Pony", 100, drinks);
    customer1 = new Customer("Frodo", 10, 28, 0);
    customer2 = new Customer("Merry", 15, 17, 0);
    customer3 = new Customer("Pippin", 100, 28, 0);
  });

  test('should have a name',  () => {
    expect(pub.name).toBe('The Prancing Pony');
  });

  test('should have a till',  () => {
    expect(pub.till).toBe(100);
  });

  test('should have the right drinks',  () => {
    expect(pub.drinks).toEqual([drink1, drink2]);
  });

  test('should reject underage customers',  () => {
    expect(pub.customerTooYoung(customer2)).toBe(true);
  });

  test('should accept of age customers',  () => {
    expect(pub.customerTooYoung(customer1)).toBe(false);
  });

  test('should serve sober customers',  () => {
    expect(pub.customerTooDrunk(customer1)).toBe(false);
  });

  test('should refuse drunk customers',  () => {
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    expect(pub.customerTooDrunk(customer3)).toBe(true);
  });

  test('can serve stocked drinks',  () => {
    pub.serve(customer1, drink1);
    expect(customer1.wallet).toBe(8);
    expect(pub.till).toBe(102);
  });

  test('cannot serve non-stocked drinks',  () => {
    pub.serve(customer1, drink3);
    expect(customer1.wallet).toBe(10);
    expect(pub.till).toBe(100);
  });

  test('should serve over 18 customer',  () => {
    pub.serve(customer1, drink2);
    expect(customer1.wallet).toBe(7);
    expect(pub.till).toBe(103);
  });

  test('should not serve under 18 customer',  () => {
    pub.serve(customer2, drink2);
    expect(customer2.wallet).toBe(15);
    expect(pub.till).toBe(100);
  });

  test('should not serve at or above 50 drunkenness',  () => {
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    pub.serve(customer3, drink2);
    expect(customer3.wallet).toBe(85);
    expect(customer3.drunkenness).toBe(50);
    expect(pub.till).toBe(115);
  });

});
