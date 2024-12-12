"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../public/elderbreaks-logo-mobile.png";
import burger from "../../../public/burger-menu-png.png";
import times from "../../../public/times-icon.png";
import { FaSignInAlt } from "react-icons/fa";
import Button from "@/components/button/Button";
import { links } from "@/utils/links";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(true); // Ensure always sticky behavior

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!menuOpen) {
                setIsSticky(window.scrollY > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    return (
        <>
            <header
                className={`${styles.header} ${
                    menuOpen ? styles.fixed : isSticky ? styles.sticky : ""
                }`}
            >
                <Link href={"/"}>
                    <Image
                        src={logo}
                        alt="Image logo"
                        width={138}
                        height={30}
                        className={styles.headerLogo}
                    />
                </Link>
                <hr />
                <div className={styles.headerButtons}>
                    <Button variant="outlined" icon={FaSignInAlt}>
                        Login
                    </Button>
                    <button className={styles.buttonBurger} onClick={toggleMenu}>
                        {menuOpen ? (
                            <Image src={times} alt="times" width={20} height={16} />
                        ) : (
                            <Image src={burger} alt="burger" width={20} height={16} />
                        )}
                    </button>
                </div>
                <div
                    className={`${styles.menu} ${menuOpen ? styles.slideDown : styles.slideUp}`}
                >
                    {links.map((link, index) => (
                        <a key={index} href={link.link} className={styles.menuLink}>
                            <link.icon className={styles.linkIcon} />
                            {link.title}
                        </a>
                    ))}
                </div>
            </header>
        </>
    );
};

export default Header;
