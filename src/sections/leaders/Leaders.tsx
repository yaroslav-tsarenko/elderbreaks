"use client";

import React, { useState, useEffect, FC } from 'react';
import styles from "./Leaders.module.scss";
import LeaderItem from "@/components/leader-item/LeaderItem";
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

const Leaders: FC<LeadersProps> = ({ h2, span, lastWeekLeaders }) => {
    const { leaderboard } = useLeaderboard();
    const { leaderboardHistory } = useLeaderboardHistory();
    const [leaders, setLeaders] = useState<LeaderProps[]>([]);
    const { selectedAlt } = useLeaderboard();

    useEffect(() => {
        if (lastWeekLeaders) {
            if (leaderboardHistory && Array.isArray(leaderboardHistory) && leaderboardHistory.length > 0) {
                const historyLeaders = leaderboardHistory.map((user: any) => ({
                    name: user.username,
                    xp: user.wagered,
                    money: user.prize ? user.prize.toString() : 'No available data',
                    prize: user.prize ? user.prize.toString() : 'No available data'
                }));
                setLeaders(historyLeaders);
            } else {
                setLeaders([{ name: "No available data", xp: 0, money: "No available data", prize: "No available data" }]);
            }
        } else {
            if (leaderboard && leaderboard.data && Array.isArray(leaderboard.data.items) && leaderboard.data.items.length > 0) {
                const serverLeaders = leaderboard.data.items.map((item: any) => ({
                    name: item.username,
                    xp: item.wagered,
                    money: item.prize ? item.prize.toString() : 'No available data',
                    prize: item.prize ? item.prize.toString() : 'No available data'
                }));
                setLeaders(serverLeaders);
            } else {
                setLeaders([{ name: "No available data", xp: 0, money: "No available data", prize: "No available data" }]);
            }
        }
    }, [leaderboard, leaderboardHistory, lastWeekLeaders]);

    const getStatus = () => {
        return selectedAlt === "CsgorollLeaderboard" || selectedAlt === "CsgobigDepositLeaderboard" ? "Deposited" : "Wagered";
    };

    const displayedLeaders = lastWeekLeaders ? leaders.slice(0, 10) : leaders.slice(3, 10);

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
                            {getStatus()}
                        </span>
                        <span>Prize</span>
                    </div>
                    <div className={styles.leadersContent}>
                        {displayedLeaders.length > 0 ? (
                            displayedLeaders.map((leader, index) => (
                                <LeaderItem
                                    key={index + (lastWeekLeaders ? 1 : 4)}
                                    count={index + (lastWeekLeaders ? 1 : 4)}
                                    name={leader.name}
                                    xp={leader.xp}
                                    money={leader.money}
                                    prize={leader.prize}
                                />
                            ))
                        ) : (
                            <p>No available data</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leaders;