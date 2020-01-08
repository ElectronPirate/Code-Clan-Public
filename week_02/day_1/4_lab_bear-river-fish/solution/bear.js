const Bear = function (name, type) {
  this.name = name;
  this.type = type;
  this.food = [];
}

Bear.prototype.roar = function () {
  return `ROAR! My name is ${ this.name }`;
}

Bear.prototype.foodCount = function () {
  return this.food.length;
}

Bear.prototype.takeFishFromRiver = function (river) {
  let fish = river.getFish();
  if(fish) this.food.push(fish);
}

module.exports = Bear;
