import React from 'react'
import { Container, FormControl, Row, Col, InputGroup, Button } from 'react-bootstrap';

function Form({ searchCharacter, getPages }) {

  // const searchBtn = document.getElementById('searcBtn');
  // searchBtn.addEventListener('click', (event) => {
  //   event.preventDefault(); 
  //   const searchInput = document.getElementById('searchInput').value;
  //   //getPages(searchInput);
  // });

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} lg={6}>
          <InputGroup>
            <FormControl
              className='mb-3'
              id='searchInput'
              placeholder="Search a character"
              type="text"
              //value={filterValue}
              //onChange={event => setFilterValue(event.target.value)}
            />
            <Button id='searchBtn' onClick={() => {
              getPages();
            }} style={{
              height: "38px",
              width: "80px",
              textAlign: "center",
              marginLeft: "10px"
            }}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Form



// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import CharactersTable from './components/CharactersTable';
// import Form from './components/Form';
// import './App.css';
// import axios from 'axios';
// //import Pagination from './components/Pagination';
// import ReactPaginate from 'react-paginate';

// function App() {
//   const [characterData, setCharacterData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [filterValue, setFilterValue] = useState('');
//   //const [pages, setPages] = useState([])
//   //const baseURL = "https://swapi.dev/api/people/"
//   const [pageCount, setPageCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [previousPage, setPreviousPage] = useState('');
//   const [nextPage, setNextPage] = useState('');
//   const [urlData, setUrlData] = useState('https://swapi.dev/api/people/');

//   //check info about next and previous in react pagination

//   async function getCharactersData() {
//     try {

//       setIsLoading(true);
//       //console.log('Line 28');
//       const response = await axios.get(urlData);
//       setNextPage(response.data.next)
//       setPreviousPage(response.data.previous)
//       console.log('Line 28', response);

//       for (const character of response.data.results) {
//         const homeworld = await axios.get(character.homeworld);
//         character.homeworld = homeworld.data.name;
//       }
//       for (const character of response.data.results) {
//         const species = await axios.get(character.species);
//         if (character.species.length === 0) {
//           character.species = 'Human';
//         } else {
//           character.species = species.data.name;
//         }
//       }

//       setIsLoading(false);

//       setCharacterData(response.data.results);

//     } catch (error) {
//       console.log(error);
//       console.log("Oops! Something went wrong!");
//     }
//   }

//   // console.log(characterData);

//   useEffect(() => {
//     getCharactersData();
//   }, [urlData]);


//   // const filteredData = characterData.filter((character) =>
//   //   character.name.toLowerCase().includes(filterValue.toLowerCase())
//   // );

//   // const fetchPages = async (currentPage) => {
//   //   getCharactersData(`${urlData}?page=${currentPage}`)
//   // const response = await axios.get(`${baseURL}?page=${currentPage}`);
//   // let data = await response.data.results;
//   //console.log(`Next page: ${urlData}`)
//   //console.log(`Get pages: ${response}`)
//   // return data;
//   // }

//   const changePageClick = async (data) => {
//     console.log(data);
//     setUrlData(`${urlData}?page=${data.selected + 1}`)

//     //setUrlData(urlData)
//     // console.log('Data: CPC', data);
//     // let currentPage = data.selected + 1;
//     // console.log(`Current page: ${currentPage}`);
//     // const pagesFromServer = await fetchPages(currentPage);
//     // setCharacterData(pagesFromServer);
//   }

//   //console.log(`Current page: ${currentPage}`)

//   // useEffect(() => {
//   //   const getPages = async () => {
//   //     const response = await axios.get(`${baseURL}?page=${currentPage}`);
//   //     let nextPage = response.data.next;
//   //     console.log(`Next page: ${nextPage}`)
//   //     console.log(`Get pages: ${response}`)
//   //   }

//   //   getPages();

//   // }, []);


//   // const indexOfLastPost = currentPage * charactersPerPage;
//   // const indexOfFirstPost = indexOfLastPost - charactersPerPage;
//   // const currentPost = characterData.slice(indexOfFirstPost, indexOfLastPost);

//   return (
//     <div>
//       <Header />
//       <Form filterValue={filterValue} setFilterValue={setFilterValue} changePageClick={changePageClick} />
//       <CharactersTable characterData={characterData} isLoading={isLoading} />
//       {/* characterData={currentPost} */}
//       {/* <Pagination charactersPerPage={charactersPerPage} totalPosts={characterData.lenght} /> */}
//       <ReactPaginate
//         previousLabel={"Previous"}
//         nextLabel={"Next"}
//         brakeLabel={"..."}
//         pageCount={9}
//         onPageChange={changePageClick}
//         containerClassName={"pagination justify-content-center mt-4 mb-5"}
//         pageClassName={"page-item"}
//         pageLinkClassName={"page-link"}
//         previousClassName={"page-item"}
//         previousLinkClassName={"page-link"}
//         nextClassName={"page-item"}
//         nextLinkClassName={"page-link"}
//         breakClassName={"page-item"}
//         breakLinkClassName={"page-link"}
//         disabledClassName={"disabled"}
//         //forcePage={currentPage}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// }

// export default App;

