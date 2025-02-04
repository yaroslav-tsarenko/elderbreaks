import React, { FC } from 'react';
import styles from "./PlayerFrame.module.scss";
import { PlayerFrameProps } from "@/types/player";
import Image from "next/image";
import csgotakecoin from "../../../public/csgostakecoin.png";
import rainCoin from "../../../public/rain-coin.png";
import bigCoin from "../../../public/big-coin.png";
import duelGP from "../../../public/duelgp-coinnew.png";
import csgoroll from "../../../public/csgoroll.png";
import csgogemcoin from "../../../public/csgogemcoin.png";
import { useLeaderboard } from "@/utils/LeaderboardContext";

const PlayerFrame: FC<PlayerFrameProps> = ({ nickname, xp, money, avatar, place }) => {
    let className;
    const { selectedAlt } = useLeaderboard();

    const getIcon = (type: 'xp' | 'prize') => {
        switch (selectedAlt) {
            case "CsgostakeLeaderboard":
                return type === 'xp' ? "$" : <Image src={csgotakecoin} alt="coin" width={20} height={19} />;
            case "RoobetLeaderboard":
                return type === 'xp' ? "$" : "$";
            case "EmpireDropLeaderboard":
                return type === 'xp' ? "€" : "€";
            case "CsgobigLeaderboard":
                return type === 'xp' ? "" : <Image src={bigCoin} alt="coin" width={25} height={25} />;
            case "CsgobigDepositLeaderboard":
                return type === 'xp' ? "" : <Image src={bigCoin} alt="coin" width={20} height={19} />;
            case "RainLeaderboard":
                return type === 'xp' ? "" : <Image src={rainCoin} alt="coin" width={20} height={19} />;
            case "DuelGpLeaderboard":
                return type === 'xp' ? "" : <Image src={duelGP} alt="coin" width={20} height={19} />;
            case "CsgorollLeaderboard":
                return type === 'xp' ? "" : <Image src={csgoroll} alt="coin" width={20} height={19} />;
            case "CsgogemLeaderboard":
                return type === 'xp' ? "" : <Image src={csgogemcoin} alt="coin" width={20} height={19} />;
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

    const getPlaceholder = () => {
        return (
            <p className={styles.noData}>No available data</p>
        );
    };

    return (
        <div className={className}>
            {avatar ? <Image src={avatar} alt="avatar" className={styles.avatar} width="110" height="110" /> : getPlaceholder()}
            <h4>{nickname}</h4>
            <div className={styles.playerCredentials}>
                <p>{selectedAlt === "CsgobigDepositLeaderboard" || selectedAlt === "CsgorollLeaderboard" ? "deposited:" : "wagered:"}</p>
                <span>
                    {getIcon('xp')}
                    {typeof xp === 'number' ? Math.floor(xp) : getPlaceholder()}
                </span>
            </div>
            <h3>
                {getIcon('prize')}
                <span>
                    {typeof money === 'number' ? Math.floor(money) : getPlaceholder()}
                </span>
            </h3>
        </div>
    );
};

export default PlayerFrame;