import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = (totalPosts, charactersPerPage) => {

  // const [currentPage, setCurrentPage] = useState(1);
  //const [charactersPerPage, setCharactersPerPage] = useState();
  //const [previousPage, setPreviousPage] = useState('');
  //const [nextPage, setNextPage] = useState('');
  // const indexOfLastPost = currentPage * charactersPerPage;
  // const indexOfFirstPost = indexOfLastPost - charactersPerPage;
  // const currentPost = characterData.slice(indexOfFirstPost, indexOfLastPost);

  // const [pageNumber, setPageNumber] = useState(0)
  // const charactersPerPage = 10
  // const pagesVisited = pageNumber * charactersPerPage;
  // const pageCount = Math.ceil(characters.lenght / charactersPerPage)
  // let nextPage = response.data.next;
  // let previousPage = response.data.previous;


  // const changePage = ({selected}) => {
  //   setPageNumber(selected);
  // };

  // const displayUsers = characters.slice(pagesVisited, pagesVisited + usersPerPage).map(character => {
    
  // })

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div id = 'pagination'>
      Pagination
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a href='!#'className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination