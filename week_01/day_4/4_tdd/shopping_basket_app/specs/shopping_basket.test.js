const shoppingBasket = require('../shopping_basket');
const products = require('../products');

describe('shopping basket', () => {

  beforeEach(() => {
    // Let's make sure the basket is empty
    shoppingBasket.basket = [];
  });

  test('starts with an empty array', () => {
    expect(shoppingBasket.basket.length).toBe(0);
  });

  test('should add the bread product to the basket', () => {
    //ARRANGE
    //nothing to do here

    //ACT
    shoppingBasket.addProduct(products[0]);

    //ASSERT
    expect(shoppingBasket.basket).toEqual([{ productName: "bread", price: 0.89 }]);
  });

  test('should add all 3 products', () => {
    //ARRANGE
    //nothing to do here

    //ACT
    shoppingBasket.addProduct(products[0]);
    shoppingBasket.addProduct(products[1]);
    shoppingBasket.addProduct(products[2]);

    //ASSERT
    expect(shoppingBasket.basket).toEqual(
      [
        { productName: "bread", price: 0.89 },
        { productName: "milk", price: 0.99 },
        { productName: "coffee", price: 1.99 }
      ]
    );
  });

  test('total should be 3.87', () => {
    //ARRANGE
    //nothing to do here

    //ACT
    shoppingBasket.addProduct(products[0]);
    shoppingBasket.addProduct(products[1]);
    shoppingBasket.addProduct(products[2]);

    //ASSERT
    expect(shoppingBasket.getTotal()).toBe(3.87);
  });

});
