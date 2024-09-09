import React, { useEffect } from "react";
import { PaginationButtonsProps } from "@/app/interfaces/interfaces";

export default function PaginationButtons({ page, setPage, maxPage }: PaginationButtonsProps) {
  const handleChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (maxPage === 0 || page > maxPage) {
      setPage(maxPage);
    }
  }, [page, maxPage, setPage]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const range = 2; 
    let start = Math.max(1, page - range);
    let end = Math.min(maxPage, page + range);

    
    if (page - range <= 1) {
      end = Math.min(maxPage, end + (range - (page - 1)));
    }
    if (page + range >= maxPage) {
      start = Math.max(1, start - (range - (maxPage - page)));
    }

    if (start > 1) {
      pageNumbers.push(
        <li key="first" className="page-item">
          <button className="page-link" onClick={() => handleChange(1)}>
            1
          </button>
        </li>
      );
      if (start > 2) {
        pageNumbers.push(
          <li key="ellipsis-left" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handleChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    if (end < maxPage) {
      if (end < maxPage - 1) {
        pageNumbers.push(
          <li key="ellipsis-right" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
      pageNumbers.push(
        <li key={maxPage} className="page-item">
          <button className="page-link" onClick={() => handleChange(maxPage)}>
            {maxPage}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <p className="text-xl mb-2">Página seleccionada: {page}</p>
      
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handleChange(page - 1)}
              disabled={page === 1}
            >
              Anterior
            </button>
          </li>
          {renderPageNumbers()}
          <li className={`page-item ${page === maxPage ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handleChange(page + 1)}
              disabled={page === maxPage}
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
