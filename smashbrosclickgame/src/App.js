import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CharacterIcons from './components/CharacterIcons';


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
