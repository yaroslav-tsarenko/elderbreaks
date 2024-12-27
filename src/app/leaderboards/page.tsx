"use client"

import React, { useEffect, useState } from 'react';
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import ClashCasino from "@/sections/clashcasino-leaderboard/ClashCasino";
import HowItWorks from "@/sections/how-it-works/HowItWorks";
import Leaders from "@/sections/leaders/Leaders";
import LeaderboardHistory from "@/sections/leaderboard-history/LeaderboardHistory";
import LiveDrops from "@/sections/live-drops/LiveDrops";
import { LeaderboardProvider, useLeaderboard } from '@/utils/LeaderboardContext';
import { newRequest } from '@/utils/newRequest';

const LeaderboardsPage = () => {
    const [statusLeader, setStatusLeader] = useState<boolean | null>(null);
    const { setLeaderboard } = useLeaderboard();

    const leaderboardModels = [
        "CsgobigLeaderboard",
        "RoobetLeaderboard",
        "CsgorollLeaderboard"
    ];

    useEffect(() => {
        const fetchRandomLeaderboard = async () => {
            const randomModel = leaderboardModels[Math.floor(Math.random() * leaderboardModels.length)];
            try {
                const response = await newRequest.get(`/user/leaderboard/${randomModel}`);
                const { statusLeader, data } = response.data;
                setStatusLeader(statusLeader);
                setLeaderboard(data);
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
                setStatusLeader(false);
            }
        };

        fetchRandomLeaderboard();
    }, [setLeaderboard]);

    if (statusLeader === null) {
        return <div className="loading-screen">Loading...</div>;
    }

    if (statusLeader === false) {
        return <div className="loading-screen">Leaderboard is not available</div>;
    }

    return (
        <LeaderboardProvider>
            <ClashCasino/>
            <LeaderBoards/>
            <HowItWorks type="1"/>
            <Leaders/>
            <LeaderboardHistory/>
            <LiveDrops/>
        </LeaderboardProvider>
    );
};

export default LeaderboardsPage;