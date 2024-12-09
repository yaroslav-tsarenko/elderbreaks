import React from 'react';
import styles from "./Footer.module.scss";
import Link from "next/link";
import FooterLogo from "@/assets/icons/elderbreaks-logo.svg";
import Image from "next/image";
import facebook from "@/assets/icons/facebook.svg";
import viber from "@/assets/icons/viber.svg";
import instagram from "@/assets/icons/instagram.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerUpper}>
                    <div className={styles.footerLogo}>
                        <Image src={FooterLogo.src} alt="Footer logo" width="307" height="150"/>
                        <p>Copyright@2024 ElderBreaks</p>
                    </div>
                    <div className={styles.footerNav}>
                        <h3>Explore</h3>
                        <div className={styles.footerLinks}>
                            <Link className={styles.link} href="/">Leaderboard</Link>
                            <Link className={styles.link} href="/">Points Shop</Link>
                            <Link className={styles.link} href="/">Pachinko</Link>
                            <Link className={styles.link} href="/">Raffles</Link>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <h3>About</h3>
                        <div className={styles.footerLinks}>
                            <Link className={styles.link} href="/">Contact</Link>
                            <Link className={styles.link} href="/">FAQ</Link>
                            <Link className={styles.link} href="/">Terms of service</Link>
                            <Link className={styles.link} href="/">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <h3>Stay up to date</h3>
                        <div className={styles.footerSocials}>
                            <Link className={styles.social} href="https://facebook.com">
                                <Image src={facebook.src} alt="Facebook" width="30" height="30"/>
                            </Link>
                            <Link className={styles.social} href="https://viber.com">
                                <Image src={viber.src} alt="Viber" width="30" height="30"/>
                            </Link>
                            <Link className={styles.social} href="https://instagram.com">
                                <Image src={instagram.src} alt="Instagram" width="30" height="30"/>
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