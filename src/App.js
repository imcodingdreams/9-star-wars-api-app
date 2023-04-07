
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const urlData = 'https://swapi.dev/api/people/?search=';
  const totalPages = [9]

  async function returnHomeworldNamefromCharacter(character) {
    const homeworld = await axios.get(character.homeworld);
    return homeworld.data.name;
  }

  async function getCharactersData(inputValue = null) {
    try {

      setIsLoading(true);
      let response;
      if (inputValue === null) {
        response = await axios.get(`${urlData}&page=${currentPage}`);
      } else {
        response = await axios.get(`${urlData}${inputValue}`);
      }

      setCount(response.data.count);

      for (const character of response.data.results) {
        character.homeworld = await returnHomeworldNamefromCharacter(character)
      }
      for (const character of response.data.results) {
        const species = await axios.get(character.species);
        if (character.species.length === 0) {
          character.species = 'Human';
        } else {
          character.species = species.data.name;
        }
      }

      setIsLoading(false);

      setCharacterData(response.data.results);

    } catch (error) {
      console.log(error);
      console.log("Oops! Something went wrong!");
    }
  }

  console.log(`Character data: ${characterData}`);

  useEffect(() => {
    getCharactersData();
  }, [currentPage]);

  return (
    <div>
      <Header />
      <Form
        setCharacterData={setCharacterData}
        urlData={urlData}
        getCharactersData={getCharactersData}
      />
      <CharactersTable
        characterData={characterData}
        isLoading={isLoading}
      />
      <Pagination
        count={count}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        urlData={urlData}
      />
    </div>
  );
}

export default App;
