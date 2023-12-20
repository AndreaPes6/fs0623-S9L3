import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Footer({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <footer className=''>
      <Pagination className='justify-content-center'>
        <Pagination.First onClick={() => onPageChange && onPageChange(1)} />
        <Pagination.Prev
          onClick={() =>
            onPageChange && onPageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
        />
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => onPageChange && onPageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            onPageChange && onPageChange(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)
          }
        />
        <Pagination.Last onClick={() => onPageChange && onPageChange(pageNumbers.length)} />
      </Pagination>
    </footer>
  );
}

export default Footer;
