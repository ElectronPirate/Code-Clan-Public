const PaintCan = require('../paint_can.js');

describe('Paint Can', function () {

  let paintCan;

  beforeEach( () => {
    paintCan = new PaintCan(10);
  });

  test('should have a number of litres of paint', () => {
    expect(paintCan.litresOfPaint).toBe(10);
  });

  test('should not start empty', () => {
    expect(paintCan.isEmpty()).toBe(false);
  });

  test('should be able to empty itself', () =>  {
    paintCan.empty();
    expect(paintCan.isEmpty()).toBe(true);
  });

});
