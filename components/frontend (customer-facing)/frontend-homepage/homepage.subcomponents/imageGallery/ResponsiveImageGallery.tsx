import Image from 'next/image';
import styles from './ResponsiveImageGallery.module.css';

const images = [
  '/static/IMG_0268.jpeg',
  '/static/IMG_1286.jpeg',
  '/static/IMG_1472.jpeg',
  '/static/IMG_1473.jpeg',
  '/static/IMG_3640.jpeg',
  '/static/IMG_3642.jpeg',
  '/static/IMG_3643.jpeg',
  '/static/IMG_3647.jpeg',
  '/static/IMG_3655.jpeg',
  '/static/IMG_3657.jpeg',
  '/static/IMG_3659.jpeg',
  '/static/IMG_3660.jpeg',
  '/static/IMG_3664.jpeg',
  '/static/IMG_3666.jpeg',
  '/static/IMG_5338.jpeg',
  '/static/IMG_5357.jpeg',
  '/static/IMG_5741.jpeg',
  '/static/IMG_5795.jpeg',
];

export default function ResponsiveImageGallery() {
  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
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
