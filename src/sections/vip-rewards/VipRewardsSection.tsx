"use server"
import React from 'react';
import styles from "./VipRewardsSection.module.scss"
import Button from "@/components/button/Button";
import { FaSignInAlt, FaEye, FaBox } from "react-icons/fa";
import roobet from "@/assets/images/roobet.svg";
import wagerIcon from "@/assets/images/wager-icon.svg";
import Image from "next/image";
import progressbar from "@/assets/images/progressbar.svg";
import { wagers } from "@/utils/wagers";

const VipRewardsSection = () => {
    return (
        <>
            <div className={styles.vipSectionBg}>
                <div className={styles.sectionHeader}>
                    <Button variant="outlined" icon={FaSignInAlt}>Login</Button>
                </div>
                <div className={styles.vipSectionContent}>
                    <h1>VIP REWARDS</h1>
                    <p>Wager to claim November`s rewards!</p>
                </div>
                <div className={styles.roobet}>
                    <Image src={roobet.src} alt="roobet" width={179} height={46} />
                    <p>Connect Roobet You must verify your Roobet account to get started. You can configure this in
                        account settings.</p>
                    <Button variant="orange-non-centered" icon={FaEye}>Verify</Button>
                </div>
            </div>

            <div className={styles.maxTickets}>
                <hr />
                <div className={styles.ticketsProgress}>
                    <div className={styles.ticketInfo}>
                        <FaBox />
                        <h4>Wood</h4>
                        <p>Tier</p>
                    </div>
                    <Image src={progressbar.src} className={styles.progress} alt="progress" width={725} height={27} />
                    <div className={styles.ticketInfo}>
                        <FaBox />
                        <h4>Bronze</h4>
                        <p>Tier</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.wagers}>
                {wagers.map((wager, index) => (
                    <div key={index} className={styles.wagerItem}>
                        <span>
                            <Image src={wagerIcon.src} alt="wager" width={44} height={44} />
                            <p>Wager ${wager.amount}</p>
                        </span>
                        <p>Tier: {wager.tier}</p>
                        <p>Reward: ${wager.reward}</p>
                        <Button variant="red" icon={FaEye}>Claim</Button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default VipRewardsSection;