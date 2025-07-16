import NavBarWithBackButton from '../template-components/NavBarWithBackButton';
import CUST_ID_P_TAG from '../template-components/CUST_ID_P_TAG';
import styles from './shop.module.css';

import ShopCard from './shopCard';
import Slideshow from './Slideshow';

export default function Shop() {
  return (
    <div className={styles['SHOP-page-layout-container']}>
      
      <NavBarWithBackButton />
    
      <ShopCard/>
      
        
      <div>
        <CUST_ID_P_TAG />
      </div>
    </div>
  );
}

