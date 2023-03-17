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
//   // const baseURL = "https://swapi.dev/api/people/"
//   const [currentPage, setCurrentPage] = useState(1);
//   const [previousPage, setPreviousPage] = useState('');
//   const [nextPage, setNextPage] = useState('');
//   const [urlData, setUrlData] = useState('https://swapi.dev/api/people/');

//   async function getCharactersData(urlData) {
//     try {

//       setIsLoading(true);

//       const response = await axios.get(url);
//       console.log(response.data);

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

//   console.log(characterData)

//   useEffect(() => {
//     getCharactersData();
//   }, [urlData]);


//   // const filteredData = characterData.filter((character) =>
//   //   character.name.toLowerCase().includes(filterValue.toLowerCase())
//   // );

//   const fetchPages = async (currentPage) => {
//     getCharactersData(`${baseURL}?page=${currentPage}`)
//     // const response = await axios.get(`${baseURL}?page=${currentPage}`);
//     // let data = await response.data.results;
//     // console.log(`Next page: ${data}`)
//     // // console.log(`Get pages: ${response}`)
//     // return data;
//   }

//   const changePageClick = async (data) => {
//     let currentPage = data.selected + 1;
//     console.log(`Current page: ${currentPage}`);
//     const pagesFromServer = await fetchPages(currentPage);
//     setCharacterData(pagesFromServer);
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
//       {/* <Form  */}
//       {/* /> */}
//       <CharactersTable characterData={characterData} isLoading={isLoading} />
//       {/* characterData={currentPost} */}
//       {/* <Pagination charactersPerPage={charactersPerPage} totalPosts={characterData.lenght} /> */}
//       <ReactPaginate
//         previousLabel={"Previous"}
//         nextLabel={"Next"}
//         brakeLabel={"..."}
//         pageCount={10}
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
//         activeClassName={"active"}
//       />
//     </div>
//   );
// }

// export default App;


// ------------------------->

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import CharactersTable from './components/CharactersTable';
// import Form from './components/Form';
// import './App.css';
// import axios from 'axios';
// import Pagination from './components/Pagination';
// //import ReactPaginate from 'react-paginate';

// function App() {
//   const [characterData, setCharacterData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [filterValue, setFilterValue] = useState('');
//   const [urlData, setUrlData] = useState('https://swapi.dev/api/people/');

//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = [9]
//   //const itemsPerPage = 10;
//   // const totalItems = 100;
//   //const [pages, setPages] = useState([])
//   //const baseURL = "https://swapi.dev/api/people/"
//   // const [pageCount, setPageCount] = useState(0);
//   // const [currentPage, setCurrentPage] = useState(1);
//   const [previousPage, setPreviousPage] = useState('');
//   const [nextPage, setNextPage] = useState('');
//   const charactersPerPage = (10);
//   const indexOfLastItem = currentPage * charactersPerPage;
//   const indexOfFirstItem = indexOfLastItem - charactersPerPage;

//   const itemsToDisplay = characterData.slice(indexOfFirstItem, indexOfLastItem);

//   //check info about next and previous in react pagination

//   // function PaginationComponent() {
//   //   const pages = [];
//   //   for (let i = 1; i <= Math.ceil(data.length/charactersPerPage); i++ ) {
//   //   pages.push(i);
//   //   }
//   // }

//   // async function fetchData(searchInput) {
//   //   const response = await fetch(`https://your-api-url.com/search?q=${searchInput}`);
//   //   const data = await response.json();
//   //   displayData(data);
//   // }

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };


//   useEffect(() => {
//     const getPages = async (searchInput) => {
//       const response = await axios.get(`${urlData}?page=${currentPage}`);
//       let nextPage = response.data.next;
//       console.log(`Next page: ${nextPage}`)
//       console.log(`Get pages: ${response}`)
//     }
//     getPages();
//   }, []);

//   // function App() {
//   //   // const [currentPage, setCurrentPage] = useState(1);
//   //   // const itemsPerPage = 10;
//   //   // const totalItems = 100;

//   //   const handlePageChange = (pageNumber) => {
//   //     setCurrentPage(pageNumber);
//   //   };

//   //   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   //   const startIndex = (currentPage - 1) * itemsPerPage;
//   //   const endIndex = startIndex + itemsPerPage;

//   //   const itemsToShow = data.slice(startIndex, endIndex);

//   //   return (
//   //     <div>
//   //       <ul>
//   //         {itemsToShow.map((item) => (
//   //           <li key={item.id}>{item.name}</li>
//   //         ))}
//   //       </ul>
//   //       <Pagination
//   //         currentPage={currentPage}
//   //         totalPages={totalPages}
//   //         onPageChange={handlePageChange}
//   //       />
//   //     </div>
//   //   );
//   // }

