"use client";

import React, {useEffect, useState} from 'react';
import styles from "./LeaderBoards.module.scss";
import PlayerFrame from "@/components/player-frame/PlayerFrame";
import Button from "@/components/button/Button";
import {FaCrown} from "react-icons/fa";
import CountdownTimer from "@/components/countdown-timer/CountdownTimer";
import SliderItem from "@/components/slider-item/SliderItem";
import {useRouter} from "next/navigation";
import {useLeaderboard} from "@/utils/LeaderboardContext";
import {sliderImages} from '@/mockup-data/sliderImages';

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
    totalPrize: number;
};

const getRandomPrize = () => {
    const prizes = ["$100", "$200", "$300", "$400", "$500"]; // Example prizes
    const randomIndex = Math.floor(Math.random() * prizes.length);
    return prizes[randomIndex];
};

const getSliderImage = (alt: string): string => {
    const image = sliderImages.find(img => img.alt === alt);
    return image?.src || '/default-avatar.png'; // Provide a default value if image.src is undefined
};

const LeaderBoards = () => {
    const {leaderboard} = useLeaderboard();
    const {selectedAlt}  = useLeaderboard();
    const router = useRouter();
    const [displayPlayers, setDisplayPlayers] = useState<LeaderboardItem[]>([]);
    const sortedPlayers = displayPlayers.slice(0, 3).sort((a, b) => b.wagered - a.wagered);

    useEffect(() => {
        if (leaderboard && leaderboard.data && Array.isArray(leaderboard.data.items) && leaderboard.data.items.length > 0) {
            setDisplayPlayers(leaderboard.data.items);
        } else {
            setDisplayPlayers([
                {
                    _id: "0",
                    userId: "0",
                    username: "No available data",
                    wagered: 0,
                    rank: 0,
                    prize: "No available data",
                    category: "No available data",
                    startDate: "",
                    endDate: "",
                    createdAt: "",
                    updatedAt: "",
                    totalPrize: 0
                },
                {
                    _id: "1",
                    userId: "1",
                    username: "No available data",
                    wagered: 0,
                    rank: 0,
                    prize: "No available data",
                    category: "No available data",
                    startDate: "",
                    endDate: "",
                    createdAt: "",
                    updatedAt: "",
                    totalPrize: 0
                },
                {
                    _id: "2",
                    userId: "2",
                    username: "No available data",
                    wagered: 0,
                    rank: 0,
                    prize: "No available data",
                    category: "No available data",
                    startDate: "",
                    endDate: "",
                    createdAt: "",
                    updatedAt: "",
                    totalPrize: 0
                }
            ]);
        }
    }, [leaderboard]);

    const handleLeaderboard = () => {
        router.push('/leaderboards');
    };

    const startDate = leaderboard?.data?.items[0]?.startDate ? new Date(leaderboard.data.items[0].startDate) : undefined;
    const endDate = leaderboard?.data?.items[0]?.endDate ? new Date(leaderboard.data.items[0].endDate) : undefined;

    const getUpdateIntervalText = () => {
        switch (selectedAlt) {
            case "CsgorollLeaderboard":
            case "RoobetLeaderboard":
            case "EmpireDropLeaderboard":
                return "Leaderboard updates every 24 hours";
            case "CsgobigLeaderboard":
            case "CsgobigDepositLeaderboard":
            case "RainLeaderboard":
            case "DuelGpLeaderboard":
                return "Leaderboard updates every 60 minutes";
            default:
                return "Leaderboard updates every 30-60 minutes";
        }
    };

    return (
        <div className={styles.wrapper}>
            <hr/>
            <div className={styles.leaderBoardsPlayers}>
                <div className={styles.players}>
                    {sortedPlayers.length > 1 && (
                        <PlayerFrame
                            key={sortedPlayers[1]._id}
                            nickname={sortedPlayers[1].username}
                            xp={sortedPlayers[1].wagered}
                            money={sortedPlayers[1].prize || "No data available"}
                            avatar={sortedPlayers[1].category ? getSliderImage(selectedAlt || '') : getSliderImage('')}
                            place={2}
                            category={sortedPlayers[1].category}
                        />
                    )}
                    {sortedPlayers.length > 0 && (
                        <PlayerFrame
                            key={sortedPlayers[0]._id}
                            nickname={sortedPlayers[0].username}
                            xp={sortedPlayers[0].wagered}
                            money={sortedPlayers[0].prize || "No data available"}
                            avatar={sortedPlayers[0].category ? getSliderImage(selectedAlt || '') : getSliderImage('')}
                            place={1}
                            category={sortedPlayers[0].category}
                        />
                    )}
                    {sortedPlayers.length > 2 && (
                        <PlayerFrame
                            key={sortedPlayers[2]._id}
                            nickname={sortedPlayers[2].username}
                            xp={sortedPlayers[2].wagered}
                            money={sortedPlayers[2].prize || "No data available"}
                            avatar={getSliderImage(selectedAlt || '')}
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
                            avatar={player.category ? getSliderImage(selectedAlt || '') : getSliderImage('')}
                            place={index + 1}
                            category={player.category}
                        />
                    ))}
                </SliderItem>
                <CountdownTimer
                    startDate={startDate}
                    endDate={endDate}
                />
                <p className={styles.leaderBoardUpdates}>{getUpdateIntervalText()}</p>
                <Button variant="orange" icon={FaCrown} onClick={handleLeaderboard}>
                    leaderboard
                </Button>
                <div className={styles.outlinedContainer}></div>
            </div>
        </div>
    );
};

export default LeaderBoards;