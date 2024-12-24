"use client";

import React from 'react';
import styles from "./ClashCasino.module.scss";
import FullWidthSlider from "@/components/full-width-slider/FullWidthSlider";

const ClashCasino = () => {
    return (
        <section className={styles.clashcasino}>
            <div className={styles.clashcasinoContent}>
                <h1>
                    clashcasino
                    <span>leaderboard</span>
                </h1>
                <h4>total prize pool</h4>
                <h2>$4,000</h2>
                <p>All games are allowed. Wager based on XP system. For more information visit Discord.</p>
                <div className={styles.code}>
                    Code: EB
                </div>
            </div>
            <FullWidthSlider/>
        </section>
    );
};

export default ClashCasino;