import styles from './shopCard.module.css';
import Image from 'next/image';

export default function ShopCard({ bg_color, img1, img2, text1, text2, text3}) {
  return (
    <div
      className={styles['card-full-width']}
      style={{ backgroundColor: bg_color }}
    >
      <div className={styles['card-content']}>
        <div className={styles['text-content']}>
          
          
          <div className={styles['text-product-title-brandname-split']}>
            <p className={styles['text-content-productname']}>{text2}</p>
            <p className={styles['text-content-price']}>{text3}</p>
          </div>
          
        </div>
        
        

        <div className={styles['image-wrapper']}>
          <div className={styles['image-container']}>
            <Image
              src={img1}
              alt="Product image 1"
              fill
              sizes="(max-width: 1000px) 100vw, 30vw"
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles['image-container']}>
            <Image
              src={img2}
              alt="Product image 2"
              fill
              sizes="(max-width: 1000px) 100vw, 30vw"
              className={styles.responsiveImage}
            />
          </div>
        </div>
      </div>
      

      
    </div>
  );
}
