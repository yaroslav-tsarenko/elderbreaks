"use client";

import React, {FC} from 'react';
import styles from "./ActiveRaffles.module.scss";
import Title from "@/components/title/Title";
import { raffles } from "@/utils/raffles";
import RaffleItem from "@/components/raffle-item/RaffleItem";
import {ActiveRafflesProps} from "@/types/activeRaffles";

const ActiveRaffles:FC<ActiveRafflesProps> = ({h2, span}) => {
    return (
        <div className={styles.raffles}>
            <Title h2={h2} span={span}/>
            <div className={styles.rafflesContent}>
                {raffles.map((raffle, index) => (
                    <RaffleItem
                        key={index}
                        data={raffle.data}
                        title={raffle.title}
                        lot={raffle.lot}
                        image={raffle.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ActiveRaffles;