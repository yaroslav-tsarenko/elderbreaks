import React from 'react';
import styles from './AdventCalendarContent.module.scss';
import CalendarItem from "@/components/calendar-item/CalendarItem";

const AdventCalendarContent = () => {
    const calendarItems = Array.from({ length: 30 }, (_, index) => (
        <CalendarItem key={index} number={index + 1} />
    ));

    return (
        <div className={styles.grid}>
            {calendarItems}
        </div>
    );
};

export default AdventCalendarContent;