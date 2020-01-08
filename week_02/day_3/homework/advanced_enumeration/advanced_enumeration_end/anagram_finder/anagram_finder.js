class AnagramFinder{
  constructor (word) {
    this.word = word;
  }

  findAnagrams(otherWords) {
    return otherWords.filter((otherWord) => {
      return this.isAnagram(otherWord) && this.isDifferentWord(otherWord);
    });
  }

  isAnagram(otherWord) {
    return this.prepare(this.word) === this.prepare(otherWord);
  }

  isDifferentWord(otherWord) {
    return this.word.toLowerCase() !== otherWord.toLowerCase();
  }

  prepare(word) {
    return word.toLowerCase().split('').sort().join('');
  }
}

module.exports = AnagramFinder;
