import React from 'react';
import styles from "./ComingSoon.module.scss"
import Title from "@/components/title/Title";

const ComingSoon = () => {
    return (
        <div className={styles.wrapper}>
            <Title h2="Coming" span="Soon"/>
        </div>
    );
};

export default ComingSoon;