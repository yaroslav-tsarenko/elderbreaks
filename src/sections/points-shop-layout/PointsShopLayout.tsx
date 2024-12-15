"use client";

import React from 'react';
import styles from "./PointsShopLayout.module.scss";
import Image from "next/image";
import InfoIcon from "../../../public/info-icon-png.png";
import Button from "@/components/button/Button";
import {FaSearch} from "react-icons/fa";
import {LuCircleDollarSign} from "react-icons/lu";
import filter from "../../../public/filter-icon.png"
import cube from "../../../public/cube-png.png"
import wager from "../../../public/wager-icon-png.png"
import purchases from "../../../public/chest-png.png"
import topSpender from "../../../public/top-spender-png.png"
import howl from "../../../public/howl.png"
import LimitedOffer from "@/components/limited-offer/LimitedOffer";
import LimitedOfferPagination from "@/components/pagination-limited-offers/LimitedOfferPagination";
import Title from "@/components/title/Title";

const PointsShopLayout = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.infoSecond}>
                    <div className={styles.infoSecondContainer}>
                        <Image src={InfoIcon.src} alt="Info icon" width={75} height={75}/>
                        <div className={styles.infoDescription}>
                            <h2>Attention!</h2>
                            <p>All redemptions will be manually reviewed. Prize will go to active community member.
                                Physical prizes cannot be traded for crash</p>
                        </div>
                    </div>
                    <Button variant="orange-non-centered">confirm</Button>
                </div>
                <div className={styles.sectionDescription}>
                    <h1>POINTS SHOP</h1>
                    <p>Spend your points to buy amazing goods!</p>
                    <Button variant="orange">how to get points?</Button>
                </div>
            </div>
            <div className={styles.metricPointsContent}>
                <div className={styles.metricPoints}>
                    <Image src={cube} alt="image" width={90} height={90} className={styles.metricImage}/>
                    <h2>Most Popular Item</h2>
                    <p>$125 SHARE in a WRewards Bonus Hunt Opening</p>
                </div>
                <div className={styles.metricPoints}>
                    <Image src={wager} alt="image" width={90} height={90} className={styles.metricImage}/>
                    <h2>Total Points Spent</h2>
                    <p>68,433,500</p>
                </div>
                <div className={styles.metricPoints}>
                    <Image src={purchases} alt="image" width={90} height={90} className={styles.metricImage}/>
                    <h2>Total Purchases</h2>
                    <p>2,194</p>
                </div>
                <div className={styles.metricPoints}>
                    <Image src={topSpender} alt="image" width={90} height={90} className={styles.metricImage}/>
                    <h2>Top Spender</h2>
                    <p>nevo_O</p>
                </div>
            </div>
            <div className={styles.searchInner}>
                <div className={styles.search}>
                    <div className={styles.searchbar}>
                        <FaSearch/>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className={styles.searchOptions}>
                        <div className={styles.filter}>
                            <Image src={filter} alt="filter icon" width={24} height={24}/>
                            <p>
                                From High to Low
                            </p>
                        </div>
                        <select name="" id="">
                            <option value="">Order</option>
                            <option value="">From Low to High</option>
                            <option value="">From Hight to Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.limitedOfferContent}>
                {Array.from({length: 8}).map((_, index) => (
                    <LimitedOffer key={index}/>
                ))}
            </div>
            <div className={styles.banner}>
                <div className={styles.bannerLeft}>
                    <p>Become the owner of the</p>
                    <h2>M4A4 | Howl
                        <span>
                            (Factory New)
                        </span>
                    </h2>
                    <h5>
                        Get points and exchange them for
                        <span>
                            items in our shop
                        </span>
                    </h5>
                    <div className={styles.bannerButtons}>
                        <Button variant="orange-full-width">How to get Points</Button>
                        <Button variant="orange-outlined" icon={LuCircleDollarSign}>Buy item for 312,000</Button>
                    </div>
                </div>
                <Image src={howl} className={styles.howl} alt="howl" width={420} height={320}/>
            </div>
            <LimitedOfferPagination/>
            <div className={styles.howItWorks}>
                <Title h2="how to earn" span="points" />
                <div className={styles.howItWorksPoints}>
                    <div className={styles.howItWorksPoint}>
                        <p>1</p>
                        <h3>Follow my Twitch channel</h3>
                    </div>
                    <div className={styles.howItWorksPoint}>
                        <p>2</p>
                        <h3>Stay active on my Streams</h3>
                    </div>
                    <div className={styles.howItWorksPoint}>
                        <p>3</p>
                        <h3>Win points in Pachinko & Giveaways</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PointsShopLayout;