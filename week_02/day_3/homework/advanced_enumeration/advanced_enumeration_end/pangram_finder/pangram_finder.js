class PangramFinder{
  constructor (phrase) {
    this.phrase = phrase.toLowerCase();
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  }

  isPangram() {
    return this.alphabet.every(letter => this.phrase.includes(letter));
  }

}

module.exports = PangramFinder;
