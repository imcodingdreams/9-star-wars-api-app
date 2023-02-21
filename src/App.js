import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';
import axios from 'axios';

function App() {
  const [characterInfo, setCharacterInfo] = useState('')
  const [characterSpecies, setCharacterSpecies] = useState('')
  const getCharacterInfo = () => {
    axios.get('https://swapi.dev/api/people', 'https://swapi.dev/api/species')
      .then(response => {
        let character = response.data.results;

        let characterName = character[1].name;
        let birthdate = character[1].birth_year;
        let height = character[1].height;
        let mass = character[1].mass;

        let characterSpecies = response.data.results;
        let species = characterSpecies[1].species;

        setCharacterInfo({ characterName, birthdate, height, mass })
        setCharacterSpecies({ species })
        console.log(characterName, birthdate, height, mass, species)

      }).catch(err => {
        console.log(err)
      });
  };

  console.log()
  return (
    <div>
      <Header />
      {/* <LiveSearchFilter /> */}
      <Form getCharacterInfo={getCharacterInfo} />
      <CharactersTable characterInfo={characterInfo} characterSpecies={characterSpecies}/>
    </div>
  );
}


export default App;

