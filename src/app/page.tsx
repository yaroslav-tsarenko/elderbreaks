import React from 'react';
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import AsideNav from "@/components/aside-navbar/AsideNav";
import WelcomeSection from "@/components/welcome-section/WelcomeSection";
import LeaderBoards from "@/components/leaderboards/LeaderBoards";
import PageContent from "@/components/page-content/PageContent";
import Footer from "@/components/footer/Footer";

const Home = () => {
    return (
        <>
            <PageWrapper>
                <AsideNav/>
                <PageContent>
                    <WelcomeSection/>
                    <LeaderBoards/>
                </PageContent>
            </PageWrapper>
            <Footer/>
        </>

    );
};

export default Home;