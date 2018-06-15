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




class Header extends Component {

  // Set initial score to zero
  state = {
    score: 0
  };

  // Define function for increasing score.  Passes in the specific button clicked
  increaseScore = (event) => {

    // How does this automatically display the shuffle on the page?
    // NOTE THIS DOESN'T WORK.  It shuffles the pictures but it makes it so only the region has been clicked NOT the image itself
    // For some reason the images shuffle, but the true/false for clicked doesn't move with them
    shuffle(icons);

    // Set id to true if false (to see whether the icon has been clicked)
    if (event.target.id === "false") {
      event.target.id = "true"
      console.log(event.target)

      // Increase score by 1
      this.setState({ score: this.state.score + 1});

      // Determine if the player has won the game
      // TODO: Actually display a victory message on the page
      if (this.state.score + 1 === 12) {
        console.log("You Win!")
      }
    }

    // Display a losing message
    else {
      console.log("You have clicked this already.  You lose.");
      this.setState( { score: 0 })
      // return this.renderPage();
    }
  };

  // Did this to see if I could fix the clicked true/false issue but I'm not sure it's doing it
  renderPage = () => {
    return (
      <div className="container m-0 mw-100">

        <div className="row bg-primary py-3 justify-content-center">

          <h1 className="text-white">Super Smash Bros Clicker Game!</h1>
          <h3 className="text-white font-weight-light ml-5">Score: {this.state.score}</h3>

        </div>

        <div className="justify-content-center">
          <h5 className="text-center">Click a character icon to earn a point!  However, don't click the same one twice or you lose!</h5>
        </div>

      
        <CharacterIcons
          icons={icons}
          count={this.state.score}
          increaseScore={this.increaseScore}
        />
      </div>
    )
  }

  render() {
    return this.renderPage()
  }

};

export default Header