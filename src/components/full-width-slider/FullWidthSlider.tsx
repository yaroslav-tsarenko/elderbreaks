// src/components/full-width-slider/FullWidthSlider.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './FullWidthSlider.module.scss';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { sliderImages } from '@/mockup-data/sliderImages';
import Image from 'next/image';
import { newRequest } from '@/utils/newRequest';
import { useLeaderboard } from '@/utils/LeaderboardContext';

const FullWidthSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const sliderRef = useRef<HTMLDivElement>(null);
    const { setLeaderboard } = useLeaderboard();

    useEffect(() => {
        const updateSlidesToShow = () => {
            setSlidesToShow(window.innerWidth <= 1028 ? 2 : 3);
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    useEffect(() => {
        const fetchRandomLeaderboard = async () => {
            const randomImage = sliderImages[Math.floor(Math.random() * sliderImages.length)];
            try {
                const response = await newRequest.get(`/user/leaderboard/${randomImage.alt}`);
                setLeaderboard(response.data);
                console.log('Leaderboard:', response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };

        fetchRandomLeaderboard();
    }, [setLeaderboard]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length
        );
    };

    const handleImageClick = async (alt: string) => {
        try {
            const response = await newRequest.get(`/user/leaderboard/${alt}`);
            setLeaderboard({ model: alt, data: response.data });
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    return (
        <div className={styles.slider}>
            <button onClick={handlePrev} className={styles.arrowButton}><FaArrowLeft /></button>
            <div className={styles.sliderContent} ref={sliderRef}>
                <div
                    className={styles.sliderTrack}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                        width: `${(sliderImages.length / slidesToShow) * 100}%`,
                        transition: 'transform 0.5s ease-in-out',
                    }}>
                    {sliderImages.map((image) => (
                        <div
                            key={image.id}
                            className={styles.sliderItem}
                            style={{ width: `${100 / slidesToShow}%` }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className={styles.sliderImage}
                                width={120}
                                height={40}
                                onClick={() => handleImageClick(image.alt)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleNext} className={styles.arrowButton}><FaArrowRight /></button>
        </div>
    );
};

export default FullWidthSlider;