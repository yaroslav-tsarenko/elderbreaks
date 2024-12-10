"use client"

import React, { useState } from 'react';
import styles from "./LimitedOfferPagination.module.scss";
import LimitedOffer from "@/components/limited-offer/LimitedOffer";
import { FaArrowRight } from "react-icons/fa";

const LimitedOfferPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 95; // Total number of LimitedOffer components
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        const pages = [];
        const maxPagesToShow = 5;

        for (let i = 1; i <= Math.min(maxPagesToShow, totalPages); i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
                >
                    {i}
                </button>
            );
        }

        if (totalPages > maxPagesToShow) {
            pages.push(<span key="dots" className={styles.dots}>..</span>);
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handleClick(totalPages)}
                    className={`${styles.pageButton} ${currentPage === totalPages ? styles.active : ''}`}
                >
                    {totalPages}
                </button>
            );
        }

        pages.push(
            <button
                key="arrow-right"
                onClick={() => handleClick(currentPage + 1)}
                className={styles.pageButton}
                disabled={currentPage === totalPages}
            >
                <FaArrowRight />
            </button>
        );

        return pages;
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = Array.from({ length: totalItems }).slice(startIndex, endIndex);

    return (
        <div className={styles.container}>
            <div className={styles.limitedOfferContent}>
                {itemsToDisplay.map((_, index) => (
                    <LimitedOffer key={startIndex + index} />
                ))}
            </div>
            <div className={styles.pagination}>
                {renderPagination()}
            </div>
        </div>
    );
};

export default LimitedOfferPagination;