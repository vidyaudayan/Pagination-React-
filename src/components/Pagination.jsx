import React from 'react';
import ReactDOM from "react-dom";
const Pagination = ({ postsPerPage, length,paginate,active }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
        <button onClick={()=>paginate(pageNumber)} key={pageNumber} className={active ? "active" : ""}>{pageNumber}</button>
      ))}
    </div>
   
  );
  ReactDOM.render(<App active={true} />, document.getElementById("container"))
};

export default Pagination;