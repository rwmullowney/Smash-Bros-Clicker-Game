import React, { Component } from 'react';
import CharacterIcons from './CharacterIcons';


// Array of character icons
let icons = [
  {
    id: 1,
    path: "./img/captain.png",
    clicked: "false",
    alt: "Captain Falcon"
  }, {
    id: 2,
    path: "./img/donkey.png",
    clicked: "false",
    alt: "Donkey Kong"
  }, {
    id: 3,
    path: "./img/falco.png",
    clicked: "false",
    alt: "Falco"
  },
  {
    id: 4,
    path: "./img/fox.png",
    clicked: "false",
    alt: "Fox McCloud"
  },
  {
    id: 5,
    path: "./img/kirby.png",
    clicked: "false",
    alt: "Kirby"
  },
  {
    id: 6,
    path: "./img/link.png",
    clicked: "false",
    alt: "Link"
  },
  {
    id: 7,
    path: "./img/luigi.png",
    clicked: "false",
    alt: "Luigi"
  },
  {
    id: 8,
    path: "./img/mario.png",
    clicked: "false",
    alt: "Mario"
  },
  {
    id: 9,
    path: "./img/ness.png",
    clicked: "false",
    alt: "Ness"
  },
  {
    id: 10,
    path: "./img/pikachu.png",
    clicked: "false",
    alt: "Pikachu"
  },
  {
    id: 11,
    path: "./img/samus.png",
    clicked: "false",
    alt: "Samus"
  },
  {
    id: 12,
    path: "./img/sonic.png",
    clicked: "false",
    alt: "Sonic"
  }];


// Shuffle the array after a button is clicked
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function highScore() {

};




class Header extends Component {

  // Set initial score to zero
  state = {
    score: 0,
    highScore: 0,
    winLose: ""
  };

  // Define function for increasing score.  Passes in the specific button clicked
  increaseScore = (event) => {

    // console.log(icons);

    // Set 'clicked' to true if false
    if (event.target.id === "false") {

      let character = event.target.getAttribute("data-num");
      icons[character].clicked = "true";
      // console.log(event.target);

      // Increase score by 1
      this.setState({ score: this.state.score + 1 });
      console.log(this.state.winLose);

      // Determine if the player has won the game
      // TODO: Actually display a victory message on the page
      if (this.state.score + 1 === 12) {

        this.state.score += 1

        if (this.state.score > this.state.highScore) {
          this.setState({
            highScore: this.state.score,
            winLose: "You win! Click to play again!"
          });
        };

        this.setState({ score: 0 })
        // Reset the "clicked" status of all the characters
        icons.forEach((character) => {
          character.clicked = "false";
        });
      }
    }

    // Display a losing message
    else {

      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score,
          winLose: "You lose! Click to play again!"
        })
      }

      this.setState({ score: 0 })

      // Reset the "clicked" status of all the characters
      icons.forEach((character) => {
        character.clicked = "false";
      });
    };


    shuffle(icons);
  };

  render() {
    return (<div className="container m-0 mw-100">

      <div className="row bg-primary py-3 justify-content-center">

        <h1 className="text-white">Super Smash Bros Clicker Game!</h1>
        <h3 className="text-white font-weight-light ml-5">Score: {this.state.score}</h3>
        <h3 className="text-white font-weight-light ml-5">High Score: {this.state.highScore}</h3>

      </div>

      <div className="justify-content-center">
        <h5 className="text-center">Click a character icon to earn a point.  However, don't click the same one twice or you lose!</h5>
      </div>

      <CharacterIcons
        icons={icons}
        increaseScore={this.increaseScore}
        winLose={this.state.winLose}
      />
    </div>);
  };

};

export default Header