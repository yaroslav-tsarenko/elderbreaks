import React from 'react';
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import ClashCasino from "@/sections/clashcasino-leaderboard/ClashCasino";
import HowItWorks from "@/sections/how-it-works/HowItWorks";
import Leaders from "@/sections/leaders/Leaders";
import LeaderboardHistory from "@/sections/leaderboard-history/LeaderboardHistory";
import LiveDrops from "@/sections/live-drops/LiveDrops";

const Leaderboards = () => {
    return (
        <>
            <ClashCasino/>
            <HowItWorks/>
            <LeaderBoards/>
            <Leaders/>
            <LeaderboardHistory/>
            <LiveDrops/>
        </>
    );
};

export default Leaderboards;