import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


let icons = [
  {
      id: 1,
      link: "../../public/img/captain.png",
      clicked: false,
      alt: "Captain Falcon"
  },    {
      id: 2,
      link: "../../public/img/donkey.png",
      clicked: false,
      alt: "Donkey Kong"
  },    {
      id: 3,
      link: "../../public/img/falco.png",
      clicked: false,
      alt: "Falco"
  },
  {
      id: 4,
      link: "../../public/img/fox.png",
      clicked: false,
      alt: "Fox McCloud"
  }];



class App extends Component {
  render() {
    return (

<div>
      <Header />
      <CharacterIcons icons={icons} />
      </div>
    );
  }
}

export default App;
