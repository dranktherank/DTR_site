'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ResponsiveImageGallery.module.css';

const images = [
  '/gallery_images/1-600.webp',
  '/gallery_images/2-600.webp',
  '/gallery_images/4-600.webp',
  '/gallery_images/5-600.webp',
  '/gallery_images/6-600.webp',
  '/gallery_images/7-600.webp',
  '/gallery_images/8-600.webp',
  '/gallery_images/9-600.webp',
  '/gallery_images/10-600.webp',
  '/gallery_images/11-600.webp',
  '/gallery_images/12-600.webp',
  '/gallery_images/13-600.webp',
  '/gallery_images/14-600.webp',
  '/gallery_images/15-600.webp',
  '/gallery_images/16-600.webp',
  '/gallery_images/17-600.webp',
  '/gallery_images/18-600.webp',
  '/gallery_images/19-600.webp',
  '/gallery_images/20-600.webp',
  '/gallery_images/21-600.webp',
  '/gallery_images/22-600.webp',
  '/gallery_images/23-600.webp',
  '/gallery_images/24-600.webp',
  '/gallery_images/25-600.webp',
];

export default function ResponsiveImageGallery() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);

    shuffled.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setLoadedCount((prev) => prev + 1);
      };
      img.onerror = () => {
        setLoadedCount((prev) => prev + 1); // still count it
      };
    });
  }, []);

  const allLoaded = loadedCount === images.length;
  const percent = Math.round((loadedCount / images.length) * 100);

  if (!allLoaded) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loaderBar}>
          <div
            className={styles.loaderProgress}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {shuffledImages.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={src}
            alt={`Image ${index}`}
            width={0}
            height={0}
            sizes="(max-width: 1000px) 100vw, 30vw"
            className={styles.responsiveImage}
            priority={false}
          />
        </div>
      ))}
    </div>
  );
}
