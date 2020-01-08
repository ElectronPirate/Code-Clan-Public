class Game {

  constructor(word, player) {
    this.word = word;
    this.player = player;
    this.guessedLetters = [];
  }

  guess(letter) {
    if(!this.guessedLetters.includes(letter)){
      this.guessedLetters.push(letter);
    }

    if(!this.word.includes(letter)) {
      this.player.loseLife();
    }
  }

  revealWord() {
    return this.word.display(this.guessedLetters);
  }

  livesRemaining() {
    return this.player.lives;
  }

  isLost() {
    return this.player.lives <= 0;
  }

  isWon() {
    return !this.revealWord().includes("*");
  }

}

module.exports = Game;
