const Card = require('../card.js');

describe('Card', () => {

  let card;

  beforeEach(() => {
    card = new Card({
      name: 'Superman',
      intelligence: 6,
      strength: 9,
      agility: 7
    });
  });

  test('should have a name', () => {
    expect(card.name).toBe('Superman');
  });

  test('should have intelligence', () => {
    expect(card.intelligence).toBe(6);
  });

  test('should have strength', () => {
    expect(card.strength).toBe(9);
  });

  test('should have agility', () => {
    expect(card.agility).toBe(7);
  });

});
