const BusStop = require('../bus_stop');
const Person = require('../person');

describe('BusStop', () => {

  let stop, passenger1, passenger2;

  beforeEach(() => {
    stop = new BusStop("Waverley Station");
    passenger1 = new Person("John", 30);
    passenger2 = new Person("Mary", 63);
  });

  test('starts empty', () => {
    expect(stop.queueLength()).toBe(0);
  });

  test('can add person to queue', () => {
    stop.addToQueue(passenger1);
    expect(stop.queueLength()).toBe(1);
  });

  test('can add multiplte people to queue', () => {
    stop.addToQueue(passenger1);
    stop.addToQueue(passenger2);
    expect(stop.queueLength()).toBe(2);
  });

  test('can clear the queue', () => {
    stop.addToQueue(passenger1);
    stop.addToQueue(passenger2);
    stop.clearQueue();
    expect(stop.queueLength()).toBe(0);
  });

});
