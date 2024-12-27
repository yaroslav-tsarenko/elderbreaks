"use client"

import React from 'react';
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import ClashCasino from "@/sections/clashcasino-leaderboard/ClashCasino";
import HowItWorks from "@/sections/how-it-works/HowItWorks";
import Leaders from "@/sections/leaders/Leaders";
import LeaderboardHistory from "@/sections/leaderboard-history/LeaderboardHistory";
import LiveDrops from "@/sections/live-drops/LiveDrops";
import { LeaderboardProvider, useLeaderboard } from '@/utils/LeaderboardContext';

const LeaderboardsContent = () => {
    const { leaderboard } = useLeaderboard();

    if (!leaderboard || !leaderboard.data || !Array.isArray(leaderboard.data.items) || leaderboard.data.items.length === 0) {
        return <div className="loading-screen">Leaderboard is not available right now</div>;
    }

    return (
        <>
            <ClashCasino/>
            <LeaderBoards/>
            <HowItWorks type="1"/>
            <Leaders/>
            <LeaderboardHistory/>
            <LiveDrops/>
        </>
    );
};

const LeaderboardsPage = () => {
    return (
        <LeaderboardProvider>
            <LeaderboardsContent />
        </LeaderboardProvider>
    );
};

export default LeaderboardsPage;