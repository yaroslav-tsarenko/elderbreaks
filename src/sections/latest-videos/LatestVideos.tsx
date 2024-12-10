"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import styles from "./LatestVideos.module.scss";
import Button from "@/components/button/Button";
import { FaYoutube } from "react-icons/fa";
import { highlightedVideos } from "@/utils/latestVideos";
import HighlightedVideo from "@/components/latest-video/HighlightedVideo";
import { LatestVideoProps } from "@/types/latestVideo";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
    ssr: false,
});
const SwiperSlide = dynamic(
    () => import("swiper/react").then((mod) => mod.SwiperSlide),
    { ssr: false }
);

import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";

const LatestVideos: FC<LatestVideoProps> = ({ type }) => {
    return (
        <div className={styles.latestVideos}>
            <h2>
                {type ? "highlights" : "latest"}<span>videos</span>
            </h2>
            <hr />
            {type === "Highlights" ? (
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true} // Add navigation
                    modules={[Pagination, Navigation]} // Load Swiper modules
                    className={styles.slider}
                >
                    {highlightedVideos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <HighlightedVideo
                                nickname={video.nickname}
                                description={video.description}
                                videoUrl={video.videoUrl}
                                hashTags={video.hashTags}
                                coverImage={video.coverImage}
                                avatar={video.avatar}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className={styles.latestVideosContent}>
                    {highlightedVideos.map((video, index) => (
                        <HighlightedVideo
                            key={index}
                            nickname={video.nickname}
                            description={video.description}
                            videoUrl={video.videoUrl}
                            hashTags={video.hashTags}
                            coverImage={video.coverImage}
                            avatar={video.avatar}
                        />
                    ))}
                </div>
            )}
            {type ? null : (
                <Button icon={FaYoutube} variant="orange">
                    CHECK OUT MY YOUTUBE CHANNEL
                </Button>
            )}
        </div>
    );
};

export default LatestVideos;