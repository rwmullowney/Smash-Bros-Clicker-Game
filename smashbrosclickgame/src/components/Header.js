import React from 'react';
import CharacterIcons from './CharacterIcons';

let icons = [
  {
      id: 1,
      path: "./img/captain.png",
      clicked: false,
      alt: "Captain Falcon"
  }, {
      id: 2,
      path: "./img/donkey.png",
      clicked: false,
      alt: "Donkey Kong"
  }, {
      id: 3,
      path: "./img/falco.png",
      clicked: false,
      alt: "Falco"
  },
  {
      id: 4,
      path: "./img/fox.png",
      clicked: false,
      alt: "Fox McCloud"
  },
  {
      id: 5,
      path: "./img/kirby.png",
      clicked: false,
      alt: "Kirby"
  },
  {
      id: 6,
      path: "./img/link.png",
      clicked: false,
      alt: "Link"
  },
  {
      id: 7,
      path: "./img/luigi.png",
      clicked: false,
      alt: "Luigi"
  },
  {
      id: 8,
      path: "./img/mario.png",
      clicked: false,
      alt: "Mario"
  },
  {
      id: 9,
      path: "./img/ness.png",
      clicked: false,
      alt: "Ness"
  },
  {
      id: 10,
      path: "./img/pikachu.png",
      clicked: false,
      alt: "Pikachu"
  },
  {
      id: 11,
      path: "./img/samus.png",
      clicked: false,
      alt: "Samus"
  },
  {
      id: 12,
      path: "./img/sonic.png",
      clicked: false,
      alt: "Sonic"
  }];

const Header = () => (

  <div className="container m-0 mw-100">
  
    <div className="row bg-primary py-3 justify-content-center">

      <h1 className="text-white">Super Smash Bros Clicker Game!</h1>
      <h3 className="text-white font-weight-light ml-5">Score: 0</h3>

    </div>
    <CharacterIcons icons={icons}/>
  </div>
)

export default Header