"use client"

import React from 'react';
import styles from './LoginButton.module.scss';
import Button from "@/components/button/Button";
import { FaSignInAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useUser } from "@/utils/UserContext";
import Image from "next/image";
import wager from "../../../public/eldercoin.png";
import avatar from "../../../public/avatar.png";
import Link from "next/link";
import {DISCORD_AUTH} from "@/constants/url";

const LoginButton = () => {
    const router = useRouter();
    const  user  = useUser();

    const handleLogin = () => {
        router.push(DISCORD_AUTH);
    }

    if (user) {
        return (
            <Link href="/account" className={styles.accountItem}>
                <Image src={user.avatarUrl || avatar} alt="Avatar" width={54} height={54} className={styles.avatar}/>
                <div className={styles.accountItemCredentials}>
                    <p>{user.username}</p>
                    <div className={styles.accountWallet}>
                        <Image src={wager} alt="wager" width={24} height={24}/>
                        {user.points}
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <div className={styles.loginButton}>
            <Button variant="outlined" onClick={handleLogin} icon={FaSignInAlt}>Login</Button>
        </div>
    );
};

export default LoginButton;