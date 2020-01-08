class Decorator{

  constructor() {
    this._paintStock = [];
  };

  get paintStock(){
    return this._paintStock;
  }

  addCanOfPaint(paintCan) {
    this._paintStock.push(paintCan);
  };

  calculateAmountOfPaint() {
    let total = 0;

    for (const paintCan of this._paintStock) {
      total += paintCan.litresOfPaint;
    }

    return total;
  };

  hasEnoughPaint(room) {
    return this.calculateAmountOfPaint() >= room.areaInSquareMeters;
  };

  decreasePaintStock(room) {
    let areaToBePainted = room.areaInSquareMeters;

    for (const paintCan of this._paintStock) {
      if (paintCan.litresOfPaint >= areaToBePainted) {
        paintCan.decreasePaint(areaToBePainted);
        areaToBePainted = 0;
        return;
      } else {
        areaToBePainted -= paintCan.litresOfPaint;
        paintCan.empty();
      }
    }
  };

  paintRoom(room) {
    if (!this.hasEnoughPaint(room)) {
      return;
    }

    room.paint();
    this.decreasePaintStock(room);
  };

  removeEmptyPaintCans() {
    const cansWithPaint = [];

    for (const paintCan of this._paintStock) {
      if (!paintCan.isEmpty()) {
        cansWithPaint.push(paintCan);
      }
    }

    this._paintStock = cansWithPaint;
  };

}

module.exports = Decorator;
