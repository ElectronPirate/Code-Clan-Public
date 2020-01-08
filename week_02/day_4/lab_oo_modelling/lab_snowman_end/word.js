class Word{

  constructor(hiddenWord){
    this.hiddenWord = hiddenWord;
  }

  display(guesses = []){
    var displayedWord = "";
    var wordArray = this.hiddenWord.split('');
    for (var i = 0; i < wordArray.length; i++) {
      if(guesses.includes(wordArray[i]) || wordArray[i] === " "){
        displayedWord += (wordArray[i]);
      }else{
        displayedWord += ("*");
      }
    }

    return displayedWord;
  }

  includes(letter) {
    return this.hiddenWord.includes(letter);
  }
}

module.exports = Word;
