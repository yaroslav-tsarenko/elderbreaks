import React, {FC} from 'react';
import styles from "./LeaderboardHistoryItem.module.scss";
import {LeaderboardHistoryItemProps} from "@/types/leaderboardHistoryItem";
import { FaEye } from 'react-icons/fa';
import Button from "@/components/button/Button";

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
    }
    return (
        <div className={styles.card}>
            <h4>{place}ST Place</h4>
            <div className={styles.leaderboard}>
                <h3>leaderboard</h3><h3>{leaderboard}</h3>
            </div>
            <div className={styles.nickname}>
                <img src={avatar.src} alt={"Avatar"} width={50} height={50}/>
                <p>{nickname}</p>
            </div>
            <div className={styles.dateInfo}>
                <h3>Started</h3>
                <h3>Finished</h3>
                <p>{started}</p>
                <p>{finished}</p>
            </div>
            <div className={styles.totalPool}>
                <h3>Total Pool</h3>
                <h2>{totalPool}</h2>
            </div>
            <Button variant="orange" icon={FaEye} onClick={handleClick}>show more</Button>
        </div>
    );
};

export default LeaderboardHistoryItem;