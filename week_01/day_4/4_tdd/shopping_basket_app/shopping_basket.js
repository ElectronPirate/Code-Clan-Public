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

module.exports = shoppingBasket;
