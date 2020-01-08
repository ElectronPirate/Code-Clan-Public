const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', () => {

  let paintCan1;
  let paintCan2;
  let paintCan3;
  let paintCan4;
  let paintCan5;
  let room;
  let decorator;

  beforeEach( () => {
    paintCan1 = new PaintCan(5);
    paintCan2 = new PaintCan(10);
    paintCan3 = new PaintCan(15);
    paintCan4 = new PaintCan(0);
    paintCan5 = new PaintCan(0);
    room = new Room(30);
    decorator = new Decorator();
  });

  test('should start with an empty paint stock', () => {
    expect(decorator.paintStock).toEqual([]);
  });

  test('should be able to add a can of paint to paint stock', () => {
    decorator.addCanOfPaint(paintCan1);
    expect(decorator.paintStock).toEqual([paintCan1]);
  });

  test('should be able to calculate total litres paint it has in stock', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan2);
    expect(decorator.calculateAmountOfPaint()).toBe(15);
  });

  test('should be able to calculate that it has enough paint to paint a room', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan2);
    decorator.addCanOfPaint(paintCan3);
    expect(decorator.hasEnoughPaint(room)).toBe(true);
  });

  test('should be able to calcuate that it doesnt have enough paint to paint a room', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan2);
    expect(decorator.hasEnoughPaint(room)).toBe(false);
  });

  test('should be able to paint room if has enough paint in stock', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan2);
    decorator.addCanOfPaint(paintCan3);
    decorator.paintRoom(room);
    expect(room.isPainted).toBe(true);
  });

  test('should not paint room if it has not enough paint in stock', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan2);
    decorator.paintRoom(room);
    expect(room.isPainted).toBe(false);
  });

  test('should be able to decrease amount of paint in stock for a given room', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan2);
    decorator.addCanOfPaint(paintCan3);
    decorator.decreasePaintStock(room);
    expect(decorator.calculateAmountOfPaint()).toBe(0);
  });

  test('should be able to decrease amount of paint in stock when painting a room', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan2);
    decorator.addCanOfPaint(paintCan3);
    decorator.paintRoom(room);
    expect(decorator.calculateAmountOfPaint()).toBe(0);
  });

  test('should be able to remove empty paint cans from stock', () => {
    decorator.addCanOfPaint(paintCan1);
    decorator.addCanOfPaint(paintCan4);
    decorator.addCanOfPaint(paintCan2);
    decorator.addCanOfPaint(paintCan5);
    decorator.removeEmptyPaintCans();
    expect(decorator.paintStock).toEqual([paintCan1, paintCan2]);
  });

});
