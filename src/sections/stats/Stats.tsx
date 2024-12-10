import React from 'react';
import styles from "./Stats.module.scss";
import { stats } from "@/utils/stats";
import StatItem from "@/components/statistics-item/StatItem";

const Stats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.statsContent}>
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        image={stat.image}
                        value={stat.value}
                        description={stat.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stats;