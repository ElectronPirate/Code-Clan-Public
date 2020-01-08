const BusStop = function(name) {
  this.name = name;
  this.queue = [];
}

BusStop.prototype.addToQueue = function(person) {
  this.queue.push(person);
}

BusStop.prototype.queueLength = function() {
  return this.queue.length;
}

BusStop.prototype.clearQueue = function() {
  this.queue = [];
}

module.exports = BusStop;
