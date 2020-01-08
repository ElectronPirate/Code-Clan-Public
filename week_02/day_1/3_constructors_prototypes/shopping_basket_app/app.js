const ShoppingBasket = require('./shopping_basket');
const Product = require('./product');

var shoppingBasket = new ShoppingBasket();
var bread = new Product( "bread", 0.89 );
var milk = new Product( "milk", 0.99 );
var coffee = new Product( "coffee", 1.99 );

var products = [bread, milk, coffee];

shoppingBasket.addProduct(products[0]);
shoppingBasket.addProduct(products[1]);
shoppingBasket.addProduct(products[2]);
console.log(shoppingBasket.getTotal());
