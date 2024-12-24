"use client";

import React, {FC} from 'react';
import styles from "./ActiveRaffles.module.scss";
import Title from "@/components/title/Title";
import { raffles } from "@/mockup-data/raffles";
import RaffleItem from "@/components/raffle-item/RaffleItem";
import {ActiveRafflesProps} from "@/types/activeRaffles";
import SliderItem from "@/components/slider-item/SliderItem";

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
            <SliderItem slidesToShow={2}>
                {raffles.map((raffle, index) => (
                    <RaffleItem
                        key={index}
                        data={raffle.data}
                        title={raffle.title}
                        lot={raffle.lot}
                        image={raffle.image}
                    />
                ))}
            </SliderItem>
        </div>
    );
};

export default ActiveRaffles;