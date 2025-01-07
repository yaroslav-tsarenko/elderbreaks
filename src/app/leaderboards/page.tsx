"use client"

import React from 'react';
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import ClashCasino from "@/sections/clashcasino-leaderboard/ClashCasino";
import HowItWorks from "@/sections/how-it-works/HowItWorks";
import Leaders from "@/sections/leaders/Leaders";
import { LeaderboardProvider } from '@/utils/LeaderboardContext';

const LeaderboardsPage = () => {

    return (
        <LeaderboardProvider>
            <ClashCasino/>
            <LeaderBoards/>
            <Leaders fromTheBeginning={true}/>
            <HowItWorks type="1"/>
            <Leaders fromTheBeginning={false} h2="LEADERBOARD" span="HISTORY"/>
        </LeaderboardProvider>
    );
};

export default LeaderboardsPage;