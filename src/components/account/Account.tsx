"use client";

import React, { useEffect, useState } from 'react';
import styles from "./Account.module.scss";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import Button from "@/components/button/Button";
import { FaBitcoin, FaEthereum, FaUser, FaCube, FaCog, FaSave, FaLink } from "react-icons/fa";
import { useUser } from '@/utils/UserContext';
import { useRouter } from "next/navigation";
import { newRequest } from "@/utils/newRequest";

const AccountComponent = () => {
    const router = useRouter();
    const user = useUser();
    const [code, setCode] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copy');
    const [isCopyButtonDisabled, setIsCopyButtonDisabled] = useState(false);
    const [isKickLinked, setIsKickLinked] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`!link ${code}`).then(() => {
            setCopyButtonText('Copied!');
            setIsCopyButtonDisabled(true);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    useEffect(() => {
        if (!user) {
            const timer = setTimeout(() => {
                window.location.reload();
            }, 1000);
            return () => clearTimeout(timer);
        }
        const checkLinkStatus = async () => {
            try {
                const response = await newRequest.get('/user/check-link-status');
                setIsKickLinked(response.data);
            } catch (error) {
                console.error('Error checking link status:', error);
            }
        };

        checkLinkStatus();
    }, [user]);

    if (!user) {
        return <div className={styles.loading}>Loading...</div>;
    }

    const handleAlert = (string: string) => {
        alert(string)
    }

    const handleNav = (path: string) => {
        router.push(path);
    }

    const currentDate = new Date().toLocaleDateString();

    const togglePopup = async () => {
        try {
            const response = await newRequest.post('/user/generateLink');
            console.log('Response data:', response.data);
            setCode(response.data.code);
        } catch (error) {
            console.error('Error fetching link:', error);
        }
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.account}>
                <div className={styles.user}>
                    <Image src={avatar} alt="avatar" height={96} width={96} />
                    <div className={styles.userCredentials}>
                        <h2>{user.username}
                            <span>Admin</span>
                        </h2>
                        <p>Joined at: {currentDate}</p>
                    </div>
                </div>
                <hr />
                <div className={styles.options}>
                    <div className={styles.inputs}>
                        <div className={styles.input}>
                            <FaEthereum className={styles.icon} />
                            <input type="text" placeholder="ETH Address" />
                        </div>
                        <div className={styles.input}>
                            <FaBitcoin className={styles.icon} />
                            <input type="text" placeholder="BTC Address" />
                        </div>
                        <div className={styles.input}>
                            <FaUser className={styles.icon} />
                            <input type="text" placeholder="Username" value={user.username} />
                        </div>
                        <div className={styles.input}>
                            <FaCube className={styles.icon} />
                            <input type="text" placeholder="Stake Username" />
                        </div>
                    </div>
                    <div className={styles.optionButtons}>
                        <Button variant="outlined-small" icon={FaSave} onClick={() => handleAlert("Changes save!")}>SAVE
                            CHANGES</Button>
                        {isKickLinked ? (
                            <p>Kick linked to your account</p>
                        ) : (
                            <Button variant="blue-small" icon={FaLink} onClick={togglePopup}>LINK KICK</Button>
                        )}
                    </div>
                </div>
                <hr />
                <Button variant="orange" icon={FaCog}>Admin Panel</Button>
            </div>
            {isPopupOpen && (
                <div className={styles.overlay}>
                    <div className={styles.popup}>
                        <div className={styles.headerButton}>
                            <h2>Verify Kick Account</h2>
                            <Button variant="outlined" onClick={togglePopup}>Close</Button>
                        </div>
                        <div className={styles.popupContent}>
                            <p>To verify your Kick account, copy the command below and paste it in elderbreak&apos;s
                                Kick chat:</p>
                            <div className={styles.popupInput}>
                                <p>!link {code}</p>
                                <button className={styles.copyButton} onClick={handleCopy}
                                        disabled={isCopyButtonDisabled}>{copyButtonText}</button>
                            </div>
                            <Button variant="outlined" onClick={() => handleNav("https://kick.com/elderbreaks")}>
                                Go to Elder&apos;s Chat
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountComponent;