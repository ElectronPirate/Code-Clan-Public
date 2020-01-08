const Fish = require('../fish');

describe('Fish', () => {

  test('has a name of Nemo', () => {
    let fish = new Fish("Nemo");
    expect(fish.name).toBe("Nemo");
  });

});
