"use client"

import React from 'react';
import WelcomeSection from "@/sections/welcome-section/WelcomeSection";
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import QuickLinks from "@/sections/quick-links/QuickLinks";
import LatestVideos from "@/sections/latest-videos/LatestVideos";
import FAQ from "@/sections/faq/FAQ";
import { LeaderboardProvider } from '@/utils/LeaderboardContext';

const Home: React.FC = () => {
    return (
        <LeaderboardProvider>
            <WelcomeSection/>
            <LeaderBoards/>
            <QuickLinks/>
            <LatestVideos/>
            {/*<LatestVideos type="Hightlights"/>*/}
            <FAQ/>
        </LeaderboardProvider>
    );
};

export default Home;