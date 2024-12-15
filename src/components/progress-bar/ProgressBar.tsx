import React from 'react';
import styles from './ProgressBar.module.scss';
import {ProgressBarProps} from "@/types/progressBarProps";

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    return (
        <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;