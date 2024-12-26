"use client";

import React, { useEffect, useState } from 'react';
import styles from "./LeaderBoards.module.scss";
import PlayerFrame from "@/components/player-frame/PlayerFrame";
import Button from "@/components/button/Button";
import { FaCrown } from "react-icons/fa";
import CountdownTimer from "@/components/countdown-timer/CountdownTimer";
import SliderItem from "@/components/slider-item/SliderItem";
import { useRouter } from "next/navigation";
import { useLeaderboard } from "@/utils/LeaderboardContext";
import { players } from "@/mockup-data/players";

type LeaderboardItem = {
    _id: string;
    userId: string;
    username: string;
    wagered: number;
    rank: number;
    prize: string | null;
    category: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
};

const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex].category;
};

const getRandomPrize = () => {
    const prizes = ["$100", "$200", "$300", "$400", "$500"]; // Example prizes
    const randomIndex = Math.floor(Math.random() * prizes.length);
    return prizes[randomIndex];
};

const LeaderBoards = () => {
    const { leaderboard } = useLeaderboard();
    const router = useRouter();
    const [displayPlayers, setDisplayPlayers] = useState<LeaderboardItem[]>([]);
    const sortedPlayers = displayPlayers.slice(0, 3).sort((a, b) => b.wagered - a.wagered);

    useEffect(() => {
        if (leaderboard && leaderboard.data && Array.isArray(leaderboard.data.items) && leaderboard.data.items.length > 0) {
            setDisplayPlayers(leaderboard.data.items);
        } else {
            const mockupPlayers = players.map(player => ({
                ...player,
                category: player.category.src
            }));
            setDisplayPlayers(mockupPlayers);
        }
    }, [leaderboard]);

    const handleLeaderboard = () => {
        router.push('/leaderboards');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.leaderBoardsContent}>
                <h2>
                    weekly
                    <span>leaderboards</span>
                </h2>
                <div className={styles.leaderBoardsContentDescription}>
                    <p>Weekly wager races - be first and grab insane prizes!</p>
                    <h5>Over <span>$18 000</span> in the prize pool!</h5>
                </div>
            </div>
            <hr/>
            <div className={styles.leaderBoardsPlayers}>
                <div className={styles.players}>
                    {sortedPlayers.length > 1 && (
                        <PlayerFrame
                            key={sortedPlayers[1]._id}
                            nickname={sortedPlayers[1].username}
                            xp={sortedPlayers[1].wagered}
                            money={sortedPlayers[1].prize || getRandomPrize()}
                            avatar={getRandomAvatar()}
                            place={2}
                            category={sortedPlayers[1].category}
                        />
                    )}
                    {sortedPlayers.length > 0 && (
                        <PlayerFrame
                            key={sortedPlayers[0]._id}
                            nickname={sortedPlayers[0].username}
                            xp={sortedPlayers[0].wagered}
                            money={sortedPlayers[0].prize || getRandomPrize()}
                            avatar={getRandomAvatar()}
                            place={1}
                            category={sortedPlayers[0].category}
                        />
                    )}
                    {sortedPlayers.length > 2 && (
                        <PlayerFrame
                            key={sortedPlayers[2]._id}
                            nickname={sortedPlayers[2].username}
                            xp={sortedPlayers[2].wagered}
                            money={sortedPlayers[2].prize || getRandomPrize()}
                            avatar={getRandomAvatar()}
                            place={3}
                            category={sortedPlayers[2].category}
                        />
                    )}
                </div>
                <SliderItem slidesToShow={1}>
                    {sortedPlayers.map((player, index) => (
                        <PlayerFrame
                            key={player._id}
                            nickname={player.username}
                            xp={player.wagered}
                            money={player.prize || getRandomPrize()}
                            avatar={getRandomAvatar()}
                            place={index + 1}
                            category={player.category}
                        />
                    ))}
                </SliderItem>
                <CountdownTimer/>
                <p className={styles.leaderBoardUpdates}>Leaderboard updates every 30-60 minutes</p>
                <Button variant="orange" icon={FaCrown} onClick={handleLeaderboard}>
                    leaderboard
                </Button>
                <div className={styles.outlinedContainer}></div>
            </div>
        </div>
    );
};

export default LeaderBoards;