import styles from './shopCard.module.css';
import ProductImages from './ProductImages';

export default function ShopCard() {
  return (
    <div
      className={styles['card-full-width']}
      style={{ backgroundColor: '#721817' }}
    >
        <div>
          <ProductImages></ProductImages>
        </div>
        
        <div>
          <h2>Drink the River</h2>
        </div>

    </div>
  );
}
