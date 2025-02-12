"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { newRequest } from '@/utils/newRequest';

type VipRewards = {
    currentRank: string;
    totalWagered: number;
    lastUpdated: string;
    nextRank: number;
};

type VipRewardData = {
    username: string;
    roobetId: string;
    roobetStatus: boolean;
    vipRewards: VipRewards;
};

const VipRewardContext = createContext<{
    vipRewardData: VipRewardData | null;
    setVipRewardData: React.Dispatch<React.SetStateAction<VipRewardData | null>>;
} | undefined>(undefined);

export const VipRewardProvider = ({ children }: { children: React.ReactNode }) => {
    const [vipRewardData, setVipRewardData] = useState<VipRewardData | null>(null);

    useEffect(() => {
        const fetchVipRewards = async () => {
            try {
                const response = await newRequest.get('/user/vip-rewards');
                setVipRewardData(response.data);
            } catch (error) {
                console.error('Error fetching VIP rewards:', error);
            }
        };

        fetchVipRewards();
    }, []);

    return (
        <VipRewardContext.Provider value={{ vipRewardData, setVipRewardData }}>
            {children}
        </VipRewardContext.Provider>
    );
};

export const useVipReward = () => {
    const context = useContext(VipRewardContext);
    if (!context) {
        throw new Error('useVipReward must be used within a VipRewardProvider');
    }
    return context;
};