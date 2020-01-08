const winChecker = {
  checkForWin: (guessedName, chosenCharacter) => {
    return guessedName === chosenCharacter.name;
  }
}

export default winChecker;
