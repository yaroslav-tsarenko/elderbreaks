import React, { FC } from 'react';
import styles from "./AsideNavItem.module.scss";
import { AsideNavItemProps } from "@/types/asideNavItem";
import Link from 'next/link';

const AsideNavItem: FC<AsideNavItemProps> = ({ title, icon: Icon, link }) => {
    return (
        <Link href={link || "#"} className={styles.asideItemLink}>
            {Icon && <Icon className={styles.icon} />}
            <span>{title}</span>
        </Link>
    );
};

export default AsideNavItem;