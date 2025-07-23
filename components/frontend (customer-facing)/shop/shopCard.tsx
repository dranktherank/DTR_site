import styles from './shopCard.module.css';
import Image from 'next/image';

export default function ShopCard({ bg_color, img1, img2, text1, text2, text3}) {
  return (
      <div className={styles.container}>
          <div className={styles.item3}>
            <div>
            <h2>{text1}</h2>
            <p>{text2}</p>
            <p>{text3}</p>
            </div>
            <p style={{ fontStyle: 'italic', textAlign: 'right' }}>drink the river</p>
          </div>

          <div className={styles.item1}>
            <Image
              src={img1}
              alt="Product image 1"
              width={500}    // or your image's natural width or any preferred width
              height={0}     // keep height 0 for auto or calculate aspect ratio height
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>

        <div className={styles.item2}>
          <Image
            src={img2}
            alt="Product image 2"
            width={500}
            height={0}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>
  );
}
