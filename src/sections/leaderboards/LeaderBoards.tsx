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
import {players} from "@/mockup-data/players";
import {sliderImages} from '@/mockup-data/sliderImages';
import Image from "next/image";
import csgotakecoin from "../../../public/csgostakecoin.png";
import bigCoin from "../../../public/big-coin.png";
import rainCoin from "../../../public/rain-coin.png";
import duelGP from "../../../public/duelgp-coinnew.png";
import csgoroll from "../../../public/csgoroll.png";

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

const getRandomTotalPrize = () => {
    return Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
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
            const mockupPlayers = players.map(player => ({
                ...player,
                category: player.category.src,
                totalPrize: getRandomTotalPrize()
            }));
            setDisplayPlayers(mockupPlayers);
        }
    }, [leaderboard]);

    const handleLeaderboard = () => {
        router.push('/leaderboards');
    };

    const getCurrencySymbol = () => {
        switch (selectedAlt) {
            case "CsgostakeLeaderboard":
                return <Image src={csgotakecoin} className={styles.coin} alt="coin" width={25} height={25} />;
            case "RoobetLeaderboard":
                return "$";
            case "EmpireDropLeaderboard":
                return "€";
            case "CsgobigLeaderboard":
                return <Image src={bigCoin} className={styles.coin} alt="coin" width={25} height={25} />;
            case "CsgobigDepositLeaderboard":
                return <Image src={bigCoin} className={styles.coin} alt="coin" width={25} height={25} />;
            case "RainLeaderboard":
                return <Image src={rainCoin} className={styles.coin} alt="coin" width={25} height={25} />;
            case "DuelGpLeaderboard":
                return <Image src={duelGP} className={styles.coin} alt="coin" width={25} height={25} />;
            case "CsgorollLeaderboard":
                return <Image src={csgoroll} className={styles.coin} alt="coin" width={25} height={25} />;
            default:
                return "$";
        }
    };

    const startDate = leaderboard?.data?.items[0]?.startDate ? new Date(leaderboard.data.items[0].startDate) : undefined;
    const endDate = leaderboard?.data?.items[0]?.endDate ? new Date(leaderboard.data.items[0].endDate) : undefined;
    const totalPrize = leaderboard?.data?.totalPrize || 0;

    return (
        <div className={styles.wrapper}>
            <div className={styles.leaderBoardsContent}>
                <h2>
                    weekly
                    <span>leaderboards</span>
                </h2>
                <div className={styles.leaderBoardsContentDescription}>
                    <p>Weekly wager races - be first and grab insane prizes!</p>
                    <h5><span>{getCurrencySymbol()}{totalPrize}</span> in the prize pool!</h5>
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
                            money={sortedPlayers[0].prize || getRandomPrize()}
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
                            money={sortedPlayers[2].prize || getRandomPrize()}
                            avatar={sortedPlayers[2].category ? getSliderImage(selectedAlt || '') : getSliderImage('')}
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