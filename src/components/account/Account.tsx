'use client';

import React from 'react';
import styles from "./Account.module.scss";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import Button from "@/components/button/Button";
import wager from "../../../public/wager-icon-png.png";
import { FaBitcoin, FaEthereum, FaUser, FaCube, FaCog, FaSave, FaLink } from "react-icons/fa";
import { useUser } from '@/utils/UserContext';


const AccountComponent = () => {
    const user = useUser();

    if (!user) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.accountHeader}>
                <div className={styles.accountItem}>
                    <Image src={avatar} alt="Avatar" width={54} height={54} />
                    <div className={styles.accountItemCredentials}>
                        <p>{user.name}</p>
                        <div className={styles.accountWallet}>
                            <Image src={wager} alt="wager" width={24} height={24} />
                            1254
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.account}>
                <div className={styles.user}>
                    <Image src={avatar} alt="avatar" height={96} width={96} />
                    <div className={styles.userCredentials}>
                        <h2>{user.name}
                            <span>Admin</span>
                        </h2>
                        <p>June 14</p>
                    </div>
                </div>
                <hr />
                <div className={styles.options}>
                    <div className={styles.inputs}>
                        <div className={styles.input}>
                            <FaEthereum className={styles.icon} />
                            <input type="text" placeholder="ETH Address" readOnly value={user.ethAddress} />
                        </div>
                        <div className={styles.input}>
                            <FaBitcoin className={styles.icon} />
                            <input type="text" placeholder="BTC Address" readOnly value={user.btcAddress} />
                        </div>
                        <div className={styles.input}>
                            <FaUser className={styles.icon} />
                            <input type="text" placeholder="Username" readOnly value={user.username} />
                        </div>
                        <div className={styles.input}>
                            <FaCube className={styles.icon} />
                            <input type="text" placeholder="Stake Username" readOnly value={user.stakeUsername} />
                        </div>
                    </div>
                    <div className={styles.optionButtons}>
                        <Button variant="outlined-small" icon={FaSave}>SAVE CHANGES</Button>
                        <Button variant="blue-small" icon={FaLink}>LINK KICK</Button>
                    </div>
                </div>
                <hr />
                <Button variant="orange" icon={FaCog}>Admin Panel</Button>
            </div>
        </div>
    );
};

export default AccountComponent;