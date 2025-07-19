import NavBarWithBackButton from '../template-components/NavBarWithBackButton';
import CUST_ID_P_TAG from '../template-components/CUST_ID_P_TAG';
import styles from './shop.module.css';
import ShopCard from './shopCard';

const cardProps_1 = {
  bg_color: '#30275eff',
  img1: '/product_images/1-450.webp',
  img2: '/product_images/3-450.webp',
  text1: 'Drink the River',
  text2: 'Crawfish Tee',
  text3: '$399.99'
};

const cardProps_2 = {
  bg_color: '#254415ff',
  img1: '/product_images/4-450.webp',
  img2: '/product_images/2-450.webp',
  text1: 'Drink the River',
  text2: 'Deer Tee',
  text3: '$199.99'
};

const cardProps_3 = {
  bg_color: '#c6d4acff',
  img1: '/product_images/4-450.webp',
  img2: '/product_images/2-450.webp',
  text1: 'Drink the River',
  text2: 'Map Tee',
  text3: '$69.99'
};


export default function Shop() {
  return (
    <div className={styles['']}>
      
      <NavBarWithBackButton />
      <div className={styles['shopcard-padding-between']}>
        <ShopCard {...cardProps_1}/>
        <ShopCard {...cardProps_2}/>
        <ShopCard {...cardProps_3}/>
      </div>
        
      <div>
        <CUST_ID_P_TAG />
      </div>
    </div>
  );
}

