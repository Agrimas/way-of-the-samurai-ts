import React, {useState} from 'react';
import Classes from './Pagination.module.css';

type PaginationPropsType = {
    currentPage: number
    onClickPaginationHandler: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    portionSize: number
}

function Pagination({
                        currentPage,
                        onClickPaginationHandler,
                        totalUsersCount,
                        pageSize,
                        portionSize
                    }: PaginationPropsType) {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = pagesCount / portionSize;
    const [portionNumber, setPortionNumber,] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={Classes.container}>
            <div className={Classes.navButton}>
                {portionNumber === 1 ? false : <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</button>}
            </div>
            <div className={Classes.pagination}>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(pageNumber => <span
                    key={pageNumber}
                    className={currentPage === pageNumber ? Classes.selectedPage : ''}
                    onClick={() => {
                        onClickPaginationHandler(pageNumber);
                    }
                    }>{pageNumber}</span>)}
            </div>
            <div className={Classes.navButton}>
                {portionNumber === portionCount ? false : <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }
                }>Next</button>}
            </div>
        </div>
    );
}

export default Pagination;