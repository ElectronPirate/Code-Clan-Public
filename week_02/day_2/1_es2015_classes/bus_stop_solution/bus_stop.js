class BusStop{

  constructor(name) {
    this._name = name;
    this.queue = [];
  }

  get name(){
    return this._name;
  }

  set name(newName){
    this._name = newName;
  }

  addToQueue(person) {
    this.queue.push(person);
  }

  queueLength() {
    return this.queue.length;
  }

  clearQueue() {
    this.queue = [];
  }

}

module.exports = BusStop;
