"use client";

import React from 'react';
import styles from "./RafflesSection.module.scss";
import Image from "next/image";
import floatingCase from "../../../public/futuristic-case.png";

const RafflesSection = () => {
    return (
        <div className={styles.raffle}>
            <div className={styles.raffleHeading}>
                <h1>RAFFLES</h1>
                <p>Weekly & daily raffles - join for a chance to win awesome prizes!</p>
            </div>
            <Image src={floatingCase} alt="Floating Case" width={322} height={380} className={styles.floatingCase}/>
        </div>
    );
};

export default RafflesSection;