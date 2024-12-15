import React from 'react';
import styles from './WagerTier.module.scss';
import Image from 'next/image';
import wagerWood from '../../../public/wager-wood.png';
import wagerBronze from '../../../public/wager-bronze.png';
import {WagerTierProps} from "@/types/wagerTier";

const WagerTier: React.FC<WagerTierProps> = ({tier}) => {
    const getImageSrc = (tier: string) => {
        switch (tier.toLowerCase()) {
            case 'wood':
                return wagerWood;
            case 'bronze':
                return wagerBronze;
            default:
                return wagerWood;
        }
    };

    return (
        <Image src={getImageSrc(tier)} className={styles.wagerTier} alt={`wager-${tier}`} width={44} height={44}/>
    );
};

export default WagerTier;