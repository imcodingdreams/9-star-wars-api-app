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
  const [filterValue, setFilterValue] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [charactersPerPage, setCharactersPerPage] = useState(38);
  // const [previousPage, setPreviousPage] = useState('');
  // const [nextPage, setNextPage] = useState('');

  async function getCharactersData() {
    try {

      setIsLoading(true);

      const response = await axios.get('https://swapi.dev/api/people/');
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

  console.log(characterData)

  useEffect(() => {
    getCharactersData();
  }, []);


  const filteredData = characterData.filter((character) =>
    character.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // const indexOfLastPost = currentPage * charactersPerPage;
  // const indexOfFirstPost = indexOfLastPost - charactersPerPage;
  // const currentPost = characterData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Header />
      <Form filterValue={filterValue} setFilterValue={setFilterValue} />
      <CharactersTable filteredData={filteredData} isLoading={isLoading} />
      {/* characterData={currentPost} */}
      {/* <Pagination charactersPerPage={charactersPerPage} totalPosts={characterData.lenght} /> */}
    </div>
  );
}

export default App;
