"use client";

import React, { useEffect, useState } from 'react';
import styles from "./Account.module.scss";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import Button from "@/components/button/Button";
import { FaBitcoin, FaEthereum, FaUser, FaCog, FaSave, FaLink } from "react-icons/fa";
import { useUser } from '@/utils/UserContext';
import { newRequest } from "@/utils/newRequest";
import {useRouter} from "next/navigation";
import { SiLitecoin } from "react-icons/si";
import { FaSignOutAlt } from "react-icons/fa";
import {ADMIN_PANEL_URL, KICK_URL} from "@/constants/url";

const AccountComponent = () => {
    const user = useUser();
    const [code, setCode] = useState('');
    const router = useRouter();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copy');
    const [isCopyButtonDisabled, setIsCopyButtonDisabled] = useState(false);
    const [isKickLinked, setIsKickLinked] = useState(user?.statusLink);
    const [isProcessing, setIsProcessing] = useState(false);
    const adminUrl = ADMIN_PANEL_URL;

    const handleSignOut = async () => {
        document.cookie.split(";").forEach((cookie) => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        });
        localStorage.clear();
        sessionStorage.clear();
        router.push('/');
    };

    console.log('Admin URL:', adminUrl);

    const handleCopy = () => {
        navigator.clipboard.writeText(`!link ${code}`).then(() => {
            setCopyButtonText('Copied!');
            setIsCopyButtonDisabled(true);
            setTimeout(() => {
                setIsProcessing(true);
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleNav = (str: string) => {
        router.push(str)
    }

    useEffect(() => {
        if (!user) {
            const timer = setTimeout(() => {
                window.location.reload();
            }, 1000);
            return () => clearTimeout(timer);
        }

        const checkLinkStatus = async () => {
            try {
                const response = await newRequest.get('/user/statusLink');
                if (response.data.isConfirmed) {
                    console.log("Response link:", response.data);
                    setIsKickLinked(user.statusLink);
                    setIsProcessing(false);
                    window.location.reload();
                }
            } catch (error) {
                console.error('Error checking link status:', error);
            }
        };

        const interval = setInterval(() => {
            if (isProcessing) {
                checkLinkStatus();
            }
        }, 1000);

        checkLinkStatus();

        return () => clearInterval(interval);
    }, [user, isProcessing]);

    if (!user) {
        return <div className={styles.loading}>Loading...</div>;
    }

    const handleAlert = (string: string) => {
        alert(string);
    }

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
                    <Image src={user.avatarUrl || avatar} className={styles.userAvatar} alt="avatar" height={96} width={96} />
                    <div className={styles.userCredentials}>
                        <h2>{user.username}
                            <span>{user.role}</span>
                        </h2>
                        <p>Joined at: {user.registerDate}</p>
                    </div>
                </div>
                <hr />
                <div className={styles.options}>
                    <div className={styles.inputs}>
                        <div className={styles.input}>
                            <SiLitecoin className={styles.icon}/>
                            <input type="text" placeholder="LTC Address"/>
                        </div>
                        <div className={styles.input}>
                            <FaEthereum className={styles.icon}/>
                            <input type="text" placeholder="ETH Address"/>
                        </div>
                        <div className={styles.input}>
                            <FaBitcoin className={styles.icon}/>
                            <input type="text" placeholder="BTC Address"/>
                        </div>
                        <div className={styles.input}>
                            <FaUser className={styles.icon}/>
                            <input type="text" placeholder="Username" value={user.username}/>
                        </div>
                    </div>
                    <div className={styles.optionButtons}>
                        <Button variant="outlined-small" icon={FaSave} onClick={() => handleAlert("Changes saved!")}>SAVE
                            CHANGES</Button>
                        {isProcessing ? (
                            <p>Processing...</p>
                        ) : isKickLinked ? (
                            <Button variant="blue-small" icon={FaLink}>{user.username}</Button>
                        ) : (
                            <Button variant="blue-small" icon={FaLink} onClick={togglePopup}>LINK KICK</Button>
                        )}
                        <Button variant="outlined-small" icon={FaSignOutAlt} onClick={() => handleSignOut()}>SIGN OUT</Button>
                    </div>
                </div>
                <hr />
                {user.role === "admin" && (
                    <Button variant="orange" icon={FaCog} onClick={() => handleNav(adminUrl || '')}>Admin Panel</Button>
                )}
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
                            <Button variant="outlined" onClick={() => window.open(KICK_URL, "_blank")}>
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