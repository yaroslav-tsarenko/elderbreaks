import React from 'react';
import styles from "./AdventCalendarSection.module.scss";
import CountdownTimer from "@/components/countdown-timer/CountdownTimer";

const AdventCalendarSection = () => {
    const currentDay = new Date().getDate();
    const percentage = (currentDay / 30) * 100;

    return (
        <section className={styles.calendarSection}>
            <div className={styles.calendarHeading}>
                <h3>Advent Calendar</h3>
                <h2>$150,000</h2>
                <h4>to be claimed</h4>
            </div>
            <div className={styles.calendarMetrics}>
                <div className={styles.calendarSectionBlock}>
                    <p>The Calendar Updates in</p>
                    <CountdownTimer preference="calendar" />
                </div>
                <div className={styles.calendarSectionBlock}>
                    <p>Current Day</p>
                    <div className={styles.circleProgress}>
                        <svg className={styles.progressCircle} viewBox="0 0 36 36">
                            <path
                                className={styles.circleBorder}
                                d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className={styles.circleBg}
                                d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className={styles.circle}
                                strokeDasharray={`${percentage}, 100`}
                                d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" className={styles.circleText}>{currentDay}</text>
                        </svg>
                    </div>
                </div>
                <div className={styles.calendarSectionBlock}>
                    <p>Your streak</p>
                    <div className={styles.circleStreak}>
                        <span>0</span>/30
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdventCalendarSection;