import React, {FC} from 'react';
import styles from "./StatItem.module.scss";
import {StatItemProps} from "@/types/statItem";
import Image from "next/image";

const StatItem: FC<StatItemProps> = ({image, description, value}) => {
    return (
        <div className={styles.statItem}>
            {image ? <Image src={image} className={styles.image} alt="Image" width={50} height={50}/> : null}
            <h3>{value}</h3>
            <p>{description}</p>
        </div>
    );
};

export default StatItem;