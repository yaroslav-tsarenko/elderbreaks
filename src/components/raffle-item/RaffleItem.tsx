"use client";

import React, { FC } from 'react';
import styles from "./RaffleItem.module.scss";
import { RaffleItemProps } from "@/types/raffleItem";
import Image from "next/image";
import Button from "@/components/button/Button";
import winnerBadge from "../../../public/winner-badge-png.png"
import Link from "next/link";

const RaffleItem: FC<RaffleItemProps> = ({ data, title, lot, type, winnerName, winnerAvatar, image }) => {
    return (
        <Link className={styles.raffleItem} href="/raffles-item">
            <div className={styles.raffleItemContent}>
                <Image src={image.src} alt={"Raffle Item"} width={153} height={157} />
                <p>{data}</p>
            </div>
            <div className={styles.raffleItemContent}>
                <h3>{title}</h3>
                <span>{lot}</span>
                {type === "winner" ? (
                    <div className={styles.winnerBadge}>
                        {winnerAvatar ? <Image src={winnerAvatar} alt={"Winner Avatar"} width={50} height={50} /> : null}
                        <p>{winnerName}</p>
                        <Image src={winnerBadge} className={styles.winnerBadgeIcon} alt={"Winner Badge"} width={70} height={18}  />
                    </div>
                ) : (
                    <Button variant="orange-small">join</Button>
                )}
            </div>
        </Link>
    );
};

export default RaffleItem;