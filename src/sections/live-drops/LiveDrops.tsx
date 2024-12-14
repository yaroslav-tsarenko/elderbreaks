"use client";

import React from 'react';
import Title from "@/components/title/Title";
import styles from "./LiveDrops.module.scss";
import { drops } from "@/utils/drops";
import DropItem from "@/components/dropItem/DropItem";
import SliderItem from "@/components/slider-item/SliderItem";

const LiveDrops = () => {
    return (
        <div className={styles.liveDrops}>
            <Title h2="live" span="drops"/>
            <div className={styles.liveDropsContent}>
                {drops.map((drop, index) => (
                    <DropItem
                        key={index}
                        price={drop.price}
                        title={drop.title}
                        description={drop.description}
                        added={drop.added}
                    />
                ))}
            </div>
            <SliderItem slidesToShow={2}>
                {drops.map((drop, index) => (
                    <DropItem
                        key={index}
                        price={drop.price}
                        title={drop.title}
                        description={drop.description}
                        added={drop.added}
                    />
                ))}
            </SliderItem>
        </div>
    );
};

export default LiveDrops;