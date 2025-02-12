"use server";
import React from 'react';
import VipRewardsSection from "@/sections/vip-rewards/VipRewardsSection";
import { VipRewardProvider } from '@/utils/VipRewardsContext';

const VIPRewards = () => {
    return (
        <VipRewardProvider>
            <VipRewardsSection/>
        </VipRewardProvider>
    );
};

export default VIPRewards;