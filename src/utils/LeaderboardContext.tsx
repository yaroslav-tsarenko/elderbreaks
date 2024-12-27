"use client";

import React, { createContext, useContext, useState } from 'react';

type LeaderboardItem = {
    _id: string;
    userId: string;
    username: string;
    wagered: number;
    rank: number;
    prize: string | null;
    category: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    totalPrize: number;
};

type LeaderboardData = {
    success: boolean;
    data: {
        items: LeaderboardItem[];
    };
};

const LeaderboardContext = createContext<{
    leaderboard: LeaderboardData | null;
    setLeaderboard: React.Dispatch<React.SetStateAction<LeaderboardData | null>>;
} | undefined>(undefined);

export const LeaderboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null);
    return (
        <LeaderboardContext.Provider value={{ leaderboard, setLeaderboard }}>
            {children}
        </LeaderboardContext.Provider>
    );
};

export const useLeaderboard = () => {
    const context = useContext(LeaderboardContext);
    if (!context) {
        throw new Error('useLeaderboard must be used within a LeaderboardProvider');
    }
    return context;
};