import styles from './shopCard.module.css';
import Slideshow from './Slideshow';

export default function ShopCard() {
  return (
    <div
      className={styles['card-full-width']}
      style={{ backgroundColor: '#721817' }}
    >
        <div>
          <Slideshow data={''}></Slideshow>
        </div>
        
        <div>
          <h2>Drink the River</h2>
          <p>Explore our collection of unique river-themed apparel and accessories.</p>
          <p>Free shipping on orders over $50!</p>
          <button className={styles['shop-button']}>Shop Now</button>
        </div>

    </div>
  );
}
