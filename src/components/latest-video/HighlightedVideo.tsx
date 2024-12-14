import React, { FC } from 'react';
import styles from "./HighlightedVideo.module.scss";
import { HighlightedVideoProps } from "@/types/highlightedVideo";
import Link from "next/link";
import Image from "next/image";

const HighlightedVideo: FC<HighlightedVideoProps> = ({ nickname, description, videoUrl, hashTags, coverImage, avatar }) => {
    return (
        <Link href={videoUrl} className={styles.video}>
            <div className={styles.videoContent} style={{
                backgroundImage: `url(${coverImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div className={styles.nickname}>
                    <Image src={avatar.src} className={styles.avatar} alt={nickname} width={47} height={47}  />
                    <p>
                        {nickname}
                    </p>
                </div>
            </div>
            <div className={styles.videoContent}>
                <p>{description}</p>
                <p>{hashTags.join(' ')}</p>
            </div>
        </Link>
    );
};

export default HighlightedVideo;