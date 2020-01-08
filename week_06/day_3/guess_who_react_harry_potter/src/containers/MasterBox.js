import React, { Component } from 'react';
import Grid from '../components/Grid.js';
import QuestionBox from '../components/QuestionBox.js';
import GuessBox from '../components/GuessBox.js';
import gameData from '../data/harry_potter_data.js';

class MasterBox extends Component {

  constructor(props) {
    super(props);
    this.chooseCharacter = this.chooseCharacter.bind(this);
    this.flipCharacter = this.flipCharacter.bind(this);
    this.state = {
      characters: gameData,
      opponentCharacter: null,
      won: false
    };
  }

  componentDidMount(){
    this.chooseCharacter();
  }

  chooseCharacter() {
    const chosenCharacter = this.state.characters[Math.floor(Math.random() * (this.state.characters.length-1))];
    this.setState({opponentCharacter:chosenCharacter})
  }

  flipCharacter(indexToFlip) {
    const updatedCharacters = this.state.characters.map((character, index) => {
      if(index === indexToFlip){
        const newCharacter = Object.assign({}, character, {flipped: !character.flipped})
        return newCharacter;
      }else{
        return character;
      }
    })
    this.setState({characters: updatedCharacters});
  }

  render(){
    return(
      <div className="main">
        <img src="/images/logo.png"/><br />
        <Grid characters={this.state.characters} onFlip={this.flipCharacter}></Grid>
        <QuestionBox characters={this.state.characters} opponentCharacter={this.state.opponentCharacter}></QuestionBox>
        <GuessBox characters={this.state.characters} opponentCharacter={this.state.opponentCharacter}></GuessBox>
      </div>
    );
  }
};

export default MasterBox;
