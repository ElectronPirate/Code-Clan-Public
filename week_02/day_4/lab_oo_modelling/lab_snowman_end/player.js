class Player{
  constructor(name){
    this.name = name;
    this.lives = 6;
  }

  loseLife(){
    this.lives -= 1;
  }
}

module.exports = Player;
