import React, { FC } from 'react';
import { PlayerFrameProps } from "@/types/playerFrame";
import styles from "./PlayerFrame.module.scss";

const PlayerFrame: FC<PlayerFrameProps> = ({ nickname, xp, money, avatar, place }) => {
    let className;

    switch (place) {
        case 1:
            className = styles.firstPlace;
            break;
        case 2:
            className = styles.secondPlace;
            break;
        case 3:
            className = styles.defaultPlace;
            break;
        default:
            className = styles.defaultPlace;
            break;
    }

    return (
        <div className={className}>
            {avatar ? <img src={avatar.src} alt={"avatar"} className={styles.avatar} width="110" height="110"/> : "none" }
            <h4>{nickname}</h4>
            <div className={styles.playerCredentials}>
                <p>xp wagered:</p>
                <span>
                    <p className={styles.xp}>xp</p>
                    {xp}
                </span>
            </div>
            <h3>{money}</h3>
        </div>
    );
};

export default PlayerFrame;