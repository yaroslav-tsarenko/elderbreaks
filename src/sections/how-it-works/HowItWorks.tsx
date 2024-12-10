import React from 'react';
import styles from "./HowItWorks.module.scss";
import Title from "@/components/title/Title";
import Image from "next/image";
import InfoIcon from "@/assets/images/info-icon.svg"

const HowItWorks = () => {
    return (
        <div className={styles.howItWorks}>
            <Title h2="how it" span="works"/>
            <div className={styles.howItWorksPoints}>
                <div className={styles.howItWorksPoint}>
                    <p>1</p>
                    <h3>Get Points</h3>
                    <p>Gain points by attending the WRewards team streams and exchange them into GPoints to play.</p>
                </div>
                <div className={styles.howItWorksPoint}>
                    <p>2</p>
                    <h3>Get Points</h3>
                    <p>Gain points by attending the WRewards team streams and exchange them into GPoints to play.</p>
                </div>
                <div className={styles.howItWorksPoint}>
                    <p>3</p>
                    <h3>Get Points</h3>
                    <p>Gain points by attending the WRewards team streams and exchange them into GPoints to play.</p>
                </div>
            </div>
            <div className={styles.info}>
                <Image src={InfoIcon} alt="Info icon" width={75} height={75}/>
                <p>
                    Please note, to ensure a fair gaming environment, refrain from misusing system. Each user will be manually checked for complying with leaderboard rules, and abuse.
                </p>
            </div>
        </div>
    );
};

export default HowItWorks;