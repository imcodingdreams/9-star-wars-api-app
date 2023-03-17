import React, { useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange, charactersPerPage, previousPage, nextPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages / charactersPerPage; i++) {
    pageNumbers.push(i);
  }


  return (
    // <nav>
    //   <ul className="pagination">
    //     {pageNumbers.map((number) => (
    //       <li key={number} className="page-item">
    //         <a onClick={() => onPageChange(number)} className="page-link">
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>


    <div id="pagination">
      <nav>
        <ul className="pagination">
          <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => onPageChange(previousPage)}>Previous</button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
              <button className="page-link" onClick={() => onPageChange(number)}>{number}</button>
            </li>
          ))}
          <li className={currentPage === totalPages ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => onPageChange()}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}



// import React, {useState} from 'react'

// //import ReactPaginate from 'react-paginate';

// const Pagination = (totalPosts, charactersPerPage, characterData, characters, usersPerPage) => {

//   const [currentPage, setCurrentPage] = useState(1);
//   //const [charactersPerPage, setCharactersPerPage] = useState(10);
//   const [previousPage, setPreviousPage] = useState('');
//   const [nextPage, setNextPage] = useState('');
//   const [pageNumber, setPageNumber] = useState(0)

//   const indexOfLastPost = currentPage * charactersPerPage;
//   const indexOfFirstPost = indexOfLastPost - charactersPerPage;
//   const currentPost = characterData.slice(indexOfFirstPost, indexOfLastPost);
//   const pagesVisited = pageNumber * charactersPerPage;
//   const pageCount = Math.ceil(characters.lenght / charactersPerPage)
//   // const [pageCount, setPageCount] = useState(0);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [previousPage, setPreviousPage] = useState('');
//   // const [nextPage, setNextPage] = useState('');
//   // const [charactersPerPage, setCharactersPerPage] = useState(10);
//   // const [urlData, setUrlData] = useState('https://swapi.dev/api/people/');

  
//   // const charactersPerPage = 10
//   // let nextPage = response.data.next;
//   // let previousPage = response.data.previous;


//   const changePage = ({selected}) => {
//     setPageNumber(selected);
//   };

//   const displayUsers = characters.slice(pagesVisited, pagesVisited + usersPerPage).map(character => {
    
//   })

//   // const pages = [];
//   //   for (let i = 1; i <= Math.ceil(data.length/charactersPerPage); i++ ) {
//   //   pages.push(i);
//   //   }

//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / charactersPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div id = 'pagination'>
//       Pagination
//       <ul className='pagination'>
//         {pageNumbers.map(number => (
//           <li key={number} id={number} className='page-item'>
//             <a href='!#'className='page-link'>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default Pagination