import React from 'react';
import RafflesSection from "@/sections/raffles-section/RafflesSection";
import ActiveRaffles from "@/sections/active-raffles/ActiveRaffles";
import EndedRaffles from "@/sections/ended-raffles/EndedRaffles";

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