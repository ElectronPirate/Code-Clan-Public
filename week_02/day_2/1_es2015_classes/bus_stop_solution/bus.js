class Bus{

  constructor(routeNumber, destination){
    this._routeNumber = routeNumber;
    this._destination = destination;
    this.passengers = [];
    this._distance = 0;
  }

  get routeNumber(){
    return this._routeNumber;
  }

  get destination() {
    return this._destination;
  }

  get distance() {
    return this._distance;
  }

  drive() {
    this._distance += 10;
  }

  passengerCount() {
    return this.passengers.length;
  }

  pickUp(person) {
    this.passengers.push(person);
  }

  dropOff(person) {
    for (var i = this.passengers.length - 1; i >= 0; i--) {
      if( this.passengers[i] === person ){
        this.passengers.splice(i, 1);
      }
    }
  }

  empty(){
    this.passengers = [];
  }

  pickUpFromStop(stop) {
    for(let p of stop.queue){
      this.pickUp(p);
    }
    stop.clearQueue();
  }

}

module.exports = Bus;
