import NavBar from '../template-components/NavBarWithBackButton';
import ProductImageGallery from './ProductImageGallery';
import CUST_ID_P_TAG from '../template-components/CUST_ID_P_TAG';


export default function TestShirt() {
  return (
    <div className='page-layout-container'>
      
      <NavBar />

      <ProductImageGallery />

      <div>
        <CUST_ID_P_TAG />
      </div>
    </div>
  );
}