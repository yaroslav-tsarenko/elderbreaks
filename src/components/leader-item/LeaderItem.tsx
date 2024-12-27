import React, { FC } from 'react';
import { LeaderProps } from "@/types/leader";
import styles from "./LeaderItem.module.scss";

const LeaderItem: FC<LeaderProps> = ({ name, xp, prize, count }) => {
    return (
        <div className={styles.leaderItem}>
            <div className={styles.leaderItemCredentials}>
                <p>{count}</p>
                <p>{name}</p>
            </div>
            <div className={styles.leaderItemXP}>
                <p><span></span>{xp.toLocaleString('de-DE')}</p>
            </div>
            <h3>$ {prize.toLocaleString('de-DE')}</h3>
        </div>
    );
};

export default LeaderItem;