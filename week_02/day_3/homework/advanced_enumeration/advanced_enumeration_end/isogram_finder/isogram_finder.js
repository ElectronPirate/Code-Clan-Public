class IsogramFinder{
  constructor (word) {
    this.word = word.toLowerCase();
  }

  isIsogram() {
    return this.word.split('').every(letter => this.isUnique(letter));
  }

  isUnique(letter) {
    return this.word.indexOf(letter) === this.word.lastIndexOf(letter);
  }
}

module.exports = IsogramFinder;
