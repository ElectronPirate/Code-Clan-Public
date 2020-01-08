const BusStop = require('../bus_stop');
const Person = require('../person');
const Bus = require('../bus');

describe('Bus', () => {

  let stop;
  let passenger1, passenger2, passenger3;
  let bus;

  beforeEach(() => {
    stop = new BusStop("Elm Row");
    passenger1 = new Person("John", 30);
    passenger2 = new Person("Mary", 63);
    passenger3 = new Person("Bob", 40);
    bus22 = new Bus(22, "Ocean Terminal");
  });

  test('has a route number 22', () => {
    expect(bus22.routeNumber).toBe(22);
  });

  test('is going to Ocean Terminal', () => {
    expect(bus22.destination).toBe("Ocean Terminal");
  });

  test('can drive', () => {
    bus22.drive();
    bus22.drive();
    expect(bus22.distance).toBe(20);
  });

  test('starts with no passengers', () => {
    expect(bus22.passengerCount()).toBe(0);
  });

  test('can add a passenger', () => {
    bus22.pickUp(passenger1);
    expect(bus22.passengerCount()).toBe(1);
  });

  test('can add two passengers', () => {
    bus22.pickUp(passenger1);
    bus22.pickUp(passenger2);
    expect(bus22.passengerCount()).toBe(2);
  });

  test('can drop off a passenger', () => {
    bus22.pickUp(passenger1);
    bus22.pickUp(passenger2);
    bus22.dropOff(passenger1);
    expect(bus22.passengerCount()).toBe(1);
  });

  test('can empty the bus', () => {
    bus22.pickUp(passenger1);
    bus22.pickUp(passenger2);
    bus22.empty();
    expect(bus22.passengerCount()).toBe(0);
  });

  test('can pick up from stop', () => {
    stop.addToQueue(passenger1);
    bus22.pickUpFromStop(stop);
    expect(stop.queueLength()).toBe(0);
    expect(bus22.passengerCount()).toBe(1);
  });

  test('can pick up multiple people from stop', () => {
    stop.addToQueue(passenger1);
    stop.addToQueue(passenger2);
    bus22.pickUpFromStop(stop);
    expect(stop.queueLength()).toBe(0);
    expect(bus22.passengerCount()).toBe(2);
  });

  test('can pick up multiple people from stop', () => {
    stop.addToQueue(passenger1);
    stop.addToQueue(passenger2);
    bus22.pickUpFromStop(stop);
    expect(stop.queueLength()).toBe(0);
    expect(bus22.passengerCount()).toBe(2);
  });

});
