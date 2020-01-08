const ShoppingBasket = require('../shopping_basket');
const Product = require('../product');

describe('shopping basket', () => {

  let shoppingBasket;
  let bread, milk, coffee;
  let products;

  beforeEach(() => {
    // Let's make sure the basket is empty
    shoppingBasket = new ShoppingBasket();

    bread = new Product( "bread", 0.89 );
    milk = new Product( "milk",  0.99 );
    coffee = new Product( "coffee", 1.99 );

    products = [bread, milk, coffee];
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
