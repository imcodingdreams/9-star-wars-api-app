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
  const urlData = 'https://swapi.dev/api/people/?search=';
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages=[9]
  const [count, setCount] = useState('')
  
  async function getCharactersData() {
    try {

      setIsLoading(true);
      
      const response = await axios.get(`${urlData}&page=${currentPage}`);
      setCount(response.data.count)
      console.log(`Response: ${response}`);
      console.log(`Current page: ${currentPage}`)

      for (const character of response.data.results) {
        const homeworld = await axios.get(character.homeworld);
        character.homeworld = homeworld.data.name;
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
    // getCharacter()
  }, [currentPage]);

  return (
    <div>
      <Header />
      <Form 
        // getCharacter={getCharacter}
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
        // getCharacter={getCharacter}
        //currentPage={handlePageChange}
      />
    </div>
  );
}

export default App;
