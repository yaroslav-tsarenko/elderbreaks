"use client";

import React from 'react';
import styles from "./Banner.module.scss"
import Button from "@/components/button/Button";
import {FaEye} from "react-icons/fa";
import {useRouter} from "next/navigation";

const Banners = () => {
    const router = useRouter();


    const handleNav = (string: string) => {
        router.push(string)
    }

    return (
        <div className={styles.banners}>
            <div className={styles.banner}>
                <h2>point store</h2>
                <p>Choose your own bonuses and buy them using rewards points.</p>
                <Button variant="orange" onClick={() => handleNav('/all-bonuses')}>Buy Exclusive Bonuses</Button>
            </div>
            <div className={styles.banner}>
                <h2>raffles</h2>
                <p>Enter into our exclusive raffles by participating under any of our supported codes! Prizes can take
                    up to 15 days to receive</p>
                <Button variant="orange" onClick={() => handleNav('/raffles')}>Win Amazing Prizes</Button>
            </div>
            <div className={styles.banner}>
                <h2>Leaderboards</h2>
                <p>Our exclusive leaderboard rewards the highest wagered users under the supported codes.</p>
                <div className={styles.bannerButtons}>
                    <Button variant="orange" onClick={() => handleNav('/leaderboards')}>Join Competition</Button>
                    <Button variant="outlined-non-responsive" icon={FaEye} onClick={() => handleNav('/leaderboards')}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default Banners;