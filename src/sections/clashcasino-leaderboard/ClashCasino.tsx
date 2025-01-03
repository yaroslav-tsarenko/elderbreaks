"use client";

import React, { useState } from 'react';
import styles from "./ClashCasino.module.scss";
import FullWidthSlider from "@/components/full-width-slider/FullWidthSlider";
import { useLeaderboard } from "@/utils/LeaderboardContext";

type LeaderboardAlt =
    | "RoobetLeaderboard"
    | "CsgobigLeaderboard"
    | "EmpireDropLeaderboard"
    | "RainLeaderboard"
    | "DuelGpLeaderboard"
    | "CsgostakeLeaderboard"
    | "CsgorollLeaderboard";

const ClashCasino = () => {
    const { leaderboard } = useLeaderboard();

    const getRandomLeaderboardName = (alt: LeaderboardAlt): string => {
        switch (alt) {
            case "RoobetLeaderboard":
                return "ROOBET LEADERBOARD";
            case "CsgobigLeaderboard":
                return "CSGOBIG LEADERBOARD";
            case "EmpireDropLeaderboard":
                return "EMPIRE DROP LEADERBOARD";
            case "RainLeaderboard":
                return "RAIN LEADERBOARD";
            case "DuelGpLeaderboard":
                return "DUELGP LEADERBOARD";
            case "CsgostakeLeaderboard":
                return "CSGOSTAKE LEADERBOARD";
            case "CsgorollLeaderboard":
                return "CSGOROLL LEADERBOARD";
            default:
                return "ROOBET LEADERBOARD";
        }
    };

    const [leaderboardName, setLeaderboardName] = useState(() => getRandomLeaderboardName("RoobetLeaderboard"));
    const totalPrize = leaderboard?.data?.totalPrize || 0;
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
                <h2>${totalPrize}</h2>
                <p>All games are allowed. Wager based on system. For more information visit Discord.</p>
                <div className={styles.code}>
                    Code: ELDER
                </div>
            </div>
            <FullWidthSlider onLeaderboardSelect={handleLeaderboardSelect} />
        </section>
    );
};

export default ClashCasino;