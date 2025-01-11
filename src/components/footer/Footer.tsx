import React from 'react';
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../../../public/elder-logo.png";
import { FaKickstarterK, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerUpper}>
                    <div className={styles.footerLogo}>
                        <Link href={"/"}>
                            <Image src={FooterLogo.src} alt="Footer logo" width="307" height="64"/>
                        </Link>
                        <p>Made by <a href="https://tresor.tech" target="_blank" rel="noopener noreferrer">Tresor.</a> Managed by ElderBreaks Team.</p>
                    </div>
                    <div className={styles.footerNav}>
                        <h3>Explore</h3>
                        <div className={styles.footerLinks}>
                            <Link className={styles.link} href="/leaderboards">Leaderboard</Link>
                            <Link className={styles.link} href="/points-shop">Points Shop</Link>
                            <Link className={styles.link} href="/raffles">Raffles</Link>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <h3>About</h3>
                        <div className={styles.footerLinks}>
                            <Link className={styles.link} href="/#faq-section">FAQ</Link>
                            <Link className={styles.link} href="/terms-of-service">Terms of service</Link>
                            <Link className={styles.link} href="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <h3>Stay up to date</h3>
                        <div className={styles.footerSocials}>
                            <Link className={styles.social} href="https://kick.com/elderbreaks" target="_blank" rel="noopener noreferrer">
                                <FaKickstarterK/>
                            </Link>
                            <Link className={styles.social} href="https://discord.gg/VV3jJm45ux" target="_blank" rel="noopener noreferrer">
                                <FaDiscord/>
                            </Link>
                            <Link className={styles.social} href="https://youtube.com/@elderbreaks_" target="_blank" rel="noopener noreferrer">
                                <FaYoutube/>
                            </Link>
                            <Link className={styles.social} href="https://twitter.com/ElderBreaks" target="_blank" rel="noopener noreferrer">
                                <FaTwitter/>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={styles.footerBottom}>
                    <p>18+ | Gamble Responsibly | BeGambleAware. Most people gamble for fun and enjoyment. Do not think
                        of gambling as a way to make money. Only gamble with money you can afford to lose. Set a money
                        and time limit in</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;