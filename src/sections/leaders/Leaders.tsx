"use client";

import React, {useState, useEffect} from 'react';
import styles from "./Leaders.module.scss";
import Button from "@/components/button/Button";
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import LeaderItem from "@/components/leader-item/LeaderItem";
import {leaders as mockupLeaders} from "@/mockup-data/leaders";
import {useLeaderboard} from "@/utils/LeaderboardContext";

interface LeaderProps {
    name: string;
    xp: number;
    money: string | number;
    prize: string | number;
}

const Leaders = () => {
    const [showAll, setShowAll] = useState(false);
    const {leaderboard} = useLeaderboard();
    const [leaders, setLeaders] = useState<LeaderProps[]>(mockupLeaders);
    const {selectedAlt} = useLeaderboard();
    useEffect(() => {
        if (leaderboard && leaderboard.data && Array.isArray(leaderboard.data.items) && leaderboard.data.items.length > 0) {
            const serverLeaders = leaderboard.data.items.map((item: any) => ({
                name: item.username,
                xp: item.wagered,
                money: item.prize ? item.prize.toString() : '',
                prize: item.prize ? item.prize.toString() : ''
            }));
            setLeaders(serverLeaders);
        } else {
            setLeaders(mockupLeaders);
        }
    }, [leaderboard]);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            {/*<Title h2="other" span="leaders"/>*/}
            <div className={styles.leaderWrapper}>
                <div className={styles.leaders}>
                    <div className={styles.tableLore}>
                        <span>
                            <p>#</p>
                            <p>Name</p>
                        </span>
                        <span>
    {selectedAlt === "CsgobigDepositLeaderboard" ? "Deposited" : selectedAlt === "CsgorollLeaderboard" ? "Deposited" : "Wagered"}</span>
                        <span>Prize</span>
                    </div>
                    <div className={styles.leadersContent}>
                        {leaders
                            .sort((a, b) => parseFloat(b.prize.toString()) - parseFloat(a.prize.toString()))
                            .slice(3, showAll ? 20 : 10)
                            .map((leader, index) => (
                                <LeaderItem
                                    key={index + 4}
                                    count={index + 4}
                                    name={leader.name}
                                    xp={leader.xp}
                                    money={leader.money}
                                    prize={leader.prize}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <Button variant="orange" icon={showAll ? FaEyeSlash : FaEye} onClick={handleToggle}>
                {showAll ? 'show less' : 'show more'}
            </Button>
        </>
    );
};

export default Leaders;