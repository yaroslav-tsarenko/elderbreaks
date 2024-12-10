import React from 'react';
import styles from "./LeaderboardHistory.module.scss";
import Title from "@/components/title/Title";
import { leaderboardHistoryItems } from "@/utils/leaderboardHistoryItems";
import LeaderboardHistoryItem from "@/components/leaderboard-history-item/LeaderboardHistoryItem";

const LeaderboardHistory = () => {
    return (
        <div className={styles.leaderboardHistory}>
            <Title h2="leaderboard" span="history"/>
            <div className={styles.leaderboardHistoryContent}>
                {leaderboardHistoryItems.map((item, index) => (
                    <LeaderboardHistoryItem
                        key={index}
                        nickname={item.nickname}
                        leaderboard={item.leaderboard}
                        started={item.started}
                        finished={item.finished}
                        totalPool={item.totalPool}
                        avatar={item.avatar}
                        place={item.place}
                    />
                ))}
            </div>
        </div>
    );
};

export default LeaderboardHistory;