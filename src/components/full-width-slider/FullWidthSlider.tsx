import React from 'react';
import styles from "./FullWidthSlider.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { sliderImages } from "@/utils/sliderImages";
import Image from "next/image";

const FullWidthSlider = () => {
    return (
        <div className={styles.slider}>
            <button><FaArrowLeft/></button>
            <div className={styles.sliderContent}>
                {sliderImages.map(image => (
                    <Image key={image.id} src={image.src} alt={image.alt} className={styles.sliderImage} width="120" height="40" />
                ))}
            </div>
            <button><FaArrowRight/></button>
        </div>
    );
};

export default FullWidthSlider;