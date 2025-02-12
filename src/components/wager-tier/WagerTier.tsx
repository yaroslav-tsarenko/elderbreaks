import React from 'react';
import styles from './WagerTier.module.scss';
import Image from 'next/image';
import elderCopper from '../../../public/elder-bronze.png';
import elderAluminum from '../../../public/elder-aluminium.png';
import elderTin from '../../../public/elder-tin.png';
import elderIron from '../../../public/elder-iron.png';
import elderGold from '../../../public/elder-gold.png';
import elderPlatinum from '../../../public/elder-platinum.png';
import elderDiamond from '../../../public/elder-diamond.png';
import elderWhiteGold from '../../../public/elder-white-gold.png';
import elderKingMuppet from '../../../public/elder-king-muppet.png';
import {WagerTierProps} from "@/types/wagerTier";

const WagerTier: React.FC<WagerTierProps> = ({tier}) => {
    const getImageSrc = (tier: string) => {
        switch (tier) {
            case 'Copper':
                return elderCopper;
            case 'Aluminum':
                return elderAluminum;
            case 'Tin':
                return elderTin;
            case 'Iron':
                return elderIron;
            case 'Gold':
                return elderGold;
            case 'Platinum':
                return elderPlatinum;
            case 'Diamond':
                return elderDiamond;
            case 'White Gold':
                return elderWhiteGold;
            case 'King Muppet':
                return elderKingMuppet;
            default:
                return elderCopper;
        }
    };


    return (
        <>
            {tier ? <Image src={getImageSrc(tier)} className={styles.wagerTier} alt={`wager-${tier}`} width={44} height={44}/> : null}
        </>
    );
};

export default WagerTier;