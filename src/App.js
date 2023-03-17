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
 // const [filterValue, setFilterValue] = useState('');
  const [urlData, setUrlData] = useState('https://swapi.dev/api/people/');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages=[9]
  //const itemsPerPage = 10;
  // const totalItems = 100;
  //const [pages, setPages] = useState([])
  //const baseURL = "https://swapi.dev/api/people/"
  // const [pageCount, setPageCount] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState('');
  const [nextPage, setNextPage] = useState('');
  const charactersPerPage = (10);
  const indexOfLastItem = currentPage * charactersPerPage;
  const indexOfFirstItem = indexOfLastItem - charactersPerPage;

  // const itemsToDisplay = characterData.slice(indexOfFirstItem, indexOfLastItem);
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };


  useEffect(() => {
  const getPages = async (searchInput) => {
    const response = await axios.get(`${urlData}?page=${currentPage}`);
    let nextPage = response.data.next;
    console.log(`Next page: ${nextPage}`)
    console.log(`Get pages: ${response}`)
  }
  getPages();
}, []);


  async function getCharactersData() {
    try {

      setIsLoading(true);
      //console.log('Line 28');
      const response = await axios.get(urlData);
      setNextPage(response.data.next)
      setPreviousPage(response.data.previous)
      console.log(response);

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

  console.log(characterData);
  
  useEffect(() => {
    getCharactersData();
  }, [urlData]);

  // const changePageClick = async (data) => {
  //   console.log(data);
  //   setUrlData(`${urlData}?page=${data.selected + 1}`)
  // }

  return (
    <div>
      <Header />
      <Form 
        //changePageClick={changePageClick}
      />
      <CharactersTable 
        characterData={characterData}
        isLoading={isLoading} 
        />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        //onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
