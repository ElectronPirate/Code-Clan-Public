document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', event => {

      const computer = getComputersChoice();
      const player = event.target.value;

      const computersChoiceElement = document.querySelector('#computers-choice');
      computersChoiceElement.textContent = `Computer plays: ${computer}`;

      const playersChoiceElement = document.querySelector('#players-choice');
      playersChoiceElement.textContent = `Player plays: ${player}`;

      const result = document.querySelector('#result');

      if(computer === player) {
        result.textContent = "It's a draw.";
      } else if (winChecker[computer] === player) {
        result.textContent = "Computer wins. Sad Face.";
      } else {
        result.textContent = "You win! Happy Dayz!";
      }
    })
  })
});

const winChecker = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

const getComputersChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const selectedOption = options[ Math.floor(Math.random() * options.length) ];
  return selectedOption;
}
