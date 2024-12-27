"use client";

import React, {useEffect, useState} from 'react';
import styles from './CountdownTimer.module.scss';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    startDate?: Date | null;
    endDate?: Date | null;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({startDate, endDate}) => {
    const [end] = useState<Date>(() => {
        if (endDate) return endDate;
        const randomDays = Math.random() < 0.5 ? 7 : 30;
        return new Date((startDate || new Date()).getTime() + randomDays * 24 * 60 * 60 * 1000);
    });

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = end.getTime() - now.getTime();
        if (difference <= 0) {
            return {days: 0, hours: 0, minutes: 0, seconds: 0};
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [end]);

    return (
        <div className={styles.countdown}>
            <div className={styles.timeContainer}>
                <span>{timeLeft.days}</span>
                <p>D</p>
            </div>
            <div className={styles.timeContainer}>
                <span>{timeLeft.hours}</span>
                <p>H</p>
            </div>
            <div className={styles.timeContainer}>
                <span>{timeLeft.minutes}</span>
                <p>M</p>
            </div>
            <div className={styles.timeContainer}>
                <span>{timeLeft.seconds}</span>
                <p>S</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
