import React, { FC } from 'react';
import styles from "./LeaderboardHistoryItem.module.scss";
import { LeaderboardHistoryItemProps } from "@/types/leaderboardHistoryItem";
import { FaEye } from 'react-icons/fa';
import Button from "@/components/button/Button";
import Image from "next/image";
import { players } from "@/mockup-data/players";

const LeaderboardHistoryItem: FC<LeaderboardHistoryItemProps> = ({
                                                                     leaderboard,
                                                                     totalPool,
                                                                     finished,
                                                                     started,
                                                                     place,
                                                                     nickname,
                                                                     avatar
                                                                 }) => {

    const handleClick = () => {
        alert("Data is not available");
    };

    const getRandomAvatar = () => {
        const randomIndex = Math.floor(Math.random() * players.length);
        return players[randomIndex].category;
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
    };

    const getRandomTotalPool = () => {
        return Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    };

    return (
        <div className={styles.card}>
            <h4>{place}ST Place</h4>
            <div className={styles.leaderboard}>
                <h3>leaderboard</h3><h3>{leaderboard}</h3>
            </div>
            <div className={styles.nickname}>
                {avatar ? <Image src={getRandomAvatar()} alt="avatar" className={styles.avatar} width="110" height="110"/> : "none"}
                <p>{nickname}</p>
            </div>
            <div className={styles.dateInfo}>
                <h3>Started</h3>
                <h3>Finished</h3>
                <p>{formatDate(started)}</p>
                <p>{formatDate(finished)}</p>
            </div>
            <div className={styles.totalPool}>
                <h3>Total Pool</h3>
                <h2>{totalPool !== "N/A" ? totalPool : getRandomTotalPool()}</h2>
            </div>
            <Button variant="orange" icon={FaEye} onClick={handleClick}>show more</Button>
        </div>
    );
};

export default LeaderboardHistoryItem;