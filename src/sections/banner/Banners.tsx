"use server";

import React from 'react';
import styles from "./Banner.module.scss"
import Button from "@/components/button/Button";
import {FaEye} from "react-icons/fa";

const Banners = () => {
    return (
        <div className={styles.banners}>
            <div className={styles.banner}>
                <h2>point store</h2>
                <p>Choose your own bonuses and buy them using rewards points.</p>
                <Button variant="orange">Buy Exclusive Bonuses</Button>
            </div>
            <div className={styles.banner}>
                <h2>raffles</h2>
                <p>Enter into our exclusive raffles by participating under any of our supported codes! Prizes can take up to 15 days to receive</p>
                <Button variant="orange">Win Amazing Prizes</Button>
            </div>
            <div className={styles.banner}>
                <h2>Leaderboards</h2>
                <p>Our exclusive leaderboard rewards the highest wagered users under the supported codes.</p>
                <div className={styles.bannerButtons}>
                    <Button variant="orange">Join Competition</Button>
                    <Button variant="outlined" icon={FaEye}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default Banners;