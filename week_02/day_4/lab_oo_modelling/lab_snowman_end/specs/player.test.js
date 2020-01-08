const Player = require('../player.js');

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player("Sue");
  });

  test('should have the right name',  () => {
    expect(player.name).toBe("Sue");
  });

  test('should initially have 6 lives',  () => {
    expect(player.lives).toBe(6);
  });

  test('can lose a life',  () => {
    player.loseLife()
    expect(player.lives).toBe(5);
  });

});
