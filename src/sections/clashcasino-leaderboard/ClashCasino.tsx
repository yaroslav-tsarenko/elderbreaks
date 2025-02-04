
"use client";

import Image from "next/image";
import csgotakecoin from "../../../public/csgostakecoin.png";
import bigCoin from "../../../public/big-coin.png";
import rainCoin from "../../../public/rain-coin.png";
import duelGP from "../../../public/duelgp-coinnew.png";
import csgogemcoin from "../../../public/csgogemcoin.png";
import csgoroll from "../../../public/csgoroll.png";
import React, {useEffect, useState} from 'react';
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
    | "CsgorollLeaderboard"
    | "CsgogemLeaderboard"
    | "CsgobigDepositLeaderboard";

const ClashCasino = () => {

    const { leaderboard } = useLeaderboard();
    const { selectedAlt, setSelectedAlt } = useLeaderboard();

    const leaderboardNameMap: { [key in LeaderboardAlt]: string[] } = {
        RoobetLeaderboard: ["ROOBET", "LEADERBOARD"],
        CsgobigLeaderboard: ["CSGOBIG", "LEADERBOARD"],
        CsgobigDepositLeaderboard: ["CSGOBIG", "LEADERBOARD"],
        EmpireDropLeaderboard: ["EMPIREDROP", "LEADERBOARD"],
        RainLeaderboard: ["RAIN", "LEADERBOARD"],
        DuelGpLeaderboard: ["DUELGP", "LEADERBOARD"],
        CsgostakeLeaderboard: ["CSGOSTAKE", "LEADERBOARD"],
        CsgorollLeaderboard: ["CSGOROLL", "LEADERBOARD"],
        CsgogemLeaderboard: ["CSGOGEM", "LEADERBOARD"],
    };

    const getCurrencySymbol = () => {
        switch (selectedAlt) {
            case "CsgostakeLeaderboard":
                return <Image src={csgotakecoin} className={styles.coin} alt="coin" width={45} height={45} />;
            case "RoobetLeaderboard":
                return "$";
            case "EmpireDropLeaderboard":
                return "€";
            case "CsgobigLeaderboard":
                return <Image src={bigCoin} className={styles.coin} alt="coin" width={45} height={45} />;
            case "CsgobigDepositLeaderboard":
                return <Image src={bigCoin} className={styles.coin} alt="coin" width={45} height={45} />;
            case "RainLeaderboard":
                return <Image src={rainCoin} className={styles.coin} alt="coin" width={45} height={45} />;
            case "DuelGpLeaderboard":
                return <Image src={duelGP} className={styles.coin} alt="coin" width={45} height={45} />;
            case "CsgorollLeaderboard":
                return <Image src={csgoroll} className={styles.coin} alt="coin" width={45} height={45} />;
            case "CsgogemLeaderboard":
                return <Image src={csgogemcoin} className={styles.coin} alt="coin" width={45} height={45} />;
            default:
                return "$";
        }
    };

    useEffect(() => {
        const savedAlt = localStorage.getItem('selectedAlt');
        if (savedAlt) {
            setSelectedAlt(savedAlt);
        }
    }, [setSelectedAlt]);

    const getDescription = () => {
        switch (selectedAlt) {
            case "RoobetLeaderboard":
                return (
                    <div className={styles.article}>
                        <p className={styles.pTitle}>Every bet on Roobet under Code ELDER counts towards your score. The leaderboard updates every 24 hours. Your wagers on Roobet will count at the below weights based on the games that you&apos;re playing to help prevent leaderboard abuse:</p>
                        <ul>
                            <li>Games with an RTP of 97% or less will contribute 100% of the amount wagered to the leaderboard.</li>
                            <li>Games with an RTP of 97-98% will contribute 50% of the amount wagered to the leaderboard.</li>
                            <li>Games with an RTP of 98% and above will contribute 10% of the amount wagered to the leaderboard.</li>
                        </ul>
                        <p className={styles.redText}>Only wager from slots and Roobet originals will work.</p>
                    </div>
                );
            case "CsgobigDepositLeaderboard":
                return (
                    <div className={styles.leaderboardDescription}>
                        <p>
                            Every DEPOSIT under Code ELDER counts towards your score. The leaderboard updates every 24
                            hours.
                        </p>
                        <p>
                            ONLY CRYPTO DEPOSITS count for the Leaderboard
                        </p>
                    </div>
                );
            case "CsgorollLeaderboard":
                return (
                    <div className={styles.leaderboardDescription}>
                        <p>
                            Every DEPOSIT under Code ELDER counts towards your score. The leaderboard updates every 24
                            hours.
                        </p>
                        <p>
                        ONLY CRYPTO DEPOSITS count for the Leaderboard
                        </p>
                    </div>
                );
            default:
                return (
                    <>
                        <div>Every WAGER under Code ELDER counts towards your score.</div>
                        <div>The leaderboard updates every 30-60 minutes.</div>
                    </>
                );
        }
    };

    const [leaderboardName, setLeaderboardName] = useState(() => leaderboardNameMap["RoobetLeaderboard"]);
    const totalPrize = leaderboard?.data?.totalPrize || 0;

    const handleLeaderboardSelect = (name: string) => {
        const alt = name as LeaderboardAlt;
        if (alt in leaderboardNameMap) {
            console.log(leaderboardName)
            setLeaderboardName(leaderboardNameMap[alt]);
        } else {
            console.error(`Invalid leaderboard name: ${name}`);
        }
    };

    return (
        <section className={styles.clashcasino}>
            <div className={styles.clashcasinoContent}>
                <h1>
                    {selectedAlt && leaderboardNameMap[selectedAlt as LeaderboardAlt][0]}
                    <span> {selectedAlt && leaderboardNameMap[selectedAlt as LeaderboardAlt][1]}</span>
                </h1>
                <h4>Total prize pool</h4>
                <div className={styles.h2}>{getCurrencySymbol()}{totalPrize}</div>
                <p>{getDescription()}</p>
                <div className={styles.code}>Code: ELDER</div>
            </div>
            <FullWidthSlider onLeaderboardSelect={handleLeaderboardSelect}/>
        </section>
    );
};

export default ClashCasino;
