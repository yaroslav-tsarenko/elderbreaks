"use client"
import React from 'react';
import styles from "./VipRewardsSection.module.scss"
import Button from "@/components/button/Button";
import {FaEye} from "react-icons/fa";
import roobet from "../../../public/roobet-png.png";
import Image from "next/image";
import {wagers} from "@/mockup-data/wagers";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import WagerTier from "@/components/wager-tier/WagerTier";
import WagerTierInfo from "@/components/wager-tier-info/WagerTierInfo";
import {useVipReward} from "@/utils/VipRewardsContext";

const VipRewardsSection = () => {
    const {vipRewardData}  = useVipReward();
    const currentMonth = new Date().toLocaleString('default', {month: 'long'});
    const handleNav = (str: string) => {
        window.location.href = str;
    }

    const ranks = [
        { name: "Copper", threshold: 5000 },
        { name: "Aluminum", threshold: 10000 },
        { name: "Bronze", threshold: 25000 },
        { name: "Tin", threshold: 50000 },
        { name: "Iron", threshold: 100000 },
        { name: "Gold", threshold: 250000 },
        { name: "Platinum", threshold: 500000 },
        { name: "Diamond", threshold: 1000000 },
        { name: "White Gold", threshold: 2500000 },
        { name: "King Muppet", threshold: 10000000 }
    ];

    const formatNumberWithCommas = (value: number) => {
        return value.toLocaleString('en-US');
    };
    const currentRank = vipRewardData?.vipRewards.currentRank || "No Rank";
    const nextRank = ranks.find(rank => rank.name === currentRank)?.threshold
        ? ranks.find(rank => rank.threshold > (vipRewardData?.vipRewards.totalWagered ?? 0))?.name || "Copper"
        : "Copper";
    const nextRankThreshold = ranks.find(rank => rank.name === nextRank)?.threshold || 5000;
    const progressPercentage = ((vipRewardData?.vipRewards.totalWagered || 0) / nextRankThreshold) * 100;

    return (
        <>
            <div className={styles.vipSectionBg}>
                <div className={styles.vipSectionContent}>
                    <h1>VIP REWARDS</h1>
                    <p>Wager to claim {currentMonth}`s rewards!</p>
                </div>
                {vipRewardData?.roobetStatus ? null :
                    <div className={styles.roobet}>
                        <Image src={roobet.src} alt="roobet" width={179} height={46}/>
                        <p>Connect Roobet. You must verify your Roobet account to get started. This can be configured in
                            your account settings.</p>
                        <Button variant="orange-non-centered" icon={FaEye} onClick={() => handleNav("/account")}>Verify</Button>
                    </div>
                }
            </div>
            <div className={styles.maxTickets}>
                <hr/>
                <div className={styles.ticketsProgress}>
                    <WagerTierInfo tier={vipRewardData?.vipRewards.currentRank || "No Rank"} title={vipRewardData?.vipRewards.currentRank || "No Rank"} description="Tier"/>
                    <div className={styles.progressBar}>
                        <ProgressBar percentage={progressPercentage}/>
                    </div>
                    <WagerTierInfo tier={nextRank} title={nextRank} description="Tier" />
                </div>
                <div className={styles.ticketsProgressMobile}>
                    <div className={styles.ticketsProgressMobileContent}>
                        <WagerTierInfo tier={vipRewardData?.vipRewards.currentRank || "No Rank"} title={vipRewardData?.vipRewards.currentRank || "No Rank"} description="Tier"/>
                        <WagerTierInfo tier={nextRank} title={nextRank} description="Tier" />
                    </div>
                    <div className={styles.progressBar}>
                        <ProgressBar percentage={progressPercentage}/>
                    </div>
                </div>
                <hr/>
            </div>
            <div className={styles.wagersContent}>
                <div className={styles.wagerTitle}>
                    <p>Wager</p>
                    <p>Rank</p>
                    <h3>Reward</h3>
                </div>
                <div className={styles.wagers}>
                    {wagers.map((wager, index) => (
                        <>
                            <div key={index} className={styles.wagerItem}>
                                <span>
                            <WagerTier tier={wager.tier}/>
                          <p>${formatNumberWithCommas(wager.amount)}</p>
                                </span>
                                <p>{wager.tier}</p>
                                <h3>${formatNumberWithCommas(wager.reward)}</h3>
                                <Button variant="red" icon={FaEye}>Claim</Button>
                            </div>
                            <div key={index} className={styles.wagerItemMobile}>
                                <div className={styles.wagerInfo}>
                                    <WagerTier tier={wager.tier}/>
                                    <span>
                                        Wager
                                        <p>${formatNumberWithCommas(wager.amount)}</p>
                                    </span>
                                </div>
                                <div className={styles.wagerInfo}>
                                    <p>{wager.tier}</p>
                                    -
                                    <h3>${formatNumberWithCommas(wager.reward)}</h3>
                                </div>
                                <Button variant="red" icon={FaEye}>Claim</Button>
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </>
    );
};

export default VipRewardsSection;