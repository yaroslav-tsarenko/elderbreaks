import React from 'react';
import styles from "./WelcomeSection.module.scss";
import Button from "@/components/button/Button";
import GunImage from "@/assets/images/gun.png";
import GiftImage from "@/assets/images/gift.png";
import Image from "next/image";
import { FaSignInAlt } from 'react-icons/fa';

const WelcomeSection = () => {
    return (
        <section className={styles.welcomeSection}>
            <div className={styles.sectionHeader}>
                <Button variant="outlined" icon={FaSignInAlt}>Login</Button>
            </div>
            <div className={styles.sectionContent}>
                <Image src={GunImage} className={styles.gunImage} alt="Gun Image" width={402} height={351}/>
                <h3>welcome</h3>
                <h1>to elder breaks</h1>
                <h2>club</h2>
                <p>Wager under code EB - the most rewarding code out there!</p>
                <Button variant="orange">Use code eb</Button>
            </div>
            <Image className={styles.giftImage} src={GiftImage} alt="Gift Image" width={224} height={226}/>
        </section>
    );
};

export default WelcomeSection;