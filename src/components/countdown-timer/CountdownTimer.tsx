"use client";

import React, { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.scss';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    preference?: 'default' | 'calendar';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ preference = 'default' }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date('2024-12-31T00:00:00') - +new Date();
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.min(7, Math.floor(difference / (1000 * 60 * 60 * 24))),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className={styles.countdown}>
            {preference === 'default' && (
                <div className={styles.timeContainer}>
                    <span>{timeLeft.days}</span>
                    <p>D</p>
                </div>
            )}
            <div className={`${styles.timeContainer} ${preference === 'calendar' && styles.active}`}>
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