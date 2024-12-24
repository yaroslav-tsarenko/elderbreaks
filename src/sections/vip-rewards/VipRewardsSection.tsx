"use server"
import React from 'react';
import styles from "./VipRewardsSection.module.scss"
import Button from "@/components/button/Button";
import {FaEye} from "react-icons/fa";
import roobet from "../../../public/roobet-png.png";
import Image from "next/image";
import {wagers} from "@/mockup-data/wagers";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import WagerTier from "@/components/wager-tier/WagerTier";

const VipRewardsSection = () => {
    return (
        <>
            <div className={styles.vipSectionBg}>
                <div className={styles.vipSectionContent}>
                    <h1>VIP REWARDS</h1>
                    <p>Wager to claim November`s rewards!</p>
                </div>
                <div className={styles.roobet}>
                    <Image src={roobet.src} alt="roobet" width={179} height={46}/>
                    <p>Connect Roobet. You must verify your Roobet account to get started. This can be configured in your account settings.</p>
                    <Button variant="orange-non-centered" icon={FaEye}>Verify</Button>
                </div>
            </div>
            <div className={styles.maxTickets}>
                <hr/>
                <div className={styles.ticketsProgress}>
                    <div className={styles.ticketInfo}>
                        <WagerTier tier={"bronze"}/>
                        <h4>Wood</h4>
                        <p>Tier</p>
                    </div>
                    <div className={styles.progressBar}>
                        <ProgressBar percentage={50}/>
                    </div>
                    <div className={styles.ticketInfo}>
                        <WagerTier tier={"bronze"}/>
                        <h4>Bronze</h4>
                        <p>Tier</p>
                    </div>
                </div>
                <div className={styles.ticketsProgressMobile}>
                    <div className={styles.ticketsProgressMobileContent}>
                        <div className={styles.ticketInfo}>
                            <WagerTier tier={"wood"}/>
                            <h4>Wood</h4>
                            <p>Tier</p>
                        </div>
                        <div className={styles.ticketInfo}>
                            <WagerTier tier={"bronze"}/>
                            <h4>Bronze</h4>
                            <p>Tier</p>
                        </div>
                    </div>
                    <div className={styles.progressBar}>
                        <ProgressBar percentage={50}/>
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
                            <WagerTier tier={"bronze"}/>
                            <p>${wager.amount}</p>
                                </span>
                                <p>{wager.tier}</p>
                                <h3>${wager.reward}</h3>
                                <Button variant="red" icon={FaEye}>Claim</Button>
                            </div>
                            <div key={index} className={styles.wagerItemMobile}>
                                <div className={styles.wagerInfo}>
                                    <WagerTier tier={"bronze"}/>
                                    <span>
                                        Wager
                                        <p>${wager.amount}</p>
                                    </span>
                                </div>
                                <div className={styles.wagerInfo}>
                                    <p>{wager.tier}</p>
                                    -
                                    <h3>${wager.reward}</h3>
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