//   // export default App;











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
//       <Form changePageClick={changePageClick} />
//       <CharactersTable characterData={characterData} isLoading={isLoading} />
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//       {/* characterData={currentPost} */}
//       {/* <Pagination 
//         //charactersPerPage={charactersPerPage} 
//         totalPosts={characterData.lenght}
//         /> */}
//     </div>
//   );
// }

// export default App;

// // import React, { useState, useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import Header from './components/Header';
// // import CharactersTable from './components/CharactersTable';
// // import Form from './components/Form';
// // import './App.css';
// // import axios from 'axios';
// // import Pagination from './components/Pagination';

// // function App() {
// //   const [characterData, setCharacterData] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [filterValue, setFilterValue] = useState('');
// //   const [urlData, setUrlData] = useState('https://swapi.dev/api/people/');
// //   // const [currentPage, setCurrentPage] = useState(1);
// //   // const [charactersPerPage, setCharactersPerPage] = useState(38);
// //   //const [previousPage, setPreviousPage] = useState('');
// //   //const [nextPage, setNextPage] = useState('');

// //   async function getCharactersData() {
// //     try {

// //       setIsLoading(true);

// //       const response = await axios.get(urlData);
// //       // setNextPage(response.data.next)
// //       // setPreviousPage(response.data.previous)
// //       for (const character of response.data.results) {
// //         const homeworld = await axios.get(character.homeworld);
// //         character.homeworld = homeworld.data.name;
// //       }
// //       for (const character of response.data.results) {
// //         const species = await axios.get(character.species);
// //         if (character.species.length === 0) {
// //           character.species = 'Human';
// //         } else {
// //           character.species = species.data.name;
// //         }
// //       }

// //       setIsLoading(false);

// //       setCharacterData(response.data.results);

// //     } catch (error) {
// //       console.log(error);
// //       console.log("Oops! Something went wrong!");
// //     }
// //   }

// //   console.log(characterData)

// //   useEffect(() => {
// //     getCharactersData();
// //   }, []);


// //   const filteredData = characterData.filter((character) =>
// //     character.name.toLowerCase().includes(filterValue.toLowerCase())
// //   );

// //   // const indexOfLastPost = currentPage * charactersPerPage;
// //   // const indexOfFirstPost = indexOfLastPost - charactersPerPage;
// //   // const currentPost = characterData.slice(indexOfFirstPost, indexOfLastPost);

// //   return (
// //     <div>
// //       <Header />
// //       <Form filterValue={filterValue} setFilterValue={setFilterValue} />
// //       <CharactersTable filteredData={filteredData} isLoading={isLoading} />
// //       {/* characterData={currentPost} */}
// //       <Pagination 
// //       // charactersPerPage={charactersPerPage} 
// //       totalPosts={characterData.lenght}
// //       characterData={characterData}
// //       //setNextPage={setNextPage}
// //       // characters={characters} 
// //       // usersPerPage={usersPerPage}
// //       /> 
// //     </div>
// //   );
// // }

// // export default App;

// const fetchPages = async (currentPage) => {
//   try {

//     const response = await axios.get(`${baseURL}?page=${currentPage}`);

//     let data = await response.data.results;

//     console.log(`Next page: ${data}`)
//     console.log(`Get pages: ${response}`)

//     for (const character of response.data.results) {
//       const homeworld = await axios.get(character.homeworld);
//       character.homeworld = homeworld.data.name;
//     }
//     for (const character of response.data.results) {
//       const species = await axios.get(character.species);
//       if (character.species.length === 0) {
//         character.species = 'Human';
//       } else {
//         character.species = species.data.name;
//       }
//     }

//   } catch (error) {
//     console.log(error);
//     console.log("Oops! Something went wrong!");
//   }
//   return data;
// }
// }

// fetchPages();

// const changePageClick = async (data) => {
//   let currentPage = data.selected + 1;
//   console.log(`Current page: ${currentPage}`);
//   const pagesFromServer = await fetchPages(currentPage);
//   setCharacterData(pagesFromServer);
// }

// changePageClick()
//console.log(`Current page: ${currentPage}`)

// useEffect(() => {
//   const getPages = async () => {
//     const response = await axios.get(`${baseURL}?page=${currentPage}`);
//     let nextPage = response.data.next;
//     console.log(`Next page: ${nextPage}`)
//     console.log(`Get pages: ${response}`)
//   }

//   getPages();

// }, []);


// const indexOfLastPost = currentPage * charactersPerPage;
// const indexOfFirstPost = indexOfLastPost - charactersPerPage;
// const currentPost = characterData.slice(indexOfFirstPost, indexOfLastPost);
