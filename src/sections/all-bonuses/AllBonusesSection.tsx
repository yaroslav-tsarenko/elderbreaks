"use client"

import React, { useState } from 'react';
import styles from "./AllBonusesSection.module.scss";
import Button from "@/components/button/Button";
import { FaGift, FaCopy } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Title from "@/components/title/Title";
import BonusCard from "@/components/bonus-card/BonusCard";

const AllBonusesSection = () => {
    const itemsPerPage = 4;
    const totalItems = 19;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    const renderPagination = () => {
        const pages = [];
        for (let i = 0; i < totalPages; i++) {
            if (i < 3 || i === totalPages - 1) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={`${styles.paginationButton} ${currentPage === i ? styles.active : ''}`}
                    >
                        {i + 1}
                    </button>
                );
            } else if (i === 3) {
                pages.push(<span key="ellipsis">...</span>);
            }
        }
        return pages;
    };

    return (
        <>
            <div className={styles.allBonusesSection}>
                <div className={styles.sectionContent}>
                    <h3>Сlaim all of your amazing </h3>
                    <h2>REWARDS</h2>
                    <p>Register & use codes for bonuses</p>
                </div>
                <div className={styles.boost}>
                    <p>Claim your rakeback boost!</p>
                    <h2>10%</h2>
                    <h3>cashback <span>for 14 days</span></h3>
                    <div className={styles.promoSection}>
                        <div className={styles.promoCode}>
                            <span>Code: WJRF</span>
                            <FaCopy className={styles.copyIcon} />
                        </div>
                        <Button variant="orange-non-centered" icon={FaGift}>
                            claim bonus
                        </Button>
                    </div>
                </div>
                <div className={styles.amazingRewards}>
                    <Title h2="Amazing" span="Rewards"/>
                    <div className={styles.amazingRewardsContent}>
                        {Array.from({length: totalItems})
                            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                            .map((_, index) => (
                                <BonusCard key={index}/>
                            ))}
                    </div>
                    <div className={styles.pagination}>
                        <button
                            onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
                            className={styles.arrowButton}
                        >
                           <IoIosArrowBack/>
                        </button>
                        {renderPagination()}
                        <button
                            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages - 1))}
                            className={styles.arrowButton}
                        >
                            <IoIosArrowForward/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllBonusesSection;