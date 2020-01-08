const PangramFinder = require('./pangram_finder.js');

describe('PangramFinder', () => {
  test('should be able to detect a pangram', () => {
    const pangramFinder = new PangramFinder('the quick brown fox jumps over the lazy dog');
    expect(pangramFinder.isPangram()).toBe(true);
  });

  test('should be able to detect a non-pangram', () => {
    const pangramFinder = new PangramFinder('this is not a pangram');
    expect(pangramFinder.isPangram()).toBe(false);
  });

  test('should be able to detect a pangram with mixed case', () => {
    const pangramFinder = new PangramFinder('The FIVE boxinG WiZaRdS JUMP quickly');
    expect(pangramFinder.isPangram()).toBe(true);
  });

  test('should be able to detect a non-pangram with mixed case', () => {
    const pangramFinder = new PangramFinder('');
    expect(pangramFinder.isPangram()).toBe(false);
  });

  test('should be able to detect a pangram with special characters', () => {
    const pangramFinder = new PangramFinder('how_vexingly_quick_daft_zebras_jump!');
    expect(pangramFinder.isPangram()).toBe(true);
  });

  test('should be able to detect a non-pangram with special characters', () => {
    const pangramFinder = new PangramFinder('is_this_a_pangram?!');
    expect(pangramFinder.isPangram()).toBe(false);
  });
});
