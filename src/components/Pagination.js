
import React from "react";


function Pagination({ currentPage, count, setCurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(count / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className="pagination-container"
      style={{ margin: "30px", display: "flex", justifyContent: "center", paddingBottom: "30px", marginBottom: "0px" }}
    >
      <nav>
        <ul
          className="pagination"
        >
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}>Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={currentPage === number ? "page-item active" : "page-item"}>
              <button
                className="page-link"
                style={{ backgroundColor: "rgb(249, 245, 245", borderColor: "gray", color: "black" }}
                onClick={() => setCurrentPage(number)}>{number}
              </button>
            </li>
          ))}
          <li
            className={currentPage === 9 ? "page-item disabled" : "page-item"}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}>Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination