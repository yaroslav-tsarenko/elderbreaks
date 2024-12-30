"use client";

import React, {useState, useEffect} from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../public/elderbreaks-logo-mobile.png";
import burger from "../../../public/burger-menu-png.png";
import times from "../../../public/times-icon.png";
import avatar from "../../../public/avatar.png";
import {FaSignInAlt} from "react-icons/fa";
import Button from "@/components/button/Button";
import {links} from "@/mockup-data/links";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useUser} from "@/utils/UserContext";
import wager from "../../../public/eldercoin.png";
import {DISCORD_AUTH} from "@/constants/url";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(true);
    const [isFixed, setIsFixed] = useState(false);
    const router = useRouter();
    const user = useUser();
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleLogin = () => {
        router.push(DISCORD_AUTH);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const bottomPosition = document.documentElement.scrollHeight - 100;

            if (!menuOpen) {
                if (scrollPosition >= bottomPosition) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                    setIsSticky(window.scrollY > 0);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            document.querySelector("footer")!.style.display = "none";
        } else {
            document.querySelector("footer")!.style.display = "block";
        }
    }, [menuOpen]);

    return (
        <>
            <header
                className={`${styles.header} ${
                    menuOpen ? styles.fixed : isFixed ? styles.fixed : isSticky ? styles.sticky : ""
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
                <hr/>
                <div className={styles.headerButtons}>
                    {user ? (
                        <Link href="/account" className={styles.accountItem}>
                            <Image src={avatar} alt="Avatar" width={54} height={54}/>
                            <div className={styles.accountItemCredentials}>
                                <p>{user.username}</p>
                                <div className={styles.accountWallet}>
                                    <Image src={wager} alt="wager" width={24} height={24}/>
                                    {user.points}
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <div className={styles.loginButton}>
                            <Button variant="outlined" icon={FaSignInAlt} onClick={handleLogin}>
                                Login
                            </Button>
                        </div>
                    )}
                    <button className={styles.buttonBurger} onClick={toggleMenu}>
                        {menuOpen ? (
                            <Image src={times} alt="times" width={20} height={16}/>
                        ) : (
                            <Image src={burger} alt="burger" width={20} height={16}/>
                        )}
                    </button>
                </div>
                <div
                    className={`${styles.menu} ${menuOpen ? styles.slideDown : styles.slideUp}`}
                >
                    {links.map((link, index) => (
                        <a key={index} href={link.link} className={styles.menuLink}>
                            <link.icon className={styles.linkIcon}/>
                            {link.title}
                        </a>
                    ))}
                </div>
            </header>
        </>
    );
};

export default Header;