import NavBarWithBackButton from '../../frontend (customer-facing)/template-components/NavBarWithBackButton';
import CUST_ID_P_TAG from '../../frontend (customer-facing)/template-components/CUST_ID_P_TAG';
import GET_ALL_CONTAINERS from '../util/GET_ALL_CONTAINERS'

import styles from "./backend-page.module.css"

export default function BackendPage() {
  return (
    <div className='page-layout-container'>
      
      <NavBarWithBackButton />

      <div className={styles['gray-background-content-container']}>
        <div>
          <h2>ACTIVE COLLECTIONS</h2>
        </div>

        <GET_ALL_CONTAINERS/>
        
      
        <div className={styles['gap-between-horizontal-container']}>
          <p className={styles['button']}>INACTIVE COLLECTIONS</p>
          <p className={styles['button']}>HELP</p>
        </div>
      </div>

      <div className={styles['gray-background-content-container']}>
        <div className={styles['section-title']}>
          <h2>COLLECTION MANAGEMENT</h2>
        </div>
      
        <div className={styles['gap-between-horizontal-container']}>
          <p>CRAP</p>
          <p>CRAP</p>
          <p>CRAP</p>
        </div>
      </div>

      <div>
        <CUST_ID_P_TAG />
      </div>
    </div>
  );
}