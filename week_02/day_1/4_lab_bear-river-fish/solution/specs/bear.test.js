const Bear = require('../bear');
const Fish = require('../fish');
const River = require('../river');

describe('Bear', () => {

  // declare new variables to store the objects in
  // we do it here to make sure they are in scope of the test functions
  let yogi;
  let fish1, fish2, fish3;
  let amazon;

  beforeEach(() => {
    // Let's create a new Bear, Fishes, River before each test
    yogi = new Bear('Yogi', 'Grizzly');

    fish1 = new Fish("Bob");
    fish2 = new Fish("Harry");
    fish3 = new Fish("Sally");

    amazon = new River("Amazon", [fish1, fish2, fish3]);
  });

  test('has a name of Yogi', () => {
    expect(yogi.name).toBe("Yogi");
  });

  test('starts with an empty belly', () => {
    expect(yogi.foodCount()).toBe(0);
  });

  test('bear can take fish from river', () => {
    yogi.takeFishFromRiver(amazon);
    expect(yogi.foodCount()).toBe(1);
    expect(amazon.getNumberOfFish()).toBe(2);
  });

  test('bear cant take fish from empty river', () => {
    amazon = new River("Amazon", []);
    yogi.takeFishFromRiver(amazon);
    expect(yogi.foodCount()).toBe(0);
    expect(amazon.getNumberOfFish()).toBe(0);
  });

});
