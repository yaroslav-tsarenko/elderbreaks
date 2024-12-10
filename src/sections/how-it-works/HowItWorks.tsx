import React, { FC } from 'react';
import styles from "./HowItWorks.module.scss";
import Title from "@/components/title/Title";
import Image from "next/image";
import InfoIcon from "@/assets/images/info-icon.svg";
import { HowItWorksProps } from "@/types/howItWorks";
import Button from "@/components/button/Button";
import {FaEye} from "react-icons/fa";

const HowItWorks: FC<HowItWorksProps> = ({ style }) => {
    return (
        <div>
            {style === "1" ? (
                <div className={styles.howItWorks}>
                    <Title h2="how it" span="works" />
                    <div className={styles.howItWorksPoints}>
                        <div className={styles.howItWorksPoint}>
                            <p>1</p>
                            <h3>Get Points</h3>
                            <p>Gain points by attending the WRewards team streams and exchange them into GPoints to play.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>2</p>
                            <h3>Get Points</h3>
                            <p>Gain points by attending the WRewards team streams and exchange them into GPoints to play.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>3</p>
                            <h3>Get Points</h3>
                            <p>Gain points by attending the WRewards team streams and exchange them into GPoints to play.</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <Image src={InfoIcon} alt="Info icon" width={75} height={75} />
                        <p>
                            Please note, to ensure a fair gaming environment, refrain from misusing the system. Each user will be manually checked for compliance with leaderboard rules and abuse.
                        </p>
                    </div>
                </div>
            ) : (
                <div className={styles.howItWorksSecond}>
                    <Title h2="how it" span="works" />
                    <div className={styles.howItWorksPointsSecond}>
                        <div className={styles.howItWorksPoint}>
                            <p>1</p>
                            <h3>Step 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>2</p>
                            <h3>Step 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>3</p>
                            <h3>Step 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                        </div>
                        <div className={styles.howItWorksPoint}>
                            <p>4</p>
                            <h3>Step 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                        </div>
                    </div>
                    <div className={styles.infoSecond}>
                        <div className={styles.infoSecondContainer}>
                            <Image src={InfoIcon} alt="Info icon" width={75} height={75}/>
                            <p>
                                Please play responsibly - <br/> read the information before playing!
                            </p>
                        </div>
                        <Button variant="orange-non-centered" icon={FaEye}>Learn More</Button>
                    </div>
                        <article className={styles.freeEntry}>
                            <h3>Free entry method</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
                        </article>
                </div>
            )}
        </div>
    );
};

export default HowItWorks;