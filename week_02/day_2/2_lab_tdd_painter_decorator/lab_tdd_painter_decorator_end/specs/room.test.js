const Room = require('../room.js');

describe('Room', function () {

  let room;

  beforeEach( () => {
    room = new Room(20);
  });

  test('should have an area in square meters', () => {
    expect(room.areaInSquareMeters).toBe(20);
  });

  test('should start not painted', () => {
    expect(room.isPainted).toBe(false);
  });

  test('should be able to be painted', () => {
    room.paint();
    expect(room.isPainted).toBe(true);
  });

});
