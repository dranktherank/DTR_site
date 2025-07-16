'use client';
import { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

export default function Slideshow({ data }) {
  const slides = data || [
    { src: 'static/deer_shirts/brown_white_webp.webp', alt: 'Deer Shirt - brown/white'},
    { src: 'static/deer_shirts/green_white_webp.webp', alt: 'Deer Shirt - green/white'},
    { src: 'static/deer_shirts/red_brown_webp.webp', alt: 'Deer Shirt - red/brown'},
    { src: 'static/deer_shirts/2shirts_webp.webp', alt: 'Deer Shirt - red/brown'}
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let next = prevIndex + n;
      if (next > slides.length) return 1;
      if (next < 1) return slides.length;
      return next;
    });
  };

  const currentSlide = (n) => {
    if (n > slides.length) setSlideIndex(1);
    else if (n < 1) setSlideIndex(slides.length);
    else setSlideIndex(n);
  };

  return (
    <div className={styles['container']}>
      {slides.map((slide, index) => (
        <div
          className={styles['mySlides']}
          key={index}
          style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}
        >
          <div className={styles['numbertext']}>{index + 1} / {slides.length}</div>
          <img src={slide.src} style={{ width: '100%' }} alt={slide.alt} />
        </div>
      ))}

      <button className={styles['prev']} onClick={() => plusSlides(-1)}>&#10094;</button>
      <button className={styles['next']} onClick={() => plusSlides(1)}>&#10095;</button>

      <div className={styles['row']}>
        {slides.map((slide, index) => (
          <div className={styles['column']} key={index}>
            <img
              className={`${styles['demo']} ${styles['cursor']} ${slideIndex === index + 1 ? styles['active'] : ''}`}
              src={slide.thumbnail}
              style={{ width: '100%', opacity: slideIndex === index + 1 ? 1 : 0.6 }}
              onClick={() => currentSlide(index + 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
