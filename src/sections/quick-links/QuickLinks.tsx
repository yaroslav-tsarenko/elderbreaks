import React from 'react';
import styles from './QuickLinks.module.scss';
import Grid from "@/components/grid/Grid";
import { quickLinks } from "@/utils/quickLinks";
import QuickLinkItem from "@/components/quick-link-item/QuickLinkItem";

const QuickLinks = () => {
    return (
        <div className={styles.quickLinks}>
            <h2>Quick<span>Links</span></h2>
            <hr/>
            <Grid columns={"3, 2fr"}>
                {quickLinks.map((link, index) => (
                    <QuickLinkItem
                        key={index}
                        image={link.image}
                        link={link.link}
                        title={link.title}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default QuickLinks;