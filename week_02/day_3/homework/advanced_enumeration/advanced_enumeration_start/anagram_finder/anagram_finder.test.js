const AnagramFinder = require('./anagram_finder.js');

describe('AnagramFinder', () => {
  test('should be able to detect an anagram', () => {
    const anagramFinder = new AnagramFinder('act');
    expect(anagramFinder.findAnagrams(['cat', 'dog'])).toEqual(['cat']);
  });

  test('should be able to detect a non-anagram', () => {
    const anagramFinder = new AnagramFinder('potato');
    expect(anagramFinder.findAnagrams(['tomato'])).toEqual([]);
  })

  test('should not detect words with too few letters as an anagram', () => {
    const anagramFinder = new AnagramFinder('good');
    expect(anagramFinder.findAnagrams(['dog'])).toEqual([]);
  });

  test('should not detect words with too many letters as an anagram', () => {
    const anagramFinder = new AnagramFinder('dog');
    expect(anagramFinder.findAnagrams(['good'])).toEqual([]);
  });

  test('should detect an anagram regardless of case', () => {
    const anagramFinder = new AnagramFinder('DeduCTionS');
    expect(anagramFinder.findAnagrams(['DiscOUnteD'])).toEqual(['DiscOUnteD']);
  });

  test('should not detect a word as it\'s own anagram', () => {
    const anagramFinder = new AnagramFinder('javascript');
    expect(anagramFinder.findAnagrams(['javascript'])).toEqual([]);
  });

  test('should not detect an empty string as an anagram', () => {
    const anagramFinder = new AnagramFinder('word');
    expect(anagramFinder.findAnagrams([''])).toEqual([]);
  });
});
