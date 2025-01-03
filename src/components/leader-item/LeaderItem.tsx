import React, { FC } from 'react';
import { LeaderProps } from "@/types/leader";
import styles from "./LeaderItem.module.scss";
import rainCoin from "../../../public/rain-coin.png";
import bigCoin from "../../../public/big-coin.png";
import csgoroll from "../../../public/csgoroll.png";
import duelGP from "../../../public/duelgp-coinnew.png";
import csgotakecoin from "../../../public/csgostakecoin.png";
import Image from "next/image";
import { useLeaderboard } from "@/utils/LeaderboardContext";

const LeaderItem: FC<LeaderProps> = ({ name, xp, prize, count }) => {
    const { selectedAlt } = useLeaderboard();

    const getIcon = (type: 'xp' | 'prize') => {
        switch (selectedAlt) {
            case "CsgostakeLeaderboard":
                return type === 'xp' ? <Image src={csgotakecoin} alt="coin" width={20} height={19} /> : <Image src={csgotakecoin} alt="coin" width={20} height={19} />;
            case "RoobetLeaderboard":
                return type === 'xp' ? "$" : "$";
            case "EmpireDropLeaderboard":
                return type === 'xp' ? "€" : "€";
            case "CsgobigLeaderboard":
                return type === 'xp' ? <Image src={bigCoin} alt="coin" width={25} height={25} /> : <Image src={bigCoin} alt="coin" width={25} height={25} />;
            case "CsgobigDepositLeaderboard":
                return type === 'xp' ? <Image src={bigCoin} alt="coin" width={20} height={19} /> : <Image src={bigCoin} alt="coin" width={20} height={19} />;
            case "RainLeaderboard":
                return type === 'xp' ? <Image src={rainCoin} alt="coin" width={20} height={19} /> : <Image src={rainCoin} alt="coin" width={20} height={19} />;
            case "DuelGpLeaderboard":
                return type === 'xp' ? <Image src={duelGP} alt="coin" width={20} height={19} /> : <Image src={duelGP} alt="coin" width={20} height={19} />;
            case "CsgorollLeaderboard":
                return type === 'xp' ? <Image src={csgoroll} alt="coin" width={20} height={19} /> : <Image src={csgoroll} alt="coin" width={20} height={19} />;
            default:
                return type === 'xp' ? "$" : "$";
        }
    };

    /*const formatPrize = (prize: string | number | undefined) => {
        let formattedPrize = typeof prize === 'string' ? parseFloat(prize) : prize ?? 0;
        if (selectedAlt === "EmpireDropLeaderboard") {
            formattedPrize /= 100;
        }
        return formattedPrize;
    };*/

    return (
        <div className={styles.leaderItem}>
            <div className={styles.leaderItemCredentials}>
                <p>{count}</p>
                <p>{name}</p>
            </div>
            <p className={styles.leaderItemXP}>
                {getIcon('xp')}
                {(selectedAlt === "EmpireDropLeaderboard" ? xp / 100 : xp).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}
            </p>
            <h3>
                {getIcon('prize')}
                {(prize).toLocaleString('de-DE')}
            </h3>
        </div>
    );
};

export default LeaderItem;