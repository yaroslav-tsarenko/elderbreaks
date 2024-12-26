import React, { useState, useEffect, useRef } from 'react';
import styles from './FullWidthSlider.module.scss';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { sliderImages } from '@/mockup-data/sliderImages';
import Image from 'next/image';
import { useLeaderboard } from '@/utils/LeaderboardContext';
import { newRequest } from '@/utils/newRequest';
import CustomAlert from '@/components/custom-alert/CustomAlert';

const FullWidthSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [isProcessing, setIsProcessing] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const { setLeaderboard } = useLeaderboard();

    useEffect(() => {
        const updateSlidesToShow = () => {
            setSlidesToShow(window.innerWidth <= 1028 ? 1 : 3);
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    useEffect(() => {
        const savedLeaderboard = localStorage.getItem('leaderboard');
        if (savedLeaderboard) {
            setLeaderboard(JSON.parse(savedLeaderboard));
        }
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
        setIsProcessing(true);
        try {
            let leaderboardName = alt;
            if (alt === "CsgobigLeaderboard") {
                leaderboardName = "CSGOBIG LEADERBOARD";
            } else if (alt === "RoobetLeaderboard") {
                leaderboardName = "ROOBET LEADERBOARD";
            } else if (alt === "EmpireDropLeaderboard") {
                leaderboardName = "EMPIRE DROP LEADERBOARD";
            } else if (alt === "RainLeaderboard") {
                leaderboardName = "RAIN LEADERBOARD";
            } else if (alt === "DuelGpLeaderboard") {
                leaderboardName = "DUEL GP LEADERBOARD";
            } else if (alt === "CsgostakeLeaderboard") {
                leaderboardName = "CSGOSTAKE LEADERBOARD";
            } else if (alt === "CsgorollLeaderboard") {
                leaderboardName = "CSGOROLL LEADERBOARD";
            }

            const response = await newRequest.get(`/user/leaderboard/${alt}`);
            setLeaderboard(response.data);
            localStorage.setItem('leaderboard', JSON.stringify(response.data));
            console.log('Leaderboard data:', response.data);
            setAlertMessage(`${leaderboardName}!`);
        } catch (error) {
            console.error('Error fetching leaderboard data:', error);
            setAlertMessage('Failed to fetch leaderboard data.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <>
            {isProcessing && (
                <div className={styles.overlay}>
                    <div className={styles.containerLoader}>
                        <div className={styles.loader}></div>
                        <p>Processing...</p>
                    </div>
                </div>
            )}
            {alertMessage && (
                <CustomAlert message={alertMessage} onClose={() => setAlertMessage(null)} />
            )}
            <div className={styles.slider}>
                <button onClick={handlePrev} className={styles.arrowButton}><FaArrowLeft /></button>
                <div className={styles.sliderContent} ref={sliderRef}>
                    <div
                        className={styles.sliderTrack}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                            width: `${(sliderImages.length / slidesToShow) * 55}%`,
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
                                    width={170}
                                    height={90}
                                    onClick={() => handleImageClick(image.alt)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className={styles.arrowButton}><FaArrowRight /></button>
            </div>
        </>
    );
};

export default FullWidthSlider;