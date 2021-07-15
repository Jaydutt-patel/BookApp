import React from "react";

export const Pagination = ({ bookPerPage, totalBook, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBook / bookPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#/" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
