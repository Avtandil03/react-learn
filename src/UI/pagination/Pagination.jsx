import React from 'react';
import Classes from './Pagination.module.css'
import { usePagination } from '../../hooks/usePagination';

const Pagination = ({totalPages, page, setPage}) => {
  const pagesArray = usePagination(totalPages)

  return (
    <div className={Classes.myPage__wrapper}>
    {pagesArray.map(p =>
      <span 
        onClick={() => {
        if(page !== p)setPage(p)}}
        key={p}
        className={(page === p)? Classes.myPage + ' ' + Classes.myPage__current : Classes.myPage} >
          {p}
        </span>
    )}
  </div>
  );
};

export default Pagination;