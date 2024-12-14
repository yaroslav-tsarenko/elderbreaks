// SliderItem.tsx
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import styles from './SliderItem.module.scss';
import { SliderItemProps } from '@/types/slider';

const SliderItem: React.FC<SliderItemProps> = ({ slidesToShow, children }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const updateSlideWidth = () => {
            if (sliderRef.current) {
                const width = sliderRef.current.offsetWidth;
                setSlideWidth(width / slidesToShow);
            }
        };
        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => {
            window.removeEventListener('resize', updateSlideWidth);
        };
    }, [slidesToShow]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleSwipe = (deltaX: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 300);

        const newIndex = (currentIndex - Math.sign(deltaX) + React.Children.count(children)) % React.Children.count(children);
        setCurrentIndex(newIndex);
    };

    return (
        <div
            className={styles.sliderContainer}
            ref={sliderRef}
            onTouchStart={(e) => {
                const touchStartX = e.touches[0].clientX;
                e.currentTarget.ontouchmove = (moveEvent) => {
                    const deltaX = touchStartX - moveEvent.touches[0].clientX;
                    handleSwipe(deltaX);
                    e.currentTarget.ontouchmove = null;
                };
            }}
        >
            <div
                className={styles.slider}
                style={{
                    transform: `translateX(-${currentIndex * slideWidth}px)`,
                    width: `${React.Children.count(children) * slideWidth}px`,
                    transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none',
                }}
            >
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className={styles.slide}
                        style={{ width: `${slideWidth}px` }}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {Array.from({ length: React.Children.count(children) }).map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                        onClick={() => handleDotClick(index)}
                        style={currentIndex === index ? { animation: 'merge 0.3s ease-in-out' } : {}}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderItem;
