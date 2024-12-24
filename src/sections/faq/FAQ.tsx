"use client";

import React, { FC, useState } from "react";
import styles from "./FAQ.module.scss";
import { faqs } from "@/mockup-data/faq";
import FAQItem from "@/components/faq-item/FAQItem";
import Title from "@/components/title/Title";

const FAQ: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faq}>
         <Title h2="frequently asked" span="questions" column={true}/>
            <div className={styles.faqContainer}>
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={activeIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;