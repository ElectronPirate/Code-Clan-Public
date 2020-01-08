const River = function (name, fishes) {
  this.name = name;
  this.fishes = fishes;
}

River.prototype.getName = function () {
  return this.name;
}

River.prototype.getNumberOfFish = function () {
  return this.fishes.length;
}

River.prototype.getFish = function () {
  return this.fishes.pop();
}

module.exports = River;
