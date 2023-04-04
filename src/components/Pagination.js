
import React from "react";


function Pagination({ currentPage, count, setCurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(count / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="pagination" style={{ paddingBottom: "30px", marginBottom: "0px" }}>
      <nav>
        <ul className="pagination" style={{ transition: "backgroundColor .3s" }}>
          <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
            <button style={{ backgroundColor: "SeaShell", borderColor: "gray", color: "black" }} className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
              <button style={{ backgroundColor: "SeaShell", borderColor: "gray", color: "black" }} className="page-link" onClick={() => setCurrentPage(number)}>{number}</button>
            </li>
          ))}
          <li className={currentPage === 9 ? "page-item disabled" : "page-item"}>
            <button style={{ backgroundColor: "SeaShell", borderColor: "gray", color: "black" }} className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination