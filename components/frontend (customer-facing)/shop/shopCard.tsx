import styles from './shopCard.module.css';
import Image from 'next/image';

interface ShopCardProps {
  bg_color?: string;
  img1: string;
  img2: string;
  text1: string;
  text2: string;
  text3: string;
}

export default function ShopCard({ bg_color, img1, img2, text1, text2, text3 }: ShopCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <Image
          src={img1}
          alt="Product image 1"
          width={500}
          height={0}
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

      <div className={styles.rightcol}>
        <div>
          <h2>{text1}</h2>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
        <p>drink the river</p>
      </div>
    </div>
  );
}