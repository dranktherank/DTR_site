'use client';
import { useState, useEffect } from 'react';
import styles from './ProductImages.module.css';
import Image from 'next/image';

export default function ProductImages() {
  return (
    <div className={styles['container']}>
        <div className="images">
            <Image
            src={'/gallery_images/8-600.webp'}
            alt={`Image`}
            width={0}
            height={0}
            sizes="(max-width: 1000px) 100vw, 30vw"
            className={styles.responsiveImage}
            priority={false}
          />
          <Image
            src={'/gallery_images/8-600.webp'}
            alt={`Image`}
            width={0}
            height={0}
            sizes="(max-width: 1000px) 100vw, 30vw"
            className={styles.responsiveImage}
            priority={false}
          />
        </div>
        <div className="text">
            <p>Your text goes here.</p>
        </div>
    </div>
  );
}