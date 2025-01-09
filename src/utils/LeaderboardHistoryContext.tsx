"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { newRequest } from '@/utils/newRequest';

type LeaderboardHistoryUser = {
    userId: string;
    username: string;
    wagered: number;
    rank: number;
    prize: number;
    eldercoins: string;
    _id: string;
};

type LeaderboardHistoryData = {
    _id: string;
    category: string;
    startDate: string;
    endDate: string;
    users: LeaderboardHistoryUser[];
};

const LeaderboardHistoryContext = createContext<{
    leaderboardHistory: LeaderboardHistoryData | null;
    setLeaderboardHistory: React.Dispatch<React.SetStateAction<LeaderboardHistoryData | null>>;
    selectedCategory: string | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
} | undefined>(undefined);

export const LeaderboardHistoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [leaderboardHistory, setLeaderboardHistory] = useState<LeaderboardHistoryData | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>("Roobet");

    useEffect(() => {
        const fetchDefaultLeaderboardHistory = async () => {
            try {
                const response = await newRequest.get('/content/leaderboards/Roobet');
                setLeaderboardHistory(response.data);
                setSelectedCategory('Roobet');
            } catch (error) {
                console.error('Error fetching default leaderboard history:', error);
            }
        };

        fetchDefaultLeaderboardHistory();
    }, []);

    return (
        <LeaderboardHistoryContext.Provider value={{ leaderboardHistory, setLeaderboardHistory, selectedCategory, setSelectedCategory }}>
            {children}
        </LeaderboardHistoryContext.Provider>
    );
};

export const useLeaderboardHistory = () => {
    const context = useContext(LeaderboardHistoryContext);
    if (!context) {
        throw new Error('useLeaderboardHistory must be used within a LeaderboardHistoryProvider');
    }
    return context;
};