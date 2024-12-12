import React, { useState, useRef, useEffect } from 'react';
import { SliderItemProps } from '@/types/slider';
import styles from './SliderItem.module.scss';

const SliderItem: React.FC<SliderItemProps> = ({ children, slidesToShow }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const touchStartXRef = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartXRef.current === null) return;
        const touchEndX = e.touches[0].clientX;
        const touchDiff = touchStartXRef.current - touchEndX;

        if (touchDiff > 50) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
            touchStartXRef.current = null;
        } else if (touchDiff < -50) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children));
            touchStartXRef.current = null;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
        }, 3000);

        return () => clearInterval(interval);
    }, [children]);

    return (
        <div className={styles.slider} ref={sliderRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className={styles.sliderTrack} style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
                {React.Children.map(children, (child, index) => (
                    <div key={index} className={styles.slide} style={{ width: `${100 / slidesToShow}%` }}>
                        {child}
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {React.Children.map(children, (_, index) => (
                    <div key={index} className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`} />
                ))}
            </div>
        </div>
    );
};

export default SliderItem;