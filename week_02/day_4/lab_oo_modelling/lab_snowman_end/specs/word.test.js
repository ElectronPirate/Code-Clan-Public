const Word = require('../word.js');

describe('Word', () => {

  let word;

  beforeEach(() => {
    word = new Word("test");
  });

  test('should be hidden',  () => {
    expect(word.display()).toBe('****');
  });

  test('reveals the correct letters',  () => {
    expect(word.display(['t'])).toBe("t**t");
  });

  test('reveals the whole letters',  () => {
    expect(word.display(['t', 'e', 's'])).toBe("test");
  });

});
