const Journey = require('../journey.js');

describe('Journey', () => {

  let journey1;

  beforeEach(() => {
    journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
  });

  it('should have a start location', () => {
    expect(journey1.startLocation).toBe('linlithgow');
  });

  it('should have a end location', () => {
    expect(journey1.endLocation).toBe('stirling');
  });

  it('should have a mode of transport', () => {
    expect(journey1.transport).toBe('train');
  });

  it('should have a distance', () => {
    expect(journey1.distance).toBe(30);
  });

});
