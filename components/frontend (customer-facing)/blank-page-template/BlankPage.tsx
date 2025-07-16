import NavBar from '../template-components/NavBarWithBackButton';
import CUST_ID_P_TAG from '../template-components/CUST_ID_P_TAG';

export default function HomePage() {
  return (
    <div className='page-layout-container'>
      
      <NavBar />

      <div>
        <CUST_ID_P_TAG />
      </div>
    </div>
  );
}