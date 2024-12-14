import React, { FC } from 'react';
import { TitleProps } from "@/types/title";
import styles from "./Title.module.scss";

const Title: FC<TitleProps> = ({ h2, span, column }) => {
    return (
        <div className={`${styles.title} ${column ? styles.column : ''}`}>
            <h2>
                {h2}
                <span>{span}</span>
            </h2>
            <hr />
        </div>
    );
};

export default Title;