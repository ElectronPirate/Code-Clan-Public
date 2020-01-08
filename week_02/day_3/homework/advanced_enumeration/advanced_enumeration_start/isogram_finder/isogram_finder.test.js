const IsogramFinder = require('./isogram_finder.js');

describe('IsogramFinder', () => {
  test('should be able to detect an isogram', () => {
    const isogramFinder = new IsogramFinder('subdermatoglyphic');
    expect(isogramFinder.isIsogram()).toBe(true);
  });

  test('should be able to detect a non-isogram', () => {
    const isogramFinder = new IsogramFinder('repeated');
    expect(isogramFinder.isIsogram()).toBe(false);
  });

  test('should be able to detect an isogram case insensitively', () => {
    const isogramFinder = new IsogramFinder('Uncopyrightable');
    expect(isogramFinder.isIsogram()).toBe(true);
  });

  test('should be able to detect a non-isogram case insensitively', () => {
    const isogramFinder = new IsogramFinder('NotAnIsogram');
    expect(isogramFinder.isIsogram()).toBe(false);
  });
});
