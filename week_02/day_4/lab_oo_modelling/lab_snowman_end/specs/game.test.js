const Word = require('../word.js');
const Game = require('../game.js');
const Player = require('../player.js');

describe('Game', () => {

  let word, player, game;

  beforeEach(() => {
    word = new Word("test");
    player = new Player("Sue");
    game = new Game(word, player);
  });

  test('should start with an empty guessed letter',  () => {
    expect(game.guessedLetters).toEqual([]);
  });

  test('reveals the correct letters',  () => {
    game.guess("t");
    expect(game.guessedLetters).toEqual(["t"]);
  });

  test('does not count duplicates',  () => {
    game.guess("t");
    game.guess("t");
    expect(game.guessedLetters).toEqual(["t"]);
  });

  test('reveals the word',  () => {
    game.guess("t");
    expect(game.revealWord()).toBe("t**t");
  });

  test('initially game isLost is false',  () => {
    expect(game.isLost()).toBe(false);
  });

  test('initially game isWon is false',  () => {
    expect(game.isWon()).toBe(false);
  });

  test('is lost after 6 fails',  () => {
    game.guess("a");
    game.guess("b");
    game.guess("c");
    game.guess("d");
    game.guess("f");
    expect(game.isLost()).toBe(false);
    game.guess("g");
    expect(game.isLost()).toBe(true);
  });

  test('is won with correct guesses',  () => {
    game.guess("t");
    game.guess("e");
    expect(game.isWon()).toBe(false);
    game.guess("s");
    expect(game.isWon()).toBe(true);
  });

});
