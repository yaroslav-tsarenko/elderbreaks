import React, {FC} from 'react';
import {DropItemProps} from "@/types/dropItem";
import styles from "./DropItem.module.scss";

const DropItem: FC<DropItemProps> = ({price, title, description, added}) => {
    return (
        <div className={styles.drop}>
            <h3>${price}<span>{title}</span></h3>
            <div className={styles.description}>
                <p>{description}</p>
                <p>{added}</p>
            </div>
        </div>
    );
};

export default DropItem;