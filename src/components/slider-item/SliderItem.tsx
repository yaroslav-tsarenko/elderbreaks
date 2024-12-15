
import React, { useRef, useState, useEffect } from 'react';
import styles from './SliderItem.module.scss';
import { SliderItemProps } from '@/types/slider';

const SliderItem: React.FC<SliderItemProps> = ({ slidesToShow, children }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

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

    const handleSwipe = (deltaX: number) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        const totalSlides = React.Children.count(children);

        // Move in the opposite direction of swipe
        const newIndex = (currentIndex + Math.sign(deltaX) + totalSlides) % totalSlides;
        setCurrentIndex(newIndex);

        setTimeout(() => setIsTransitioning(false), 300);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > 50) {
            handleSwipe(deltaX);
        }

        setTouchStartX(null);
    };

    return (
        <div
            className={styles.sliderContainer}
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className={`${styles.slider} ${slidesToShow === 4 ? styles.gridLayout : ''}`}
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
                        style={{
                            width: `${slideWidth}px`,
                            padding: '10px', // Slide padding
                        }}
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
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderItem;