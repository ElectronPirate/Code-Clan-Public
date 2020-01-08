const River = require('../river');
const Fish = require('../fish');

describe('River', () => {

  let amazon;

  beforeEach(() => {
    let fish1 = new Fish("Bob");
    let fish2 = new Fish("Harry");
    let fish3 = new Fish("Fred");
    amazon = new River("Amazon", [fish1,fish2,fish3]);
  });

  test('has a name of Amazon', () => {
    expect(amazon.name).toBe("Amazon");
  });

  test('has initially 3 fish', () => {
    expect(amazon.getNumberOfFish()).toBe(3);
  });

  test('can pop off a fish', () => {
    var fish = amazon.getFish();
    expect(fish.name).toBe("Fred");
  });

});
