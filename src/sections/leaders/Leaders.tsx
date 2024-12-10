"use client";

import React from 'react';
import styles from "./Leaders.module.scss";
import Title from "@/components/title/Title";
import Button from "@/components/button/Button";
import {FaEye} from 'react-icons/fa';
import LeaderItem from "@/components/leader-item/LeaderItem";
import {leaders} from "@/utils/leaders";

const Leaders = () => {
    return (
        <div className={styles.leaders}>
            <Title h2="other" span="leaders"/>
            <div className={styles.tableLore}>
                    <span>
                        <p>#</p>
                        <p>Name</p>
                    </span>
                <span>XP Wagered</span>
                <span>Prize</span>
            </div>
            <div className={styles.leadersContent}>
                {leaders.map((leader, index) => (
                    <LeaderItem
                        key={index}
                        count={index + 1}
                        name={leader.name}
                        xp={leader.xp}
                        money={leader.money}
                        prize={leader.prize}
                    />
                ))}
            </div>
            <Button variant="orange" icon={FaEye}>show more</Button>
        </div>
    );
};

export default Leaders;