"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { newRequest } from '@/utils/newRequest';

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
        totalPrize: number;
    };
};

const LeaderboardContext = createContext<{
    leaderboard: LeaderboardData | null;
    setLeaderboard: React.Dispatch<React.SetStateAction<LeaderboardData | null>>;
    selectedAlt: string | null;
    setSelectedAlt: React.Dispatch<React.SetStateAction<string | null>>;
} | undefined>(undefined);

export const LeaderboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null);
    const [selectedAlt, setSelectedAlt] = useState<string | null>(null);

    useEffect(() => {
        const fetchDefaultLeaderboard = async () => {
            try {
                const response = await newRequest.get('/user/leaderboard/CsgostakeLeaderboard');
                setLeaderboard(response.data);
                setSelectedAlt('CsgostakeLeaderboard');
            } catch (error) {
                console.error('Error fetching default leaderboard:', error);
            }
        };

        fetchDefaultLeaderboard();
    }, []);

    return (
        <LeaderboardContext.Provider value={{ leaderboard, setLeaderboard, selectedAlt, setSelectedAlt }}>
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