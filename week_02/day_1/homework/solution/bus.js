const Bus = function(routeNumber, destination){
  this.routeNumber = routeNumber;
  this.destination = destination;
  this.passengers = [];
  this.distance = 0;
}

Bus.prototype.drive = function() {
  this.distance += 10;
}

Bus.prototype.passengerCount = function() {
  return this.passengers.length;
}

Bus.prototype.pickUp = function(person) {
  this.passengers.push(person);
}

Bus.prototype.dropOff = function(person) {
  for (var i = this.passengers.length - 1; i >= 0; i--) {
    if( this.passengers[i] === person ){
      this.passengers.splice(i, 1);
    }
  }
}

Bus.prototype.empty = function(){
  this.passengers = [];
}

Bus.prototype.pickUpFromStop = function(stop) {
  for(let p of stop.queue){
    this.pickUp(p);
  }
  stop.clearQueue();
}


module.exports = Bus;
