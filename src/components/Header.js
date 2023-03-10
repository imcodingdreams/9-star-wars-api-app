import React from 'react'
//import logo from '../images/star-wars-logo.png'

function Header() {
  return (
    <div>
      <h4 style={{ textAlign: "center", marginTop: "50px", marginBottom: "70px" }}>Star Wars</h4>
    </div>
  )
}

export default Header


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import CharactersTable from './components/CharactersTable';
// import Form from './components/Form';
// import './App.css';
// import axios from 'axios';
// import Pagination from './components/Pagination';
// import ReactPaginate from 'react-paginate';

// function App() {
//   const [characterData, setCharacterData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [filterValue, setFilterValue] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [charactersPerPage, setCharactersPerPage] = useState();
//   const [previousPage, setPreviousPage] = useState('');
//   const [nextPage, setNextPage] = useState('');

//   async function getCharactersData() {
//     try {

//       setIsLoading(true);

//       const response = await axios.get('https://swapi.dev/api/people/');
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

//   console.log(characterData);

//   useEffect(() => {
//     getCharactersData();
//   }, []);


//   const filteredData = characterData.filter((character) =>
//     character.name.toLowerCase().includes(filterValue.toLowerCase())
//   );

//   // const indexOfLastPost = currentPage * charactersPerPage;
//   // const indexOfFirstPost = indexOfLastPost - charactersPerPage;
//   // const currentPost = characterData.slice(indexOfFirstPost, indexOfLastPost);

//   return (
//     <div>
//       <Header />
//       <Form filterValue={filterValue} setFilterValue={setFilterValue} />
//       <CharactersTable //characterData={currentPost} filteredData={filteredData} isLoading={isLoading} 
//       />
//       <Pagination
//         previousLabel={"Previous"}
//         nextLabel={"Next"}
//         //pageCount={pageCount}
//         //onPageChange={ChangePage}
//         containerClassName={"paginationBttns"}
//         previousLinkClassName={"previousBttn"}
//         nextLinkClassName={"nextBttn"}
//         disabledClassName={"paginationDisabled"}
//         activeClassName={"paginationActive"}

//       // charactersPerPage={charactersPerPage}
//       // totalPosts={characterData.lenght} 
//       />
//     </div>
//   );
// }

// export default App;

