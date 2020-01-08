class Room{

  constructor(areaInSquareMeters) {
    this.areaInSquareMeters = areaInSquareMeters;
    this.isPainted = false;
  }

  paint() {
    this.isPainted = true;
  }
}

module.exports = Room;
