"use client"

import React from 'react';
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import ClashCasino from "@/sections/clashcasino-leaderboard/ClashCasino";
import HowItWorks from "@/sections/how-it-works/HowItWorks";
import Leaders from "@/sections/leaders/Leaders";
import { LeaderboardProvider } from '@/utils/LeaderboardContext';
import {LeaderboardHistoryProvider} from "@/utils/LeaderboardHistoryContext";

const LeaderboardsPage = () => {

    return (
        <LeaderboardProvider>
            <LeaderboardHistoryProvider>
                <ClashCasino/>
                <LeaderBoards/>
                <Leaders lastWeekLeaders={false}/>
                <HowItWorks type="1"/>
                <Leaders lastWeekLeaders={true} h2="PREVIOUS" span="LEADERBOARD"/>
            </LeaderboardHistoryProvider>
        </LeaderboardProvider>
    );
};

export default LeaderboardsPage;