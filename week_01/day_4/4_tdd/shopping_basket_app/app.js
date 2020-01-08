const shoppingBasket = require('./shopping_basket');
const products = require('./products');

shoppingBasket.addProduct(products[0]);
shoppingBasket.addProduct(products[1]);
shoppingBasket.addProduct(products[2]);
console.log(shoppingBasket.getTotal());
