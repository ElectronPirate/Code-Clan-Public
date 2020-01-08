const ShoppingBasket = function() {
  this.basket = [];
}

ShoppingBasket.prototype.addProduct = function(product) {
  this.basket.push(product);
}

ShoppingBasket.prototype.getTotal = function(){
  var total = 0;
  for (product of this.basket) {
    total += product.price;
  }
  return total;
}

module.exports = ShoppingBasket;
