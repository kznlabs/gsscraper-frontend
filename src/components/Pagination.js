import React from 'react';
import styles from '../styles/Pagination.module.css';
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Pagination({ currentPage, totalPageCount, setPage }) {
    const canGoBack = currentPage > 1;
    const canGoForward = currentPage < totalPageCount;

    const maxPages = 3;

    let startPage = currentPage - Math.floor(maxPages / 2);
    if (startPage < 1) {
        startPage = 1;
    }

    let endPage = startPage + maxPages - 1;
    if (endPage > totalPageCount) {
        endPage = totalPageCount;
        startPage = Math.max(1, endPage - maxPages + 1);
    }

    const pagesToShow = [];

    for (let i = startPage; i <= endPage; i++) {
        pagesToShow.push(i);
    }

    return (
        <div className={styles.pagination}>
            <button className={styles.previous} onClick={() => setPage(currentPage - 1)} disabled={!canGoBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            {pagesToShow.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? styles.activePage : ''}
                    onClick={() => setPage(page)}
                >
                    {page}
                </button>
            ))}

            <button className={styles.spacer}>...</button>

            <button
                key={totalPageCount}
                className={styles.maxPages}
                onClick={() => setPage(totalPageCount)}
                disabled={!canGoForward}
            >
                Ostatnia (strona {totalPageCount})
            </button>

            <button className={styles.next} onClick={() => setPage(currentPage + 1)} disabled={!canGoForward}>
                Następna <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}

export default Pagination;
