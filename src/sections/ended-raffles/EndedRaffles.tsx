"use client";

import React from 'react';
import styles from "./EndedRaffles.module.scss";
import Title from "@/components/title/Title";
import {raffles} from "@/utils/raffles";
import RaffleItem from "@/components/raffle-item/RaffleItem";

const EndedRaffles = () => {
    return (
        <div className={styles.endedRaffles}>
            <Title h2="Ended" span="Raffles"/>
            <div className={styles.rafflesContent}>
                {raffles.map((raffle, index) => (
                    <RaffleItem
                        key={index}
                        data={raffle.data}
                        title={raffle.title}
                        lot={raffle.lot}
                        image={raffle.image}
                        winnerName={raffle.winnerName}
                        winnerAvatar={raffle.winnerAvatar}
                        type="winner"
                    />
                ))}
            </div>
        </div>
    );
};

export default EndedRaffles;