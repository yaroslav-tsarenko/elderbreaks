"use client";

import React, { useState } from 'react';
import styles from "./Leaders.module.scss";
import Title from "@/components/title/Title";
import Button from "@/components/button/Button";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LeaderItem from "@/components/leader-item/LeaderItem";
import { leaders } from "@/mockup-data/leaders";

const Leaders = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <Title h2="other" span="leaders"/>
            <div className={styles.leaderWrapper}>
                <div className={styles.leaders}>
                    <div className={styles.tableLore}>
                        <span>
                            <p>#</p>
                            <p>Name</p>
                        </span>
                        <span>XP Wagered</span>
                        <span>Prize</span>
                    </div>
                    <div className={styles.leadersContent}>
                        {leaders.slice(0, showAll ? leaders.length : 10).map((leader, index) => (
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
                </div>
            </div>
            <Button variant="orange" icon={showAll ? FaEyeSlash : FaEye} onClick={handleToggle}>
                {showAll ? 'show less' : 'show more'}
            </Button>
        </>
    );
};

export default Leaders;