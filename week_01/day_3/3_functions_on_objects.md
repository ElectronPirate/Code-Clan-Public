![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Functions on Objects

Often, we want to group our functions together in objects. We call these methods.

Consider the following:

```js
var obj = {
  foo: function() {
    /* code */
  },
  bar: function() {
    /* code */
  }
};
```
We can call the function **foo**:

```js
obj.foo();
```

We can also use a shortcut and omit the function keyword.

```js
var obj = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  }
};
```

Consider the following.

1. What does the code print out?
2. What is the purpose of the products array?
3. How do we refer to the basket array inside the addProduct method?

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
