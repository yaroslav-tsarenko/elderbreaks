import React from 'react';
import styles from "./LeaderBoards.module.scss"
import {players} from "@/utils/players";
import PlayerFrame from "@/components/player-frame/PlayerFrame";
import CountdownTimer from "@/components/countdown-timer/CountdownTimer";
import Button from "@/components/button/Button";
import { FaCrown } from "react-icons/fa";

const LeaderBoards = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leaderBoardsContent}>
                <h2>
                    weekly
                    <span>
                    leaderboards
                    </span>
                </h2>
                <div className={styles.leaderBoardsContentDescription}>
                    <p>Weekly wager races - be first and grab insane prizes! </p>
                    <h5>Over
                        <span>
                        $18 000
                        </span>
                        in the prize pool!
                    </h5>
                </div>
            </div>
            <hr/>
            <div className={styles.leaderBoardsPlayers}>
                <div className={styles.players}>
                    {players.map((player, index) => (
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
                <CountdownTimer/>
                <p className={styles.leaderBoardUpdates}>Leaderboard updates every 30-60 minutes</p>
                <Button variant="orange" icon={FaCrown}>
                    leaderboard
                </Button>
                <div className={styles.outlinedContainer}></div>
            </div>
        </div>
    );
};

export default LeaderBoards;