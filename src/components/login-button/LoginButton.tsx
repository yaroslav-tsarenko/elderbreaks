import React from 'react';
import styles from './LoginButton.module.scss';
import Button from "@/components/button/Button";
import { FaSignInAlt } from "react-icons/fa";

const LoginButton = () => {
    return (
        <div className={styles.loginButton}>
            <Button variant="outlined" icon={FaSignInAlt}>Login</Button>
        </div>
    );
};

export default LoginButton;