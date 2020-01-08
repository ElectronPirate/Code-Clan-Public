class PaintCan{

  constructor(litresOfPaint) {
    this._litresOfPaint = litresOfPaint;
  };

  get litresOfPaint(){
    return this._litresOfPaint;
  }

  isEmpty() {
    return !this._litresOfPaint;
  };

  decreasePaint(litres) {
    this._litresOfPaint -= litres;
  };

  empty() {
    this._litresOfPaint = 0;
  };
}

module.exports = PaintCan;
