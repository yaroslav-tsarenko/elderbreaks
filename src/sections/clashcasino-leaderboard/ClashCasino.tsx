"use client";

import React, { useState} from 'react';
import styles from "./ClashCasino.module.scss";
import FullWidthSlider from "@/components/full-width-slider/FullWidthSlider";
import { sliderImages } from '@/mockup-data/sliderImages';

const ClashCasino = () => {
    const getRandomLeaderboardName = () => {
        const randomIndex = Math.floor(Math.random() * sliderImages.length);
        const alt = sliderImages[randomIndex].alt;
        switch (alt) {
            case "CsgobigLeaderboard":
                return "CSGOBIG LEADERBOARD";
            case "RoobetLeaderboard":
                return "ROOBET LEADERBOARD";
            case "EmpireDropLeaderboard":
                return "EMPIRE DROP LEADERBOARD";
            case "RainLeaderboard":
                return "RAIN LEADERBOARD";
            case "DuelGpLeaderboard":
                return "DUEL GP LEADERBOARD";
            case "CsgostakeLeaderboard":
                return "CSGOSTAKE LEADERBOARD";
            case "CsgorollLeaderboard":
                return "CSGOROLL LEADERBOARD";
            default:
                return "clashcasino";
        }
    };

    const [leaderboardName, setLeaderboardName] = useState(getRandomLeaderboardName);

    const handleLeaderboardSelect = (name: string) => {
        setLeaderboardName(name);
    };

    return (
        <section className={styles.clashcasino}>
            <div className={styles.clashcasinoContent}>
                <h1>
                    {leaderboardName.split(' ')[0]}
                    <span>{leaderboardName.split(' ').slice(1).join(' ')}</span>
                </h1>
                <h4>total prize pool</h4>
                <h2>$4,000</h2>
                <p>All games are allowed. Wager based on XP system. For more information visit Discord.</p>
                <div className={styles.code}>
                    Code: ELDER
                </div>
            </div>
            <FullWidthSlider onLeaderboardSelect={handleLeaderboardSelect} />
        </section>
    );
};

export default ClashCasino;