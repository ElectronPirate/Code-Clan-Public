class Park{

  constructor(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this._dinosaurs = [];
  }

  get dinosaurs() {
    return this._dinosaurs;
  }

  set dinosaurs(arr) {
    this._dinosaurs = arr;
  }

  add(dinosaur) {
    this._dinosaurs.push(dinosaur);
  }

  remove(dinosaur) {
    const index = this._dinosaurs.indexOf(dinosaur);
    this._dinosaurs.splice(index, 1);
  }

  findMostAttractiveDinosaur() {
    let mostAttractiveDino = this._dinosaurs[0];

    for (const dino of this._dinosaurs) {
      if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
        mostAttractiveDino = dino;
      }
    }

    return mostAttractiveDino;
  }

  findBySpecies(species) {
    const foundDinosaurs = [];

    for (const dinosaur of this._dinosaurs) {
      if (dinosaur.species === species) {
        foundDinosaurs.push(dinosaur);
      }
    }

    return foundDinosaurs;
  }

  calculateAverageVisitorsPerDay() {
    let averageDailyVisitors = 0;

    for (const dinosaur of this._dinosaurs) {
      averageDailyVisitors += dinosaur.guestsAttractedPerDay;
    }

    return averageDailyVisitors;
  }

  calculateAverageVisitorsPerYear() {
    return this.calculateAverageVisitorsPerDay() * 365;
  }

  calculateAverageYearlyRevenue() {
    return this.ticketPrice * this.calculateAverageVisitorsPerYear();
  }

  removeBySpecies(species) {
    const newDinosaurs = [];

    for (const dinosaur of this._dinosaurs) {
      if (dinosaur.species !== species) {
        newDinosaurs.push(dinosaur);
      }
    }

    this._dinosaurs = newDinosaurs;
  }

  numberOfDinosaursByDiet() {
    const numberOfDinosaursByDiet = {};

    for (const dinosaur of this._dinosaurs) {
      if (numberOfDinosaursByDiet[dinosaur.diet]) {
        numberOfDinosaursByDiet[dinosaur.diet] += 1;
      }
      else {
        numberOfDinosaursByDiet[dinosaur.diet] = 1;
      }
    }

    return numberOfDinosaursByDiet;
  }

}

module.exports = Park;
