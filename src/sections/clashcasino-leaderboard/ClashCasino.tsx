
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

    const leaderboardNameMap: { [key in LeaderboardAlt]: string[] } = {
        RoobetLeaderboard: ["ROOBET", "LEADERBOARD"],
        CsgobigLeaderboard: ["CSGOBIG", "LEADERBOARD"],
        EmpireDropLeaderboard: ["EMPIRE DROP", "LEADERBOARD"],
        RainLeaderboard: ["RAIN", "LEADERBOARD"],
        DuelGpLeaderboard: ["DUELGP", "LEADERBOARD"],
        CsgostakeLeaderboard: ["CSGOSTAKE", "LEADERBOARD"],
        CsgorollLeaderboard: ["CSGOROLL", "LEADERBOARD"],
    };

    const [leaderboardName, setLeaderboardName] = useState(() => leaderboardNameMap["RoobetLeaderboard"]);
    const totalPrize = leaderboard?.data?.totalPrize || 0;

    const handleLeaderboardSelect = (name: string) => {
        const alt = name as LeaderboardAlt;
        if (alt in leaderboardNameMap) {
            setLeaderboardName(leaderboardNameMap[alt]);
        } else {
            console.error(`Invalid leaderboard name: ${name}`);
        }
    };

    return (
        <section className={styles.clashcasino}>
            <div className={styles.clashcasinoContent}>
                <h1>
                    {leaderboardName[0]}
                    <span> {leaderboardName[1]}</span>
                </h1>
                <h4>Total prize pool</h4>
                <h2>${totalPrize}</h2>
                <p>All games are allowed. Wager based on system. For more information visit Discord.</p>
                <div className={styles.code}>Code: ELDER</div>
            </div>
            <FullWidthSlider onLeaderboardSelect={handleLeaderboardSelect} />
        </section>
    );
};

export default ClashCasino;
