class Traveller{

  constructor(journeys) {
    this.journeys = journeys;
  };

  getJourneyStartLocations() {
    return this.journeys.map((journey) => {
      return journey.startLocation;
    });
  };

  getJourneyEndLocations() {
    return this.journeys.map((journey) => {
      return journey.endLocation;
    });
  };

  getJourneysByTransport(transport) {
    return this.journeys.filter((journey) => {
      return journey.transport === transport;
    });
  };

  getJourneysByMinDistance(minDistance) {
    return this.journeys.filter((journey) => {
      return journey.distance > minDistance;
    });
  };

  calculateTotalDistanceTravelled() {
    return this.journeys.reduce((total, journey) => {
      return total + journey.distance;
    }, 0);
  };

  getUniqueModesOfTransport() {
    return this.journeys.map((journey) => {
      return journey.transport;
    })
    .filter((transport, index, array) => {
      return array.indexOf(transport) === index;
    });
  };
}

module.exports = Traveller;
