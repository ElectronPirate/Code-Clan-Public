const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', () => {

  let player;
  let card1;

  beforeEach(() => {
    player = new Player('Tracy Champ');

    card1 = new Card({
      name: 'Wonder Woman',
      intelligence: 8,
      strength: 7,
      agility: 5
    });
  });

  test('should have a name', () => {
    expect(player.name).toBe('Tracy Champ');
  });

  test('should have a hand that starts empty', () => {
    const actual = player.hand;
    expect(player.hand).toEqual([]);
  });

  test('should be able to count cards in hand', () => {
    const actual = player.countCards();
    expect(player.countCards()).toBe(0);
  });

  test('should be able to add a card', () => {
    player.addCard(card1);
    const actual = player.hand[0];
    expect(actual).toEqual(card1);
  });

  test('should be able to check if hand is empty', () => {
    const actual = player.handEmpty();
    expect(player.handEmpty()).toBe(true);
  });

  test('should be able to play a card', () => {
    player.addCard(card1);
    player.playCard();
    expect(player.currentCard).toEqual(card1);
  });

  test('should be able to select a category', () => {
    player.selectCategory('intelligence');
    expect(player.currentCategory).toBe('intelligence');
  });

  test('should have hand decreased by one after playing a card', () => {
    player.addCard(card1);
    player.playCard();
    const actual = player.countCards();
    expect(player.countCards()).toBe(0);
  });

  test('should be able to receive cards', () => {
    const card2 = new Card({
      name: 'Batman',
      intelligence: 10,
      strength: 5,
      agility: 6
    });
    player.receiveCards([card1, card2]);
    expect(player.hand).toEqual([card1, card2]);
  });

});
