"use client";

import React, {useState} from 'react';
import styles from "./ItemRaffle.module.scss"
import Image from "next/image";
import knife from "@/assets/images/knife.svg"
import progressbar from "@/assets/images/progressbar.svg"
import Button from "@/components/button/Button";
import {FaSignInAlt} from "react-icons/fa";
import HowItWorks from "@/sections/how-it-works/HowItWorks";
import ActiveRaffles from "@/sections/active-raffles/ActiveRaffles";

const ItemRaffle = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value >= 1 ? value : 1);
    };
    return (
        <div className={styles.itemRaffle}>
            <div className={styles.sectionHeader}>
                <Button variant="outlined" icon={FaSignInAlt}>Login</Button>
            </div>
            <div className={styles.itemRaffleInner}>
                <div className={styles.imageRaffleContainer}>
                    <Image src={knife} alt="knife" width={370} height={278}/>
                </div>
                <div className={styles.itemRaffleDescription}>
                    <h2>Knife Repper fade</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                        gravida
                        dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                        Sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
                        luctus
                        pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
                    <div className={styles.prices}>
                        <div className={styles.priceField}>
                            <h4>Prize value:</h4>
                            <span>$ 1000</span>
                        </div>
                        <div className={styles.priceField}>
                            <h4>Single ticket price:</h4>
                            <span>$ 10</span>
                        </div>
                        <div className={styles.priceField}>
                            <h4>Draw date:</h4>
                            <span>02.03.2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.maxTickets}>
                <hr/>
                <div className={styles.ticketsProgress}>
                    <div className={styles.ticketInfo}>
                        <p>Tickets left:</p>
                        <h4>5000</h4>
                    </div>
                    <Image src={progressbar} className={styles.progress} alt="progress" width={725} height={27}/>
                    <div className={styles.ticketInfo}>
                        <p>Max tickets:</p>
                        <h4>10000</h4>
                    </div>
                </div>
                <hr/>
            </div>
            <div className={styles.drawing}>
                <div className={styles.drawingInfo}>
                    <p>The drawing will be in:</p>
                    <span>90:45:34</span>
                </div>
                <div className={styles.quantitySelector}>
                    <button onClick={handleDecrease}>-</button>
                    <input type="number" value={quantity} onChange={handleChange} min="1"/>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <Button variant="orange-non-centered">Pay now $120</Button>
            </div>
            <ActiveRaffles h2="you may" span="also like"/>
            <HowItWorks style="2"/>
        </div>
    );
};

export default ItemRaffle;