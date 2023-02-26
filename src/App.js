
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';
import axios from 'axios';

function App() {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchCharacterData = async () => {
      const response = await axios.get('https://swapi.dev/api/people?search=');
      //loop through each character through response.data.results
      //for each character, get homeworld data console.log homeworld
      //for each character, get species data console.log species
      setCharacterInfo(response.data.results);
    };
    fetchCharacterData();
  }, []);

  useEffect(() => {
    async function fetchAdditionalInfo() {
      const newData = await Promise.all(
        characterInfo.map(async (character) => {
          const homeworldInfo = await axios.get(`https://swapi.dev/api/planets/1/`);
          const speciesInfo = await axios.get(`https://swapi.dev/api/species/2/`);
          return {
            ...character,
            homeworld: homeworldInfo.data.name,
            species: speciesInfo.data.name
          };
        })
      );
      setCharacterInfo(newData);
    }
    fetchAdditionalInfo();
  }, [characterInfo]);

  const filteredData = characterInfo.filter(character =>
    character.name.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <div>
      <Header />
      <Form filterValue={filterValue} setFilterValue={setFilterValue} />
      <CharactersTable characterInfo={characterInfo} filteredData={filteredData} />
    </div>
  );
}


export default App;
