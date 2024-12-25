"use client";

import React, { useEffect } from 'react';
import styles from "./LeaderBoards.module.scss";
import { players } from "@/mockup-data/players";
import PlayerFrame from "@/components/player-frame/PlayerFrame";
import Button from "@/components/button/Button";
import { FaCrown } from "react-icons/fa";
import CountdownTimer from "@/components/countdown-timer/CountdownTimer";
import SliderItem from "@/components/slider-item/SliderItem";
import { useRouter } from "next/navigation";
import { useLeaderboard } from "@/utils/LeaderboardContext";

import { Player } from "@/types/playerFrame";

const LeaderBoards = () => {
    const { leaderboard } = useLeaderboard();
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleLeaderboard = () => {
        router.push('/leaderboards');
    }

    const displayPlayers: Player[] = leaderboard && (leaderboard.data as Player[])?.length ? (leaderboard.data as Player[]) : players;

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
                    {displayPlayers.map((player, index) => (
                        <PlayerFrame
                            key={index}
                            nickname={player.nickname}
                            xp={player.xp}
                            money={player.money}
                            avatar={player.avatar}
                            place={player.place}
                        />
                    ))}
                </div>
                <SliderItem slidesToShow={1}>
                    {displayPlayers.map((player, index) => (
                        <PlayerFrame
                            key={index}
                            nickname={player.nickname}
                            xp={player.xp}
                            money={player.money}
                            avatar={player.avatar}
                            place={player.place}
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