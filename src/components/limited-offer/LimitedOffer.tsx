import React from 'react';
import Image from "next/image";
import Button from "@/components/button/Button";
import styles from "./LimitedOffer.module.scss";
import fireIcon from "../../../public/assets/images/fire-icon.svg";
import saveIcon from "../../../public/assets/images/save-icon.svg";
import watches from "../../../public/assets/images/watches.png";
import {PiCurrencyDollarSimpleFill} from "react-icons/pi";


const LimitedOffer = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span>
                <Image src={fireIcon} alt="fire-icon" height={16} width={16}/>
                Limited Offer
                </span>
                <Image src={saveIcon} alt="fire-icon" height={24} width={24}/>
            </div>
            <Image src={watches} alt="watches" height={111} width={111}/>
            <div className={styles.description}>
                <h2>Rolex GMT-MASTER II PEPSI </h2>
                <p>
                    <span>4 left</span>
                    / Sold 1 times
                </p>
            </div>
            <Button variant="orange-non-centered-small">
                <span className={styles.dollar}><PiCurrencyDollarSimpleFill/></span>
                696,969
            </Button>
        </div>
    );
};

export default LimitedOffer;