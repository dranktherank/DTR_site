import Image from 'next/image';
import styles from './ResponsiveImageGallery.module.css';

const images = [
  '/gallery_images/IMG_0268_webp.webp',
  '/gallery_images/IMG_1286_webp.webp',
  '/gallery_images/IMG_1472_webp.webp',
  '/gallery_images/IMG_1473_webp.webp',
  '/gallery_images/IMG_3640_webp.webp',
  '/gallery_images/IMG_3642_webp.webp',
  '/gallery_images/IMG_3643_webp.webp',
  '/gallery_images/IMG_3647_webp.webp',
  '/gallery_images/IMG_3655_webp.webp',
  '/gallery_images/IMG_3657_webp.webp',
  '/gallery_images/IMG_3659_webp.webp',
  '/gallery_images/IMG_3660_webp.webp',
  '/gallery_images/IMG_3664_webp.webp',
  '/gallery_images/IMG_3666_webp.webp',
  '/gallery_images/IMG_5338_webp.webp',
  '/gallery_images/IMG_5357_webp.webp',
  '/gallery_images/IMG_5741_webp.webp',
  '/gallery_images/IMG_5795_webp.webp',
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
