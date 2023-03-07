import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';
import axios from 'axios';

function App() {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchCharacterData = async () => {
      const response = await axios.get('https://swapi.dev/api/people/');
      setIsLoading(true);
      console.log(`First isLoading: ${isLoading}`);
      const characterData = await Promise.all(response.data.results.map(fetchAdditionalInfo));
      setCharacterInfo(characterData);
      setIsLoading(false);
      console.log(`Second isLoading: ${isLoading}`)
    };
    fetchCharacterData();
  }, []);

  const fetchAdditionalInfo = async (character) => {
    const homeworldInfo = await axios.get(character.homeworld);
    let speciesInfo;
    if (character.species.length === 0) {
      speciesInfo = "Human";
    } else {
      speciesInfo = (await axios.get(character.species)).data.name;
    }
    return {
      ...character,
      homeworld: homeworldInfo.data.name,
      species: speciesInfo
    };
  };

  const filteredData = characterInfo.filter((character) =>
    character.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Form filterValue={filterValue} setFilterValue={setFilterValue} />
      <CharactersTable characterInfo={characterInfo} filteredData={filteredData} isLoading={isLoading} />
    </div>
  );
}

export default App;
