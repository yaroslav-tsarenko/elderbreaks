import React from 'react';
import styles from './QuickLinks.module.scss';
import { quickLinks } from "@/utils/quickLinks";
import QuickLinkItem from "@/components/quick-link-item/QuickLinkItem";
import Title from "@/components/title/Title";

const QuickLinks = () => {
    return (
        <div className={styles.quickLinks}>
            <Title h2="Quick" span="Links" />
            <div className={styles.quickLinksContent}>
                {quickLinks.map((link, index) => (
                    <QuickLinkItem
                        key={index}
                        image={link.image}
                        link={link.link}
                        title={link.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuickLinks;