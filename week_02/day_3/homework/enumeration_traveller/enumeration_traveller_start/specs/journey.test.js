const Journey = require('../journey.js');

describe('Journey', () => {

  let journey1;

  beforeEach(() => {
    journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
  });

  xit('should have a start location', () => {
    expect(journey1.startLocation).toBe('linlithgow');
  });

  xit('should have a end location', () => {
    expect(journey1.endLocation).toBe('stirling');
  });

  xit('should have a mode of transport', () => {
    expect(journey1.transport).toBe('train');
  });

  xit('should have a distance', () => {
    expect(journey1.distance).toBe(30);
  });

});
