![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Modules

One of the principles of Clean Code is that we want to separate concerns. This means we want small amounts of code in multiple files, logically grouped.

Consider the following:

```js
var bread = { productName: "bread", price: 0.89 };
var milk = { productName: "milk", price: 0.99 };
var coffee = { productName: "coffee", price: 1.99 };
var products = [bread, milk, coffee];

var shoppingBasket = {
  basket: [],
  addProduct(product) {
    shoppingBasket.basket.push(product);
  },
  getTotal() {
    var total = 0;
    for (product of shoppingBasket.basket) {
      total += product.price;
    }
    return total;
  }
};

shoppingBasket.addProduct(products[0]);
shoppingBasket.addProduct(products[1]);
shoppingBasket.addProduct(products[2]);
console.log(shoppingBasket.getTotal());

```
Our shoppingBasket is tightly coupled to our products.

Let's say we want to separate our shoppingBasket from our products. We want 3 different files:

1. A main file that will call the addProduct and getTotal methods. We'll call this app.js
2. A file for our shoppingBasket
3. A file for our products

```sh
mkdir shopping_basket_app
touch shopping_basket_app/shopping_basket.js
touch shopping_basket_app/products.js
touch shopping_basket_app/app.js
```

## TASK

 - Create a ```band``` object that represents a rock band in a file called **band.js**. Your band should have an array of members (like the **shoppingBasket** has an array of **products**), and ```addMember``` method and a ```getMembers``` method.

 - Create a **members.js** which has some members objects in it and export them as an array.

 - Create an **app.js** where you ```require``` the band and the members and add them to the band using the ```addMember``` method.

 - Log out the members of the band.
