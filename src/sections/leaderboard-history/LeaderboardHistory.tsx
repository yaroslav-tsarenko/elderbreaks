"use client";
import React, { useEffect, useState } from 'react';
import styles from "./LeaderboardHistory.module.scss";
import Title from "@/components/title/Title";
import { leaderboardHistoryItems as mockupData } from "@/mockup-data/leaderboardHistoryItems";
import LeaderboardHistoryItem from "@/components/leaderboard-history-item/LeaderboardHistoryItem";
import SliderItem from "@/components/slider-item/SliderItem";
import { useLeaderboard } from "@/utils/LeaderboardContext";

const LeaderboardHistory = () => {
    const [isClient, setIsClient] = useState(false);
    const { leaderboard } = useLeaderboard();
    const [data, setData] = useState(mockupData);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (leaderboard && leaderboard.data && Array.isArray(leaderboard.data.items) && leaderboard.data.items.length > 0) {
            const formattedData = leaderboard.data.items.map((item: any) => ({
                nickname: item.username,
                leaderboard: item.category,
                started: item.startDate,
                finished: item.endDate ? item.endDate.toString() : "N/A",
                totalPool: item.prize ? item.prize.toString() : "N/A",
                avatar: item.avatar || "default-avatar.png",
                place: item.rank,
                category: item.category,
                endDate: item.endDate ? item.endDate.toString() : "N/A",
                prize: item.prize ? item.prize.toString() : "N/A",
                username: item.username,
                rank: item.rank,
                startDate: item.startDate
            }));
            setData(formattedData);
        } else {
            setData(mockupData);
        }
    }, [leaderboard]);

    if (!isClient) {
        return null;
    }

    return (
        <div className={styles.leaderboardHistory}>
            <Title h2="leaderboard" span="history" column={true}/>
            <div className={styles.leaderboardHistoryContent}>
                {data.slice(0, 3).map((item, index) => (
                    <LeaderboardHistoryItem
                        key={index}
                        nickname={item.nickname}
                        leaderboard={item.leaderboard}
                        started={item.started}
                        finished={item.finished}
                        totalPool={item.totalPool}
                        avatar={item.avatar}
                        place={item.place}
                        category={item.category}
                        endDate={item.endDate}
                        prize={item.prize}
                        username={item.username}
                        rank={item.rank}
                        startDate={item.startDate}
                    />
                ))}
            </div>
            <SliderItem slidesToShow={1}>
                {data.slice(0, 3).map((item, index) => (
                    <LeaderboardHistoryItem
                        key={index}
                        nickname={item.nickname}
                        leaderboard={item.leaderboard}
                        started={item.started}
                        finished={item.finished}
                        totalPool={item.totalPool}
                        avatar={item.avatar}
                        place={item.rank}
                        category={item.category}
                        endDate={item.endDate}
                        prize={item.prize}
                        username={item.username}
                        rank={item.rank}
                        startDate={item.startDate}
                    />
                ))}
            </SliderItem>
        </div>
    );
};

export default LeaderboardHistory;