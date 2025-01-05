"use client";

import React, {FC} from 'react';
import styles from "./HowItWorks.module.scss";
import Title from "@/components/title/Title";
import InfoIcon from "../../../public/info-icon-png.png";
import {HowItWorksProps} from "@/types/howItWorks";
import Button from "@/components/button/Button";
import {FaEye} from "react-icons/fa";
import Image from "next/image";

const HowItWorks: FC<HowItWorksProps> = ({type}) => {
    return (
        <div>
            {type === "1" ? (
                <div className={styles.howItWorks}>
                    <Title h2="how it" span="works"/>
                    <div className={styles.howItWorksPoints}>
                        <div className={styles.howItWorksPoint}>
                            <p>1</p>
                            <h3>Get FREE Points</h3>
                            <p>Earn points by watching Elder`&lsquo;s stream at <a href="kick.com/elderbreaks">kick.com/elderbreaks</a>  and participating in FREE raffles, which will appear at random times in chat.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>2</p>
                            <h3>Get Points by Wagering</h3>
                            <p>Earn points by wagering/depositing on any of our Leaderboards above. (COMING SOON).</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>3</p>
                            <h3>Spend your points</h3>
                            <p>Spend your accumulated points by going to the Points Shop, Raffles, or Cases sections! (COMING SOON).</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <Image src={InfoIcon.src} alt="Info icon" width={75} height={75}/>
                        <p>
                            Please note: To ensure a fair gaming environment, refrain from misusing the system. Each
                            user will be manually reviewed for compliance with leaderboard rules and potential abuse.
                        </p>
                    </div>
                </div>
            ) : (
                <div className={styles.howItWorksSecond}>
                <Title h2="how it" span="works"/>
                    <div className={styles.howItWorksPointsSecond}>
                        <div className={styles.howItWorksPoint}>
                            <p>1</p>
                            <h3>Step 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>2</p>
                            <h3>Step 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>3</p>
                            <h3>Step 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>4</p>
                            <h3>Step 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.</p>
                        </div>
                    </div>
                    <div className={styles.infoSecond}>
                        <div className={styles.infoSecondContainer}>
                            <Image src={InfoIcon.src} alt="Info icon" width={75} height={75}/>
                            <p>
                                Please play responsibly - <br/> read the information before playing!
                            </p>
                        </div>
                        <Button variant="orange-non-centered" icon={FaEye}>Learn More</Button>
                    </div>
                    <article className={styles.freeEntry}>
                        <h3>Free entry method</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                            sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
                            pronin sapien nunc accuan eget.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                            sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
                            pronin sapien nunc accuan eget.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                            sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
                            pronin sapien nunc accuan eget.</p>
                    </article>
                </div>
            )}
        </div>
    );
};

export default HowItWorks;