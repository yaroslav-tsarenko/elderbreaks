import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import AsideNav from "@/components/aside-navbar/AsideNav";
import PageContent from "@/components/page-content/PageContent";
import Footer from "@/components/footer/Footer";
import React from "react";
import Header from "@/components/header/Header";
import LoginButton from "@/components/login-button/LoginButton";
import { authWrapper } from "@/utils/AuthWrapper";
import {LeaderboardProvider} from "@/utils/LeaderboardContext";

export const metadata: Metadata = {
    title: "ElderBreaks",
    description: "ElderBreaks",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps): React.ReactElement {
    return (
        <html lang="en">
        <body>
        <LeaderboardProvider>
            <PageWrapper>
                <AsideNav />
                <PageContent>
                    <LoginButton />
                    <Header />
                    {children}
                </PageContent>
            </PageWrapper>
            <Footer />
        </LeaderboardProvider>
        </body>
        </html>
    );
}

export default authWrapper(RootLayout);