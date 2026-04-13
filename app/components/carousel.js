'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../studies.module.css";

const Carousel = ({ images }) => {
  const data = [1, 2, 3];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
        return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 6000);
    return () => clearInterval(interval);
  });
    return (
        <div className={styles.carouselContainer}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={styles.carouselItem + " " + (index === currentIndex ? styles.shown : styles.hidden)}
                    width={704}
                    height={400}
                    loading="eager"
                />
            ))}
        </div>
    )
}

export default Carousel;
