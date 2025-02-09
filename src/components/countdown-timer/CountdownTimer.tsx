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
    startDate?: Date | null;
    endDate?: Date | null;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ startDate, endDate }) => {
    const [end, setEnd] = useState<Date | null>(endDate || null);

    useEffect(() => {
        if (endDate) {
            setEnd(endDate);
        } else if (startDate) {
            const randomDays = Math.random() < 0.5 ? 7 : 30;
            setEnd(new Date(startDate.getTime() + randomDays * 24 * 60 * 60 * 1000));
        }
    }, [startDate, endDate]);

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = (end ? end.getTime() : 0) - now.getTime();
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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

        return () => clearInterval(timer);
    }, [end]);

    if (!end) {
        return <div className={styles.countdownText}>Next leaderboard starts soon</div>;
    }

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