"use client"

import React from 'react';
import WelcomeSection from "@/sections/welcome-section/WelcomeSection";
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import QuickLinks from "@/sections/quick-links/QuickLinks";
import LatestVideos from "@/sections/latest-videos/LatestVideos";
import Stats from "@/sections/stats/Stats";
import FAQ from "@/sections/faq/FAQ";
import { useUser } from '@/utils/UserContext';

const Home: React.FC = () => {
    const user = useUser();
    console.log(user); 
    return (
        <>
            <WelcomeSection/>
            <LeaderBoards/>
            <QuickLinks/>
            <LatestVideos/>
            <Stats/>
            <LatestVideos type="Hightlights"/>
            <FAQ/>
        </>
    );
};

export default Home;