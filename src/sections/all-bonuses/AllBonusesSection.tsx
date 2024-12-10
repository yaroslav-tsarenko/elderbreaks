import React from 'react';
import styles from "./AllBonusesSection.module.scss";
import Button from "@/components/button/Button";
import {FaSignInAlt, FaGift, FaCopy} from "react-icons/fa";
import Title from "@/components/title/Title";
import BonusCard from "@/components/bonus-card/BonusCard";

const AllBonusesSection = () => {
    return (
        <>
            <div className={styles.allBonusesSection}>
                <div className={styles.sectionHeader}>
                    <Button variant="outlined" icon={FaSignInAlt}>Login</Button>
                </div>
                <div className={styles.sectionContent}>
                    <h3>Сlaim all of your amazing </h3>
                    <h2>REWARDS</h2>
                    <p>Register & use codes for bonuses</p>
                </div>
                <div className={styles.boost}>
                    <p>Claim yourrakeback boost!</p>
                    <h2>10%</h2>
                    <h3>cashback <span>for 14 days</span></h3>
                    <div className={styles.promoSection}>
                        <div className={styles.promoCode}>
                            <span>
                                Code: WJRF
                            </span>
                            <FaCopy className={styles.copyIcon}/>
                        </div>
                        <Button variant="orange-non-centered" icon={FaGift}>claim bonus</Button>
                    </div>
                </div>
                <div className={styles.amazingRewards}>
                    <Title h2="Amazing" span="Rewards"/>
                    <div className={styles.amazingRewardsContent}>
                        {Array.from({length: 8}).map((_, index) => (
                            <BonusCard key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default AllBonusesSection;