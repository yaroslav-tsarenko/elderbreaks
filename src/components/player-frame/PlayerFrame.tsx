import React, { FC } from 'react';
import styles from "./PlayerFrame.module.scss";
import { PlayerFrameProps } from "@/types/player";
import Image from "next/image";

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

    const getRandomPrize = () => {
        const prizes = ["100", "200", "300", "400", "500"];
        const randomIndex = Math.floor(Math.random() * prizes.length);
        return prizes[randomIndex];
    };

    return (
        <div className={className}>
            {avatar ? <Image src={avatar} alt="avatar" className={styles.avatar} width="110" height="110"/> : "none"}
            <h4>{nickname}</h4>
            <div className={styles.playerCredentials}>
                <p>wagered:</p>
                <span>
                    {Math.floor(xp)}
                </span>
            </div>
            <h3>${Math.floor(parseFloat(money)) || getRandomPrize()}</h3>
        </div>
    );
};

export default PlayerFrame;