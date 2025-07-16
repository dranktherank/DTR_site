import NavBarWithBackButton from '../../components/frontend (customer-facing)/template-components/NavBarWithBackButton';
import CUST_ID_P_TAG from '../../components/frontend (customer-facing)/template-components/CUST_ID_P_TAG';

export default function HomePage() {
  return (
    <div className='page-layout-container'>
      
      <NavBarWithBackButton />

        <div><p>[INFO]</p></div>
      <div>
        <CUST_ID_P_TAG />
      </div>
    </div>
  );
}