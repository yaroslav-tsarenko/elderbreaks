"use client";

import React, { FC } from "react";
import styles from "./FAQItem.module.scss";
import { FAQItemProps } from "@/types/faq";
import triangleIcon from "../../../public/assets/images/triangle.svg";

const FAQItem: FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <button className={styles.faqItem} onClick={onClick}>
            <div className={styles.faqQuestion}>
                <h2>
                    {question}
                </h2>
                <img
                    src={triangleIcon}
                    alt="Expand/Collapse"
                    className={`${styles.icon} ${isOpen ? styles.open : ""}`}
                />
            </div>
            <ol className={`${styles.faqAnswer} ${isOpen ? styles.open : ""}`} type="1">
                {answer.split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                ))}
            </ol>
        </button>
    );
};

export default FAQItem;