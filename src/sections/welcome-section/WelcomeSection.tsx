import React, {useState} from 'react';
import styles from "./WelcomeSection.module.scss";
import Button from "@/components/button/Button";
import GunImage from "../../../public/gun.png";
import GiftImage from "../../../public/gift.png";
import Image from "next/image";
import CustomAlert from "@/components/custom-alert/CustomAlert";

const WelcomeSection = () => {

    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const handleCopyCode = () => {
        navigator.clipboard.writeText("ELDER").then(() => {
            setAlertMessage("Code copied!");
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <section className={styles.welcomeSection}>
            {alertMessage && (
                <CustomAlert message={alertMessage} onClose={() => setAlertMessage(null)}/>
            )}
            <div className={styles.sectionContent}>
                <Image src={GunImage} className={styles.gunImage} alt="Gun Image" width={402} height={351}/>
                <h3>welcome</h3>
                <h1>to elderbreaks</h1>
                <h2>rewards</h2>
                <p>Wager under code ELDER - the most rewarding code out there!</p>
                <Button variant="orange" onClick={handleCopyCode}>Use code ELDER</Button>
            </div>
            <Image className={styles.giftImage} src={GiftImage} alt="Gift Image" width={224} height={226}/>
        </section>
    );
};

export default WelcomeSection;