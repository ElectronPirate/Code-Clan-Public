class Game{
  constructor (cards, players) {
    this.deck = cards;
    this.players = players;
    this.winner = null;
  }

  dealCard(card) {
    this.players[0].addCard(card);
  }

  switchPlayers() {
    const player = this.players.shift();
    this.players.push(player);
  }

  dealDeck() {
    for (const card of this.deck) {
      this.players[0].addCard(card);
      this.switchPlayers();
    }
  }

  playCards() {
    for (const player of this.players) {
      player.playCard();
    }
  }

  calculateWinnerOfTurn() {
    const card1 = this.players[0].currentCard;
    const card2 = this.players[1].currentCard;
    const category = this.players[0].currentCategory;
    if (card2[category] > card1[category]) this.switchPlayers();
  }

  giveCardsToWinner() {
    const card1 = this.players[0].currentCard;
    const card2 = this.players[1].currentCard;
    this.players[0].receiveCards([card1, card2]);
  }

  checkForWinner() {
    if (this.players[0].handEmpty()) this.winner = this.players[1];
    if (this.players[1].handEmpty()) this.winner = this.players[0];
  }

  playTurn() {
    this.calculateWinnerOfTurn();
    this.giveCardsToWinner();
    this.checkForWinner();
  }
}

module.exports = Game;
