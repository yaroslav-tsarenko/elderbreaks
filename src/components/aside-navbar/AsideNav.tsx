"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/assets/icons/elderbreaks-logo.svg";
import Image from "next/image";
import styles from "./AsideNav.module.scss";
import { links } from "@/utils/links";
import AsideNavItem from "@/components/aside-nav-item/AsideNavItem";

const AsideNav = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <aside className={styles.aside}>
            <div
                className={`${styles.asideSticky} ${
                    isSticky ? styles.isSticky : ""
                }`}
            >
                <Image
                    src={Logo}
                    alt="Logo"
                    width="172"
                    height="42"
                    className={styles.logo}
                />
                <div className={styles.asideNav}>
                    {links.map((link, index) => (
                        <AsideNavItem
                            key={index}
                            title={link.title}
                            icon={link.icon}
                            link={link.link}
                        />
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default AsideNav;
