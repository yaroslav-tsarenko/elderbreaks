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
                            <h3>Accumulate Points</h3>
                            <p>Earn points by participating in WRewards team streams and exchange them for GPoints to
                                play.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>2</p>
                            <h3>Gather Points</h3>
                            <p>Join WRewards team streams to gather points and convert them into GPoints for gaming.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>3</p>
                            <h3>Collect Points</h3>
                            <p>Participate in WRewards team streams to collect points and turn them into GPoints for
                                gameplay.</p>
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