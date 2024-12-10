import React from 'react';
import styles from "./BonusCard.module.scss";
import Image from "next/image";
import gamdom from "@/assets/images/gamdom.svg"
import Button from "@/components/button/Button";
import {FaCrown, FaGamepad, FaGift, FaCopy} from "react-icons/fa";

const BonusCard = () => {
    return (
        <div className={styles.card}>
            <Image src={gamdom.src} alt="Gamdom" width={188} height={43}/>
            <div className={styles.percetange}>
                <h2>
                    up to 65%
                </h2>
                <p>rakeback</p>
            </div>
            <div className={styles.promo}>
                <div className={styles.promoCode}>
                            <span>
                                Code: WJRF
                            </span>
                    <FaCopy className={styles.copyIcon}/>
                </div>
                <Button variant="orange-non-centered-small" icon={FaGift}>claim bonus</Button>
            </div>
            <div className={styles.credentials}>
                <p><FaCrown/> Access to the Leaderboard</p>
                <p><FaGamepad/> Discord Spins</p>
            </div>
        </div>
    );
};

export default BonusCard;