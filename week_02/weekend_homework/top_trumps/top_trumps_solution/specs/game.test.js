const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe('Game', () => {

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let tracy;
  let tim;
  let players;
  let game;

  beforeEach(() => {
    card1 = new Card({
      name: 'Superman',
      intelligence: 6,
      strength: 9,
      agility: 7
    });

    card2 = new Card({
      name: 'Scarlet Witch',
      intelligence: 7,
      strength: 10,
      agility: 5
    });

    card3 = new Card({
      name: 'Black Widow',
      intelligence: 8,
      strength: 6,
      agility: 9
    });

    card4 = new Card({
      name: 'The Flash',
      intelligence: 7,
      strength: 4,
      agility: 10
    });

    card5 = new Card({
      name: 'Wonder Woman',
      intelligence: 8,
      strength: 7,
      agility: 5
    });

    card6 = new Card({
      name: 'Batman',
      intelligence: 10,
      strength: 5,
      agility: 6
    });

    cards = [card1, card2, card3, card4, card5, card6];
    tracy = new Player('Tracy Champ');
    tim = new Player('Tim Win');
    players = [tracy, tim]
    game = new Game(cards, players);
  });

  test('should have a deck', () => {
    expect(game.deck).toEqual(cards);
  });

  test('should have two players', () => {
    expect(game.players).toEqual(players);
  });

  test('should be able to deal one card to a player', () => {
    game.dealCard(card1);
    const actual = tracy.hand[0];
    expect(actual).toEqual(card1);
  });

  test('should be able to switch players', () => {
    game.switchPlayers();
    expect(game.players).toEqual([tim, tracy]);
  });

  test('should be able to deal deck to players', () => {
    game.dealDeck();
    expect(tracy.hand).toEqual([card1, card3, card5]);
    expect(tim.hand).toEqual([card2, card4, card6]);
  });

  test('should be able to have all players play cards', () => {
    game.dealDeck();
    game.playCards();
    expect(tracy.currentCard).toEqual(card5);
    expect(tim.currentCard).toEqual(card6);
  });

  test('should be able to find the winner of the turn', () => {
    game.dealDeck();
    game.playCards();
    tracy.selectCategory('intelligence');
    game.calculateWinnerOfTurn();
    const actual = game.players[0];
    expect(actual).toEqual(tim);
  });

  test('should be able to give cards to winner', () => {
    game.dealDeck();
    game.playCards();
    tracy.selectCategory('intelligence');
    game.calculateWinnerOfTurn();
    game.giveCardsToWinner();
    expect(tim.hand).toEqual([card2, card4, card6, card5]);
  });

  test('should be able to check for a winner of the game', () => {
    tracy.addCard(card1);
    tim.addCard(card2);
    game.playCards();
    tracy.selectCategory('intelligence');
    game.calculateWinnerOfTurn();
    game.giveCardsToWinner(tracy);
    game.checkForWinner();
    expect(game.winner).toEqual(tim);
  });

  test('should be able to play turn', () => {
    game.dealDeck();
    game.playCards();
    tracy.selectCategory('intelligence');
    game.playTurn();
    expect(tracy.hand).toEqual([card1, card3]);
    expect(tim.hand).toEqual([card2, card4, card6, card5]);
    expect(game.players).toEqual([tim, tracy]);
  });

  test('should be able to find winner of game at the end of final turn', function() {
    tracy.addCard(card1);
    tim.addCard(card2);
    game.playCards();
    tracy.selectCategory('strength');
    game.playTurn();
    expect(game.winner).toEqual(tim);
  });

});
