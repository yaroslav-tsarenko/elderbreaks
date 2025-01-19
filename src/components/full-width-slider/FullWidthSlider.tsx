import React, { useState, useEffect, useRef } from 'react';
import styles from './FullWidthSlider.module.scss';
import { sliderImages } from '@/mockup-data/sliderImages';
import Image from 'next/image';
import { useLeaderboard } from '@/utils/LeaderboardContext';
import { useLeaderboardHistory } from '@/utils/LeaderboardHistoryContext';
import { newRequest } from '@/utils/newRequest';
import CustomAlert from '@/components/custom-alert/CustomAlert';

interface FullWidthSliderProps {
    onLeaderboardSelect: (name: string) => void;
}

const FullWidthSlider: React.FC<FullWidthSliderProps> = ({ onLeaderboardSelect }) => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [isProcessing, setIsProcessing] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const { setLeaderboard, setSelectedAlt, setSelectedLeaderboard, setSelectedLeaderboardAlt } = useLeaderboard();
    const { setLeaderboardHistory, setSelectedCategory } = useLeaderboardHistory();

    useEffect(() => {
        const updateSlidesToShow = () => {
            setSlidesToShow(window.innerWidth <= 1028 ? 1 : 3);
        };
        updateSlidesToShow();
        console.log(slidesToShow)
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

    const handleImageClick = async (alt: string, category: string) => {
        setIsProcessing(true);
        setSelectedLeaderboardAlt(alt);
        try {
            const leaderboardResponse = await newRequest.get(`/content/leaderboard/${alt}`);
            setLeaderboard(leaderboardResponse.data);
            setSelectedAlt(alt);
            setSelectedLeaderboard(alt)
            localStorage.setItem('leaderboard', JSON.stringify(leaderboardResponse.data));
            const historyResponse = await newRequest.get(`/content/leaderboards/${category}`);
            setLeaderboardHistory(historyResponse.data);
            setSelectedCategory(category);
            setAlertMessage(`${alt.toUpperCase()} LEADERBOARD!`);
            onLeaderboardSelect(alt);
        } catch (error: any) {
            console.error('Error fetching leaderboard data:', error);
            setAlertMessage("Leaderboard is temporarily disabled.");
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
                <div className={styles.sliderContent} ref={sliderRef}>
                    {sliderImages.map((image) => (
                        <div
                            key={image.id}
                            className={styles.imageItem}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className={styles.sliderImage}
                                width={170}
                                height={90}
                                onClick={() => handleImageClick(image.alt, image.category!)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FullWidthSlider;