"use client";

import React, { useState, useEffect, FC } from 'react';
import styles from "./Leaders.module.scss";
import Button from "@/components/button/Button";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LeaderItem from "@/components/leader-item/LeaderItem";
import { leaders as mockupLeaders } from "@/mockup-data/leaders";
import { useLeaderboard } from "@/utils/LeaderboardContext";
import { useLeaderboardHistory } from "@/utils/LeaderboardHistoryContext";
import Title from "@/components/title/Title";

interface LeaderProps {
    name: string;
    xp: number;
    money: string | number;
    prize: string | number;
}

interface LeadersProps {
    h2?: string;
    span?: string;
    lastWeekLeaders?: boolean;
}

const Leaders: FC<LeadersProps> = ({ h2, span, lastWeekLeaders = false }) => {
    const [showAll, setShowAll] = useState(false);
    const { leaderboard } = useLeaderboard();
    const { leaderboardHistory } = useLeaderboardHistory();
    const [leaders, setLeaders] = useState<LeaderProps[]>(mockupLeaders);
    const { selectedAlt } = useLeaderboard();

    useEffect(() => {
        if (lastWeekLeaders && leaderboardHistory && Array.isArray(leaderboardHistory.users) && leaderboardHistory.users.length > 0) {
            const historyLeaders = leaderboardHistory.users.map((user: any) => ({
                name: user.username,
                xp: user.wagered,
                money: user.prize ? user.prize.toString() : '',
                prize: user.prize ? user.prize.toString() : ''
            }));
            setLeaders(historyLeaders);
        } else if (leaderboard && leaderboard.data && Array.isArray(leaderboard.data.items) && leaderboard.data.items.length > 0) {
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
    }, [leaderboard, leaderboardHistory, lastWeekLeaders]);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    const sortedLeaders = leaders.sort((a, b) => parseFloat(b.prize.toString()) - parseFloat(a.prize.toString()));
    const displayedLeaders = lastWeekLeaders
        ? sortedLeaders.slice(0, showAll ? 20 : 10)
        : sortedLeaders.slice(3, showAll ? 20 : 10);

    return (
        <>
            {h2 && span && <Title h2={h2} span={span} />}
            <div className={styles.leaderWrapper}>
                <div className={styles.leaders}>
                    <div className={styles.tableLore}>
                        <span>
                            <p>#</p>
                            <p>Name</p>
                        </span>
                        <span>
                            {selectedAlt === "CsgobigDepositLeaderboard" ? "Deposited" : selectedAlt === "CsgorollLeaderboard" ? "Deposited" : "Wagered"}
                        </span>
                        <span>Prize</span>
                    </div>
                    <div className={styles.leadersContent}>
                        {displayedLeaders.map((leader, index) => (
                            <LeaderItem
                                key={index + (lastWeekLeaders ? 1 : 4)}
                                count={index + (lastWeekLeaders ? 1 : 4)}
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