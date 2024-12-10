import React from 'react';
import AdventCalendarSection from "@/sections/advent-calendar/AdventCalendarSection";
import Banners from "@/sections/banner/Banners";
import AdventCalendarContent from "@/components/advent-calendar-content/AdventCalendarContent";

const AdventCalendar = () => {
    return (
        <>
            <AdventCalendarSection/>
            <AdventCalendarContent/>
            <Banners/>
        </>
    );
};

export default AdventCalendar;