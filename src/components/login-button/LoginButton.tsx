"use client"

import React from 'react';
import styles from './LoginButton.module.scss';
import Button from "@/components/button/Button";
import { FaSignInAlt } from "react-icons/fa";
import {useRouter} from "next/navigation";

const LoginButton = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('https://discord.com/oauth2/authorize?client_id=1312902353510203432&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8800%2Fauth%2Fdiscord&scope=email+identify+openid');
    }

    return (
        <div className={styles.loginButton}>
                <Button variant="outlined" onClick={handleLogin} icon={FaSignInAlt}>Login</Button>
        </div>
    );
};

export default LoginButton;