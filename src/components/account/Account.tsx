"use client";

import React, { useEffect, useState } from 'react';
import styles from "./Account.module.scss";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import Button from "@/components/button/Button";
import {
    FaUser,
    FaCog,
    FaSave,
    FaLink,
    FaSignOutAlt
} from "react-icons/fa";
import { Snackbar, Alert } from '@mui/material';
import { useUser } from '@/utils/UserContext';
import { newRequest } from "@/utils/newRequest";
import { useRouter } from "next/navigation";
import { ADMIN_PANEL_URL, KICK_URL } from "@/constants/url";
import { IoIosCheckmarkCircle, IoIosWarning } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { GiRabbit } from "react-icons/gi";

const AccountComponent = () => {
    const user = useUser();
    const [code, setCode] = useState('');
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copy');
    const [isCopyButtonDisabled, setIsCopyButtonDisabled] = useState(false);
    const [isKickLinked, setIsKickLinked] = useState(user?.statusLink);
    const [isProcessing, setIsProcessing] = useState(false);
    const adminUrl = ADMIN_PANEL_URL;

    const handleSignOut = async () => {
        document.cookie.split(";").forEach((cookie) => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;secure`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname};secure`;
        });

        if (document.domain.includes(".")) {
            const domainParts = document.domain.split(".");
            while (domainParts.length > 1) {
                domainParts.shift();
                const domain = `.${domainParts.join(".")}`;
                document.cookie.split(";").forEach((cookie) => {
                    const eqPos = cookie.indexOf("=");
                    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${domain}`;
                });
            }
        }
        localStorage.clear();
        sessionStorage.clear();
        router.push("/");
    };

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

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
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
                const response = await newRequest.get('/user/statusLink');
                if (response.data.isConfirmed) {
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

    const togglePopup = async () => {
        try {
            const response = await newRequest.post('/user/generateLink');
            setCode(response.data.code);
        } catch (error) {
            console.error('Error fetching link:', error);
        }
        setIsPopupOpen(!isPopupOpen);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());

        const links = [
            { type: "csgogem", value: values["csgogemUsername"] || "" },
            { type: "csgoBig", value: values["csgoBigId"] || "" },
            { type: "rainGg", value: values["rainGgUsername"] || "" },
            { type: "duelGp", value: values["duelGpUsername"] || "" },
            { type: "csgoRoll", value: values["csgoRollUsername"] || "" }
        ].filter(link => link.value);

        try {
            const response = await newRequest.post('/user/add-Link-lb', { links });
            if (response.status === 201) {
                setAlertMessage("Changes saved!");
                setOpen(true);
            }
        } catch (error) {
            console.error('Error saving changes:', error);
            setAlertMessage("Error saving changes!");
            setOpen(true);
        }
    };


    const getStatusIcon = (value: string, status: boolean) => {
        if (value) {
            return status ? <IoIosCheckmarkCircle className={styles.icon} /> : <IoIosWarning className={styles.icon} />;
        }
        return <LiaTimesSolid className={styles.icon} />;
    };

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                    onClose={handleClose}
                    severity="info"
                    sx={{backgroundColor: '#e4571b' }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
            <div className={styles.wrapper}>
                <div className={styles.account}>
                    <div className={styles.user}>
                        <Image src={user.avatarUrl || avatar} className={styles.userAvatar} alt="avatar" height={96}
                               width={96}/>
                        <div className={styles.userCredentials}>
                            <h2>{user.username}
                                <span>{user.role}</span>
                            </h2>
                            <p>Joined at: {user.registerDate}</p>
                        </div>
                    </div>
                    <hr/>
                    <form className={styles.options} onSubmit={handleSubmit}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <GiRabbit className={styles.icon}/>
                                <input type="text"
                                       value={user?.roobetVerify ? "Verified" : 'Not Verified'}
                                       className={styles.formikInput} name="roobetUsername"
                                       placeholder="Roobet Username"/>
                                {getStatusIcon(user?.roobetVerify ? "verified" : "", user?.roobetVerify)}
                            </div>
                            <div className={styles.input}>
                                <FaUser className={styles.icon}/>
                                <input type="text" className={styles.formikInput}
                                       value={user?.CSGOBig.value ? user?.CSGOBig.value : ''}
                                       name="csgoBigId"
                                       placeholder="CSGOBig ID"/>
                                {getStatusIcon(user?.CSGOBig.value, user?.CSGOBig.status)}
                            </div>
                            <div className={styles.input}>
                                <FaUser className={styles.icon}/>
                                <input type="text"
                                       value={user?.Raingg.value ? user?.Raingg.value : ''}
                                       className={styles.formikInput} name="rainGgUsername"
                                       placeholder="Rain.gg Username"/>
                                {getStatusIcon(user?.Raingg.value, user?.Raingg.status)}
                            </div>
                            <div className={styles.input}>
                                <FaUser className={styles.icon}/>
                                <input type="text" className={styles.formikInput}
                                       value={user?.DuelGP.value ? user?.DuelGP.value : ''}
                                       name="duelGpUsername"
                                       placeholder="DuelGP Username"/>
                                {getStatusIcon(user?.DuelGP.value, user?.DuelGP.status)}
                            </div>
                            <div className={styles.input}>
                                <FaUser className={styles.icon}/>
                                <input type="text" className={styles.formikInput}
                                       value={user?.CSGORoll.value ? user?.CSGORoll.value : ''}
                                       name="csgoRollUsername"
                                       placeholder="CSGORoll Username"/>
                                {getStatusIcon(user?.CSGORoll.value, user?.CSGORoll.status)}
                            </div>
                        </div>
                        <div className={styles.optionButtons}>
                            <button className={styles.outlinedSmall} type="submit">
                                <FaSave className={styles.icon}/>SAVE CHANGES
                            </button>
                            {isProcessing ? (
                                <p>Processing...</p>
                            ) : isKickLinked ? (
                                <Button variant="blue-small" icon={FaLink}>{user.kick_username}</Button>
                            ) : (
                                <Button variant="blue-small" icon={FaLink} onClick={togglePopup}>LINK KICK</Button>
                            )}
                            <Button variant="outlined-small" icon={FaSignOutAlt} onClick={() => handleSignOut()}>SIGN
                                OUT</Button>
                        </div>
                    </form>
                    <hr/>
                    {(user.role === "admin" || user.role === "editor") && (
                        <Button variant="orange" icon={FaCog} onClick={() => handleNav(adminUrl || '')}>Admin
                            Panel</Button>
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
        </>
    );
};

export default AccountComponent;