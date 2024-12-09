import React from 'react';
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import AsideNav from "@/components/aside-navbar/AsideNav";
import WelcomeSection from "@/sections/welcome-section/WelcomeSection";
import LeaderBoards from "@/sections/leaderboards/LeaderBoards";
import PageContent from "@/components/page-content/PageContent";
import Footer from "@/components/footer/Footer";
import QuickLinks from "@/sections/quick-links/QuickLinks";

const Home = () => {
    return (
        <>
            <PageWrapper>
                <AsideNav/>
                <PageContent>
                    <WelcomeSection/>
                    <LeaderBoards/>
                    <QuickLinks/>
                </PageContent>
            </PageWrapper>
            <Footer/>
        </>

    );
};

export default Home;