"use client"

import React from 'react';
import styles from './LoginButton.module.scss';
import Button from "@/components/button/Button";
import { FaSignInAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useUser } from "@/utils/UserContext";
import Image from "next/image";
import wager from "../../../public/wager-icon-png.png";

const LoginButton = () => {
    const router = useRouter();
    const  user  = useUser();

    const handleLogin = () => {
        router.push('https://discord.com/oauth2/authorize?client_id=1312902353510203432&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8800%2Fauth%2Fdiscord&scope=email+identify+openid');
    }

    if (user) {
        return (
            <div className={styles.accountItemCredentials}>
                <p>{user.name}</p>
                <div className={styles.accountWallet}>
                    <Image src={wager} alt="wager" width={24} height={24} />
                    1254
                </div>
            </div>
        );
    }

    return (
        <div className={styles.loginButton}>
            <Button variant="outlined" onClick={handleLogin} icon={FaSignInAlt}>Login</Button>
        </div>
    );
};

export default LoginButton;