import React, { FC } from 'react';
import styles from "./AsideNavItem.module.scss";
import { AsideNavItemProps } from "@/types/asideNavItem";
import Link from 'next/link';
import {LAST_VIDEO} from "@/constants/url";

const AsideNavItem: FC<AsideNavItemProps> = ({ title, icon: Icon, link }) => {
    const isLastVideoLink = link === LAST_VIDEO;

    return (
        <Link href={link || "#"} className={styles.asideItemLink} target={isLastVideoLink ? "_blank" : "_self"}>
            {Icon && <Icon className={styles.icon} />}
            <span>{title}</span>
        </Link>
    );
};

export default AsideNavItem;