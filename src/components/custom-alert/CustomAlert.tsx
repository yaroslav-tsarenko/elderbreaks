import React, {useEffect} from 'react';
import styles from './CustomAlert.module.scss';
import alert from "../../../public/info-icon-png.png"
import Image from "next/image";

type CustomAlertProps = {
    message: string;
    onClose: () => void;
};

const CustomAlert: React.FC<CustomAlertProps> = ({message, onClose}) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={styles.alert}>
            <div className={styles.alertContent}>
                    <Image src={alert} alt="alert" width={75} height={75}/>
                    <span>
                        <h3>Info!</h3>
                        <p>{message}</p>
                    </span>
            </div>
        </div>
    );
};

export default CustomAlert;