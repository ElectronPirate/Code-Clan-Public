class Player{
  constructor (name) {
    this.name = name;
    this.hand = [];
    this.currentCard = null;
    this.currentCategory = null;
  }

  countCards() {
    return this.hand.length;
  }

  addCard(card) {
    this.hand.push(card);
  }

  handEmpty() {
    return this.hand.length === 0;
  }

  playCard() {
    this.currentCard = this.hand.pop();
  }

  selectCategory(category) {
    this.currentCategory = category;
  }

  receiveCards(cards) {
    this.hand = this.hand.concat(cards);
  }
}

module.exports = Player;
