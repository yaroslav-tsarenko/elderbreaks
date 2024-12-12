"use client";

import React, { useState } from 'react';
import styles from './CalendarItem.module.scss';
import gamdom from "../../../public/gamdom-png.png";
import Image from "next/image";
import {CalendarItemProps} from "@/types/calendarItemProps";

const CalendarItem: React.FC<CalendarItemProps> = ({ number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleClick = () => setIsOpen(true);

    return (
        <div
            className={styles.calendarItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {!isOpen ? (
                <>
                    {isHovered ? (
                        <div className={styles.calendarHovered}></div>
                    ) : (
                        <div className={styles.calendarCover}>{number}</div>
                    )}
                </>
            ) : (
                <div className={styles.openContent}>
                    <Image src={gamdom} alt="Gamdom" width={64} height={64}/>
                    <h2>GAMDOM BDAY!!!</h2>
                    <p>Not Claimed</p>
                </div>
            )}
        </div>
    );
};

export default CalendarItem;