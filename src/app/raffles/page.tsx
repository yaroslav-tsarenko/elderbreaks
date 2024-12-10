import React from 'react';
import RafflesSection from "@/sections/raffles-section/RafflesSection";
import ActiveRaffles from "@/sections/active-raffles/ActiveRaffles";
import EndedRaffles from "@/sections/ended-raffles/EndedRaffles";
import HowItWorks from "@/sections/how-it-works/HowItWorks";

const Raffles = () => {
    return (
        <>
            <RafflesSection/>
            <ActiveRaffles h2="Active" span="Ruffles"/>
            <EndedRaffles/>

        </>
    );
};

export default Raffles;