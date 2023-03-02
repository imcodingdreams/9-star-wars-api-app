import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';
import axios from 'axios';
import { getElementError } from '@testing-library/react';

function App() {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [species, setSpecies] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  let isLoading;

  // useEffect(() => {
  //   const fetchCharacterData = async (character) => {
  //     const response = await axios.get('https://swapi.dev/api/people');
  //     setCharacterInfo(response.data.results);
  //     character.forEach(character => {
  //       const homeworldInfo = await axios.get(character.homeworld);
  //       setHomeworld(homeworldInfo.data.results);
  //     });
  //     character.forEach(character => {
  //       const speciesInfo = await axios.get(character.species);
  //       setSpecies(speciesInfo.data.results);
  //     });

  useEffect(() => {
    const fetchCharacterData = async () => {
      isLoading = true;
      const response = await axios.get('https://swapi.dev/api/people');
      const newData = await Promise.all(response.data.results.map(fetchAdditionalInfo));
      isLoading = false;
      //console.log(isLoading);
      setCharacterInfo(newData);
      //setHomeworld(homeworld.data.results);
      //setSpecies(species.data.results);
    };
    loadingState();
    fetchCharacterData();
  }, []);

  function loadingState() {
    if (isLoading === true) {
      console.log(isLoading);
      const loadingMessage = document.createElement("p");
      loadingMessage.textContent = "Loading...";
      const elLoading = document.getElementById("loading");
      elLoading.appendChild(loadingMessage); // Add the loading message to the DOM
    } if (isLoading === false) {
      console.log(isLoading);
      return; // Return null to indicate that there's no loading state
    }
  }

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
      <CharactersTable characterInfo={characterInfo} filteredData={filteredData} loadingState={loadingState}/>
    </div>
  );
}

export default App;
