import React, { FC } from 'react';
import Link from 'next/link';
import styles from './QuickLinkItem.module.scss';
import {QuickLinkItemProps} from "@/types/quickLinkItem";

const QuickLinkItem: FC<QuickLinkItemProps> = ({ image, link, title }) => {
    return (
        <Link
            href={link}
            className={styles.quickLinkItem}
            style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <span>{title}</span>
        </Link>
    );
};

export default QuickLinkItem;