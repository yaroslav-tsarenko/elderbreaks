import React from 'react';
import WagerTier from "@/components/wager-tier/WagerTier";
import styles from "./WagerTierInfo.module.scss"

interface WagerTierInfoProps {
    tier: string;
    title: string;
    description: string;
}

const WagerTierInfo: React.FC<WagerTierInfoProps> = ({tier, title, description}) => {
    return (
        <>
            {tier === "No Rank" ?
                <div className={styles.noRank}>
                    No Rank
                </div>
                :
                <div className={styles.wrapper}>
                    <WagerTier tier={tier}/>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            }
        </>

    );
};

export default WagerTierInfo;