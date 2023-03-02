import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';
import axios from 'axios';

function App() {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [species, setSpecies] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  //isLoading

  useEffect(() => {
    const fetchCharacterData = async () => {
      //loading true
      const response = await axios.get('https://swapi.dev/api/people');
      const newData = await Promise.all(response.data.results.map(fetchAdditionalInfo));
      //loading false
      setCharacterInfo(newData);
      //setHomeworld(homeworld.data.results);
      //setSpecies(species.data.results);
    };
    fetchCharacterData();
  }, []);




  const fetchAdditionalInfo = async (character) => {
    const homeworldInfo = await axios.get(character.homeworld);
    const speciesInfo = await axios.get(character.species);
    console.log(homeworldInfo, speciesInfo)
    // if (speciesInfo === []) {
    //   speciesInfo = "Human";
    // } else {
    return {
      ...character,
      homeworld: homeworldInfo.data.name,
      species: speciesInfo.data.name
      // }
    };
  };

  // const handleAdditionalInfo = async () => {
  //   const newData = await Promise.all(characterInfo.map(fetchAdditionalInfo));
  //   setCharacterInfo(newData);
  //   // setHomeworld(homeworld.data.results);
  //   // setSpecies(species.data.results);
  // };

  // handleAdditionalInfo();

  const filteredData = characterInfo.filter((character) =>
    character.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Form filterValue={filterValue} setFilterValue={setFilterValue} />
      <CharactersTable characterInfo={characterInfo} filteredData={filteredData} />
    </div>
  );
}

export default App;
