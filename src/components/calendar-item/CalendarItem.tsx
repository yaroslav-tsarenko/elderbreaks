"use client";

import React, { useState } from 'react';
import styles from './CalendarItem.module.scss';
import Image from "next/image";

interface CalendarItemProps {
    number: number;
    image: string;
    title: string;
    status: string;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ number, image, title, status }) => {
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
                    <Image src={image} alt={title} width={64} height={64}/>
                    <h2>{title}</h2>
                    <p>{status}</p>
                </div>
            )}
        </div>
    );
};

export default CalendarItem;