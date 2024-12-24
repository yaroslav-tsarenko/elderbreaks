import React from 'react';
import styles from './AdventCalendarContent.module.scss';
import CalendarItem from "@/components/calendar-item/CalendarItem";
import { calendarRewards } from "@/mockup-data/calendarRewards";

const AdventCalendarContent = () => {
    return (
        <div className={styles.grid}>
            {calendarRewards.map((reward, index) => (
                <CalendarItem
                    key={index}
                    number={index + 1}
                    image={reward.image.src}
                    title={reward.title}
                    status={reward.status}
                />
            ))}
        </div>
    );
};

export default AdventCalendarContent;