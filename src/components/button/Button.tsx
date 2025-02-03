import React from 'react';
import { ButtonProps } from '@/types/button';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ icon: Icon, children, variant = 'default', onClick, type }) => {
    return (
        <button onClick={onClick} type={type} className={`${styles.button} ${styles[variant]}`}>
            {Icon ? <Icon className={styles.icon} /> : undefined}
            {children}
        </button>
    );
};

export default Button;