import React, {FC} from 'react';
import styles from "./PlayerFrame.module.scss";
import {PlayerFrameProps} from "@/types/player";
import Image from "next/image";
import csgotakecoin from "../../../public/csgostakecoin.png";
import rainCoin from "../../../public/rain-coin.png";
import bigCoin from "../../../public/big-coin.png";
import duelGP from "../../../public/duelgp-coinnew.png";
import csgoroll from "../../../public/csgoroll.png";
import {useLeaderboard} from "@/utils/LeaderboardContext";

const PlayerFrame: FC<PlayerFrameProps> = ({nickname, xp, money, avatar, place}) => {
    let className;
    const {selectedAlt} = useLeaderboard();

    const getIcon = (type: 'xp' | 'prize') => {
        switch (selectedAlt) {
            case "CsgostakeLeaderboard":
                return type === 'xp' ?  "$" : <Image src={csgotakecoin} alt="coin" width={20} height={19}/>;
            case "RoobetLeaderboard":
                return type === 'xp' ? "$" : "$";
            case "EmpireDropLeaderboard":
                return type === 'xp' ? "€" : "€";
            case "CsgobigLeaderboard":
                return type === 'xp' ? "" :
                    <Image src={bigCoin} alt="coin" width={25} height={25}/>;
            case "CsgobigDepositLeaderboard":
                return type === 'xp' ?  "" :
                    <Image src={bigCoin} alt="coin" width={20} height={19}/>;
            case "RainLeaderboard":
                return type === 'xp' ?  "" :
                    <Image src={rainCoin} alt="coin" width={20} height={19}/>;
            case "DuelGpLeaderboard":
                return type === 'xp' ? "" :
                    <Image src={duelGP} alt="coin" width={20} height={19}/>;
            case "CsgorollLeaderboard":
                return type === 'xp' ?  "" : <Image src={csgoroll} alt="coin" width={20} height={19}/>;
            default:
                return type === 'xp' ? "$" : "$";
        }
    };
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
                <p>deposited:</p>
                <span>
                    {getIcon('xp')}
                    {Math.floor(xp)}
                </span>
            </div>
            <h3>
                {getIcon('prize')}
                <span>
                {Math.floor(parseFloat(money)) || getRandomPrize()}
                </span>
            </h3>
        </div>
    );
};

export default PlayerFrame;